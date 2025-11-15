import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-dvh">
        <Navbar />
        <Body />
      </div>
      <Footer />
    </>
  );
}
