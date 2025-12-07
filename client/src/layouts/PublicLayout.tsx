import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <div className="bg-slate-200 min-h-dvh flex justify-center p-4 items-center">
      <Outlet />
    </div>
  );
}
