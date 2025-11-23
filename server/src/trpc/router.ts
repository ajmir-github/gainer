import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import { UserRole } from "../prisma";

type Meta = {
  roles?: UserRole[];
};

export const trpcRoot = initTRPC.context<Context>().meta<Meta>().create();

export const router = trpcRoot.router;
export const procedure = trpcRoot.procedure.use(async (opts) => {
  const { ctx, meta } = opts;

  if (meta?.roles) {
    const { role } = ctx.getAuth();
    // Admin always passes
    if (role === UserRole.ADMIN) return opts.next();

    // Check allowed roles
    if (meta.roles.includes(role)) return opts.next();

    throw new TRPCError({ code: "FORBIDDEN", message: "Insufficient role" });
  }
  // Public procedure
  return opts.next();
});
