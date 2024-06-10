import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import PaidMembershipPage from "../pages/PaidMembership";
import MembershipCheckOut from "../pages/MembershipCheckOut";

const AppRouter = () => {
  return (
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="sign-in" element={<SigninPage />} />
      <Route path="sign-up" element={<SignupPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/paid-membership" element={<PaidMembershipPage />} />
      <Route path="/membership-Checkout" element={<MembershipCheckOut />}/>
    </Routes>
)};


export default AppRouter;
