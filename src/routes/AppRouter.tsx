import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/User/HomePage";
import DetailCoursePage from "../pages/User/detailCoursePage";
import HelpPage from "../pages/User/HelpPage";
import AdminPage from "../pages/Admin/AdminPage";
import SignInPage from "../pages/User/SignInPage";
import SignUpPage from "../pages/User/SignUpPage";
import UserManagePage from "../pages/Admin/UserManagePage";
import StudentPage from "../pages/Student/StudentHomePage";
// import InstructorPage from "../pages/User/InstructorPage"; // Add your instructor page

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
        <Route path="/course-page" element={<DetailCoursePage />} />
        <Route path="/help-page" element={<HelpPage />} />
        <Route path="/user-management" element={<UserManagePage />} />
        <Route
          path="/admin-page"
          element={withRoleProtection({
            component: AdminPage,
            allowedRoles: ["admin"],
          })}
        />
        <Route
          path="/student-page"
          element={withRoleProtection({
            component: StudentPage,
            allowedRoles: ["student"],
          })}
        />
        {/* <Route
          path="/instructor-page"
          element={withRoleProtection({
            component: InstructorPage,
            allowedRoles: ["instructor"],
          })}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
