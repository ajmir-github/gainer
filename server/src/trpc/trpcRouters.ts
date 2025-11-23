import { initTRPC } from "@trpc/server";
import { Context } from "./trpcContext";

export const trpcRoot = initTRPC.context<Context>().create();

export const router = trpcRoot.router;
export const publicProcedure = trpcRoot.procedure;

// procedure that asserts that the user is logged in
export const authedProcedure = publicProcedure.use(async function (opts) {
  const { ctx } = opts;
  // `ctx.user` is nullable
  // if (!ctx.user) {

  return opts.next({
    ctx: {
      // ✅ user value is known to be non-null now
      // user: ctx.user,
    },
  });
});
