import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import { UserRole } from "../prisma";

type Meta = {
  authRequired?: boolean;
  roleRequired?: UserRole[];
};

export const trpcRoot = initTRPC.context<Context>().meta<Meta>().create();
export const router = trpcRoot.router;
export const procedure = trpcRoot.procedure.use(async (opts) => {
  const { ctx, meta } = opts;
  // Check if user autheticated
  if (meta?.authRequired) ctx.getAuth(); // this throws error if not autheticated
  // Check allowed roles
  if (meta?.roleRequired) {
    const auth = ctx.getAuth();
    if (!meta.roleRequired.includes(auth.role))
      throw new TRPCError({ code: "FORBIDDEN", message: "Insufficient role" });
  }
  // Public procedure
  return opts.next();
});
