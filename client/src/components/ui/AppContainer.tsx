import type { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-200 h-dvh w-full p-2 md:p-4 overflow-hidden">
      {children}
    </div>
  );
}
