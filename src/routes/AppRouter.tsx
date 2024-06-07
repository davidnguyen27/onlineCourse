import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
)};

export default AppRouter;
