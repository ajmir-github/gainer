import { createExpressMiddleware } from "@trpc/server/adapters/express";
import auth from "./controllers/auth";
import order from "./controllers/order";
import orderItem from "./controllers/orderItem";
import product from "./controllers/product";
import review from "./controllers/review";
import user from "./controllers/user";
import { createContext, router } from "./trpcConfig";

const appRouter = router({
  auth,
  user,
  product,
  review,
  order,
  orderItem,
});

export default createExpressMiddleware({
  router: appRouter,
  createContext,
});

export type AppRouter = typeof appRouter;
