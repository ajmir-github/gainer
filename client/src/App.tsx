import { Route, Routes } from "react-router";
import useAuth from "./hooks/useAuth";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFoundPage";
import ProductPage from "./routes/ProductPage";
import ProductsPage from "./routes/ProductsPage";
import ProfilePage from "./routes/ProfilePage";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";

function App() {
  useAuth(); // inital auth with localtoken
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<ProductsPage />} />
        <Route path="/hashtag" element={<ProductPage />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
