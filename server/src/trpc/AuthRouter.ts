import z from "zod";
import { procedure, router } from "../trpcConfig";

// auth and user
const AuthRouter = router({
  login: procedure.input(z.object({})).mutation(async ({ input, ctx: {} }) => {
    return false;
  }),
});

export default AuthRouter;
