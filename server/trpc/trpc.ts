import { initTRPC } from "@trpc/server";
import z from "zod";
import { Context } from "./context";

const t = initTRPC.context<Context>().create({
  // transformer: superjson,
  errorFormatter({ shape, error }) {
    // ZodError
    if (
      error.code === "BAD_REQUEST" &&
      error.cause &&
      error.cause.name === "ZodError"
    ) {
      const errors: z.core.$ZodIssue[] = JSON.parse(error.cause.message);
      return {
        ...shape,
        data: {
          ...shape.data,
          errors,
        },
      };
    }

    return shape;
  },
});

export const middleware = t.middleware;
export const router = t.router;
export const procedure = t.procedure;
