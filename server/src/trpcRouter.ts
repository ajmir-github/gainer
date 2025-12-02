import { router } from "./trpcConfig";

const trpcRouter = router({
  auth: {},
  user: {},
  product: {},
  review: {},
  order: {},
  OrderItem: {},
});

export type TrpcRouter = typeof trpcRouter;

export default trpcRouter;
