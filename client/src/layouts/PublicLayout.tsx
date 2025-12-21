import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../state";

export default function PublicLayout() {
  const signed = useAppSelector((state) => Boolean(state.auth.user));
  if (signed) return <Navigate to={"/"} />;
  return (
    <div className="flex h-full justify-center items-center overflow-y-scroll">
      <Outlet />
    </div>
  );
}
