import { initTRPC } from "@trpc/server";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import superjson from "superjson";

type Meta = {
  authRequired?: boolean;
};

export const trpcRoot = initTRPC.context<Context>().meta<Meta>().create({
  transformer: superjson,
});
export const router = trpcRoot.router;
export const procedure = trpcRoot.procedure;

export const createContext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {
  return {};
}; // no context
// export type Context = ReturnType<typeof createContext>;
export type Context = Awaited<ReturnType<typeof createContext>>;
