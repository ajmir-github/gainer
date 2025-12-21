import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./context";
import { getAuth, signIn, signUp } from "./routers/authRouter";
import { procedure, router } from "./trpc";

export const appRouter = router({
  auth: { getAuth, signIn, signUp },
  test: procedure.query(() => {
    return { message: "Hello from tRPC!" };
  }),
});

export const appHandler = createExpressMiddleware({
  router: appRouter,
  createContext,
});

export type AppRouter = typeof appRouter;
