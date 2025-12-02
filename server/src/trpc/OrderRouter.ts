import { procedure, router } from "../trpcConfig";

// order and order item
const OrderRouter = router({
  test: procedure.query(() => {
    return [1, 2];
  }),
});

export default OrderRouter;
