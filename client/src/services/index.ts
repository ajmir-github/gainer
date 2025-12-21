import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type AppRouter from "../../../server";
import { SERVER_URL } from "../constants";
import LocalToken from "../utils/LocalToken";

export const Server = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${SERVER_URL}/trpc`,
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: LocalToken.get(),
        };
      },
      // transformer: superjson,
    }),
  ],
});

export type { AppRouter };
