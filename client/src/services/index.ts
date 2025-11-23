import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type AppRouter from "../../../server/src";
import { SERVER_URL } from "../constants";

function getAuthToken() {
  const token = localStorage.getItem("AUTH");
  if (token) return `Bearer ${token}`;
  return "";
}

console.log(SERVER_URL);

export const Server = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${SERVER_URL}/trpc`,
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: getAuthToken(),
        };
      },
    }),
  ],
});
