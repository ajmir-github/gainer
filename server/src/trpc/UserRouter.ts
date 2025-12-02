import { procedure, router } from "../trpcConfig";

// auth and user
const UserRouter = router({
  test: procedure.query(async (a) => {
    return [1, 2];
  }),
});

export default UserRouter;
