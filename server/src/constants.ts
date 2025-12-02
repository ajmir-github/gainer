import type { CorsOptions } from "cors";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config();

function validateEnv(name: string, defaultValue?: string) {
  const val = process.env[name];
  if (val) return val;
  if (!defaultValue)
    throw Error(`Missing required environment variable: ${name}`);
  return defaultValue;
}

export const JWTSecretKey = validateEnv("JWT_SECRET_KEY", "SomethingHidden!");
export const DatabaseURL = validateEnv("DATABASE_URL");
export const ClientURL = validateEnv("CLIENT_URL", "*");
export const Port = validateEnv("PORT", "3001");
export const CorsOption: CorsOptions = {
  origin: ClientURL,
};

export const ProjectDirectory = process.cwd();
export const PublicDirectory = path.join(ProjectDirectory, "public");
