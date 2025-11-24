import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { verifyToken } from "../services/authService";
import { TRPCError } from "@trpc/server";
import prisma, { UserRole } from "../prisma";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  // this is accessbile in every router
  let cachedAuth: { id: string; role: UserRole } | null = null;

  function getAuthOptionally() {
    if (cachedAuth) return cachedAuth;
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace("Bearer ", "");
      try {
        cachedAuth = verifyToken(token);
      } catch (error: any) {
        // has token but invalid one
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error.message,
        });
      }
      return cachedAuth;
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
    database: prisma,
    getAuth,
    getAuthOptionally,
  };
}; // no context
export type Context = ReturnType<typeof createContext>;
