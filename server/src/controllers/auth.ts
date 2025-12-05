import z from "zod";
import { procedure, router } from "../trpcConfig";

// auth and user
export default router({
  login: procedure.input(z.object({})).mutation(async ({ input, ctx: {} }) => {
    return false;
  }),
});
