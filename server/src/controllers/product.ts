import { procedure, router } from "../trpcConfig";

// product and review
export default router({
  test: procedure.query(() => {
    return [1, 2];
  }),
});
