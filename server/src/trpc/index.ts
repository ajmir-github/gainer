import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "./context";
import { router } from "./router";
import UserRouter from "./UserRouter";
import authRoutes from "./authRouter";

const appRouter = router({
  auth: authRoutes,
  user: UserRouter,
});

const trpc = createExpressMiddleware({
  router: appRouter,
  createContext,
});
export default trpc;

export type AppRouter = typeof appRouter;
