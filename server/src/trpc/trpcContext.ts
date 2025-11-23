import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  // this is accessbile in every router
  return {
    v: 1,
  };
}; // no context
export type Context = Awaited<ReturnType<typeof createContext>>;
