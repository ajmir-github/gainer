import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { verifyToken } from "../services/authService";
import { TRPCError } from "@trpc/server";
import prisma, { UserRole } from "../prisma";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  // this is accessbile in every router
  const cache: { auth?: { id: string; role: UserRole } } = {};

  function getAuthOptionally() {
    if (cache.auth) return cache.auth;
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace("Bearer ", "");
      try {
        cache.auth = verifyToken(token);
      } catch (error: any) {
        // has token but invalid one
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error.message,
        });
      }
      return cache.auth;
    }
    return null;
  }
  function getAuth() {
    const auth = getAuthOptionally();
    if (!auth)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Login first",
      });

    return auth;
  }

  return {
    prisma,
    getAuth,
    getAuthOptionally,
  };
}; // no context
export type Context = ReturnType<typeof createContext>;
