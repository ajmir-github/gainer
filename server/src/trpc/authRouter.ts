import { z } from "zod";
import { UserRole } from "../prisma";
import { router, procedure } from "./router";
import { TRPCError } from "@trpc/server";
import {
  comparePassword,
  hashPassword,
  signToken,
} from "../services/authService";

const authRouter = router({
  // Register new user
  register: procedure
    .input(
      z.object({
        email: z.email(),
        password: z.string().min(6).transform(hashPassword),
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx: { database } }) => {
      const existing = await database.user.findUnique({
        where: { email: input.email },
      });
      if (existing) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email already registered",
        });
      }

      const hashed = hashPassword(input.password);
      const user = await database.user.create({
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
    .mutation(async ({ input, ctx: { database } }) => {
      const user = await database.user.findUnique({
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
});

export default authRouter;
