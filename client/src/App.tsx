import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import NotFoundPage from "./pages/notFoundPage";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/product";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
