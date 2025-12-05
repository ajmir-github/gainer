import { procedure, router } from "../trpcConfig";

export default router({
  test: procedure.query(async (a) => {
    return [1, 2];
  }),
});
