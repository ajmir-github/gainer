import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWTSecretKey } from "../constants";
import type { UserRole } from "../models";

export const signToken = (id: string, role: UserRole) =>
	jwt.sign({ id, role }, JWTSecretKey, {
		expiresIn: "45d",
	});

export const verifyToken = (token: string) =>
	jwt.verify(token, JWTSecretKey) as { id: string; role: UserRole };

export const hashPassword = (password: string) =>
	bcryptjs.hashSync(password, 10);
export const comparePassword = (password: string, hash: string) =>
	bcryptjs.compareSync(password, hash);
