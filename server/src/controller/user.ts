import { procedure } from "../trpcConfig";

export const listUsers = procedure.query(async (a) => {
  return [1, 2];
});
