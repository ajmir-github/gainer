import { createExpressMiddleware } from "@trpc/server/adapters/express";
import AuthRouter from "./trpc/AuthRouter";
import OrderItemRouter from "./trpc/OrderItemRouter";
import OrderRouter from "./trpc/OrderRouter";
import ProductRouter from "./trpc/ProductRouter";
import ReviewRouter from "./trpc/ReviewRouter";
import UserRouter from "./trpc/UserRouter";
import { createContext, router } from "./trpcConfig";

const appRouter = router({
  auth: AuthRouter,
  user: UserRouter,
  product: ProductRouter,
  review: ReviewRouter,
  order: OrderRouter,
  OrderItemRouter,
});

const trpcApp = createExpressMiddleware({
  router: appRouter,
  createContext,
});

export type AppRouter = typeof appRouter;

export default trpcApp;
