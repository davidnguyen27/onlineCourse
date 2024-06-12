import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/user/Cart";
import CheckOut from "../pages/user/CheckOut";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PaidMembershipPage from "../pages/user/PaidMembership";
import MembershipCheckOut from "../pages/user/MembershipCheckOut";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  allowedRoles: string[];
}

const withRoleProtection = ({
  component: Component,
  allowedRoles,
}: ProtectedRouteProps): JSX.Element => {
  const userRole = sessionStorage.getItem("userRole");

  if (!allowedRoles.includes(userRole || "")) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route
          path="/cart"
          element={withRoleProtection({
            component: Cart,
            allowedRoles: ["student"],
          })}
        />
        <Route
          path="/checkout"
          element={withRoleProtection({
            component: CheckOut,
            allowedRoles: ["student"],
          })}
        />
        <Route
          path="/paid-membership"
          element={withRoleProtection({
            component: PaidMembershipPage,
            allowedRoles: ["student"],
          })}
        />
        <Route
          path="/membership-Checkout"
          element={withRoleProtection({
            component: MembershipCheckOut,
            allowedRoles: ["student"],
          })}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
