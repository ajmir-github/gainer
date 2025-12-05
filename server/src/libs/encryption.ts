import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWTSecretKey } from "../constants";
import type { UserRole } from "../database";

type JWT_PAYLOAD = { id: string; role: UserRole };

export const signToken = (payload: JWT_PAYLOAD) =>
  jwt.sign(payload, JWTSecretKey, {
    expiresIn: "45d",
  });

export const verifyToken = (token: string) =>
  jwt.verify(token, JWTSecretKey) as JWT_PAYLOAD;

export const hashPassword = (password: string) =>
  bcryptjs.hashSync(password, 10);
export const comparePassword = (password: string, hash: string) =>
  bcryptjs.compareSync(password, hash);
