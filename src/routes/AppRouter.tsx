import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/User/HomePage";
import DetailCoursePage from "../pages/User/detailCoursePage";
import HelpPage from "../pages/User/HelpPage";
import AdminPage from "../pages/Admin/AdminPage";
import SignInPage from "../pages/User/SignInPage";
import SignUpPage from "../pages/User/SignUpPage";
import { AuthContext, AuthProvider } from "../app/context/AuthContext";
import { useContext } from "react";
import StudentPage from "../pages/User/StudentPage";
import CategoriesManagePage from "../pages/Admin/CategoriesManagePage";
import UserManagePage from "../pages/Admin/UserManagePage";
import InstructorManagePage from "../pages/Admin/InstructorManagePage";

interface ProtectedRouteProps {
  element: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ element, allowedRoles }: ProtectedRouteProps) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { user } = authContext;

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* User */}
          <Route
            path="/"
            element={
              <ProtectedRoute element={<HomePage />} allowedRoles={["user"]} />
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="/detail" element={<DetailCoursePage />} />
          <Route path="/help-page" element={<HelpPage />} />

          {/* Admin  */}
          <Route
            path="/admin-page"
            element={
              <ProtectedRoute
                element={<AdminPage />}
                allowedRoles={["admin"]}
              />
            }
          />
          <Route
            path="/categories-management"
            element={<CategoriesManagePage />}
          />
          <Route path="/user-management" element={<UserManagePage />} />
          <Route
            path="/instructor-management"
            element={<InstructorManagePage />}
          />
          <Route path="/student-management" element={<StudentPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
