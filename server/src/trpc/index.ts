import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./trpcContext";
import { router, publicProcedure } from "./trpcRouters";
import z from "zod";

const appRouter = router({
  userList: publicProcedure
    .input(
      z.object({
        limit: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      return {
        data: [1, 2, 3],
        input,
        v: ctx.v,
      };
    }),
});

const trpc = createExpressMiddleware({
  router: appRouter,
  createContext,
});
export default trpc;

export type AppRouter = typeof appRouter;
