import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./context";
import { router, procedure } from "./router";

const appRouter = router({});

const trpc = createExpressMiddleware({
  router: appRouter,
  createContext,
});
export default trpc;

export type AppRouter = typeof appRouter;
