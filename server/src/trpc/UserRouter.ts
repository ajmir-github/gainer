import z from "zod";
import { UserRole } from "../prisma";
import { hashPassword } from "../services/authService";
import { procedure, router } from "./router";

const UserRouter = router({
  // Get current user (requires auth)
  self: procedure
    .meta({
      authRequired: true,
    })
    .query(async ({ ctx: { getAuth, database } }) => {
      const auth = getAuth();
      const user = await database.user.findUnique({
        where: { id: auth.id },
      });
      return user;
    }),
  // Example admin-only action
  create: procedure
    .meta({ roleRequired: ["ADMIN"] })
    .input(
      z.object({
        email: z.email(),
        password: z.string().min(6).transform(hashPassword),
        name: z.string(),
        role: z.enum(UserRole),
      })
    )
    .mutation(async ({ input, ctx: { database } }) => {
      return database.user.create({ data: input });
    }),
  update: procedure
    .meta({ roleRequired: ["ADMIN"] })
    .input(
      z.object({
        id: z.string(),
        entries: z
          .object({
            id: z.string(),
            email: z.email(),
            password: z.string().min(6).transform(hashPassword),
            name: z.string(),
            role: z.enum(UserRole),
          })
          .partial(),
      })
    )
    .mutation(async ({ input: { id, entries }, ctx: { database } }) => {
      return database.user.update({ where: { id }, data: entries });
    }),
});

export default UserRouter;
