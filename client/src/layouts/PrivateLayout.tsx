import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Box from "../components/shared/Box";
import Container from "../components/shared/container";
import { useAppSelector } from "../state";

export default function PrivateLayout() {
  const signed = useAppSelector((state) => Boolean(state.auth.user));
  if (!signed) return <Navigate to={"/signin"} />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grow max-w-5xl gap-4">
      <div className="sm:static fixed w-full sm:bottom-auto bottom-0 sm:left-auto left-0 sm:row-span-2">
        <Navbar />
      </div>
      <Container className="col-span-1 sm:col-span-2">
        <Outlet />
      </Container>
      <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-1 gap-4">
        <Container>
          <Box className="text-lg font-semibold">Trends</Box>
          <Box>
            <div>Sports</div>
            <div>News</div>
            <div>Politics</div>
            <div>Finince</div>
          </Box>
        </Container>
        <Container>
          <Box className="text-lg font-semibold">Who to follow</Box>
          <Box>
            <div>Alex</div>
            <div>Peter</div>
            <div>Ahmed</div>
          </Box>
        </Container>
      </div>
    </div>
  );
}
