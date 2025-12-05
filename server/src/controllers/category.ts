import { procedure, router } from "../trpcConfig";

export default router({
  test: procedure.query(() => {
    return [1, 2];
  }),
});
