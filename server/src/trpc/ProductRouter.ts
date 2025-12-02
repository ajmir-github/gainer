import { procedure, router } from "../trpcConfig";

// product and review
const ProductRouter = router({
  test: procedure.query(() => {
    return [1, 2];
  }),
});

export default ProductRouter;
