import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/User/HomePage";
import DetailCoursePage from "../pages/User/detailCoursePage";
import HelpPage from "../pages/User/HelpPage";
import AdminPage from "../pages/Admin/AdminPage";
import SignInPage from "../pages/User/SignInPage";
import SignUpPage from "../pages/User/SignUpPage";
import UserManagePage from "../pages/Admin/UserManagePage";
import ReportPage from "../pages/User/ReportPage";
import FeedbackPage from "../pages/User/FeedbackPage";
import SettingsPage from "../pages/User/SettingPage";

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
        <Route path="/detail" element={<DetailCoursePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/user-management" element={<UserManagePage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route
          path="/admin-page"
          element={withRoleProtection({
            component: AdminPage,
            allowedRoles: ["admin"],
          })}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
