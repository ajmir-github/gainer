import { Outlet } from "react-router";

export default function Body() {
  return (
    <div className="flex flex-row justify-center p-4 md:p-6 gap-4 grow max-w-5xl bg-amber-200">
      <Outlet />
    </div>
  );
}
