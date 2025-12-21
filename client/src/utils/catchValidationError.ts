import type { TRPCClientError } from "@trpc/client";
import type { UseFormSetError } from "react-hook-form";
import type { AppRouter } from "../services";

export default function catchValidationError(setError: UseFormSetError<any>) {
  return (error: TRPCClientError<AppRouter>) => {
    if (!(error.data && "errors" in error.data)) return error;
    error.data.errors.forEach(({ path, message }) =>
      setError(path.join(".") as any, { message })
    );
    return null;
  };
}
