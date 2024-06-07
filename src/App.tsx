import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckOut";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default App;
