import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type AppRouter from "../../../server/src";

function getAuthCookie() {
  return "Bearer xxx";
}

const Server = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: getAuthCookie(),
        };
      },
    }),
  ],
});

export default Server;
