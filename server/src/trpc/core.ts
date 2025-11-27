import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import type { UserRole } from "../models";
import type { Context } from ".";

type Meta = {
	authRequired?: boolean;
	roleRequired?: UserRole[];
};

export const trpcRoot = initTRPC.context<Context>().meta<Meta>().create({
	transformer: superjson,
});
export const router = trpcRoot.router;
export const procedure = trpcRoot.procedure;
