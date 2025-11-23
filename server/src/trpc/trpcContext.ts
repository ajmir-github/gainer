import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  // this is accessbile in every router

  function getAuthToken() {
    if (req.headers.authorization)
      return req.headers.authorization.replace("Bearer ", "");
    return null;
  }

  return {
    getAuthToken,
    v: 1,
  };
}; // no context
export type Context = Awaited<ReturnType<typeof createContext>>;
