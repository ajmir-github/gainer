import { z } from "zod";
import { UserRole } from "../prisma";
import { router, procedure } from "./router";
import { TRPCError } from "@trpc/server";
import {
  comparePassword,
  hashPassword,
  signToken,
} from "../services/authService";

export const authRouter = router({
  // Get current user (requires auth)
  self: procedure
    .meta({
      roles: [UserRole.USER, UserRole.ADMIN, UserRole.EMPLOYEE],
    })
    .query(async ({ ctx }) => {
      const auth = ctx.getAuth();
      const user = await ctx.prisma.user.findUnique({ where: { id: auth.id } });
      return user;
    }),

  // Register new user
  register: procedure
    .input(
      z.object({
        email: z.email(),
        password: z.string().min(6).transform(hashPassword),
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const existing = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });
      if (existing) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email already registered",
        });
      }

      const hashed = hashPassword(input.password);
      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: hashed,
          name: input.name,
          role: UserRole.USER,
        },
      });

      const token = signToken(user.id, user.role);

      return { token, user };
    }),

  // Login
  login: procedure
    .input(
      z.object({
        email: z.email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });
      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      const valid = comparePassword(input.password, user.password);
      if (!valid) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      const token = signToken(user.id, user.role);

      return { token, user };
    }),

  // Example admin-only action
  create: procedure
    .meta({ roles: [UserRole.ADMIN] })
    .input(
      z.object({
        email: z.email(),
        password: z.string().min(6).transform(hashPassword),
        name: z.string(),
        role: z.enum(UserRole),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.create({ data: input });
    }),
});
