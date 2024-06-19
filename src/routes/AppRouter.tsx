import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthContext, AuthProvider } from "../app/context/AuthContext";
import { useContext } from "react";

import StudentProfilePage from "../pages/Student/StudentProfilePage";
import StudentCourseDetailPage from "../pages/Student/StudentCourseDetailPage";

import SignInPage from "../pages/user/SignInPage";
import DetailCoursePage from "../pages/detailCoursePage";
import SignUpPage from "../pages/user/SignUpPage";
import HelpPage from "../pages/HelpPage";
import ReportPage from "../pages/user/ReportPage";
import Cart from "../pages/user/Cart";
import CheckOut from "../pages/user/CheckOut";
import PaidMembershipPage from "../pages/user/PaidMembership";
import AdminPage from "../pages/admin/AdminPage";
import CategoriesManagePage from "../pages/admin/CategoriesManagePage";
import UserManagePage from "../pages/admin/UserManagePage";
import InstructorManagePage from "../pages/admin/InstructorManagePage";
import StudentPage from "../pages/user/StudentPage";
import InstructorPage from "../pages/instructor/InstructorPage";
import HomePage from "../pages/user/HomePage";

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
          {/* Student */}
          <Route path="/" element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="/detail" element={<DetailCoursePage />} />
          <Route path="/help-page" element={<HelpPage />} />
          <Route path="/report-page" element={<ReportPage />} />
          <Route
            path="/view-detail"
            element={
              <ProtectedRoute
                element={<StudentCourseDetailPage />}
                allowedRoles={["student"]}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute element={<Cart />} allowedRoles={["student"]} />
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute
                element={<CheckOut />}
                allowedRoles={["student"]}
              />
            }
          />
          <Route
            path="/paid-membership"
            element={
              <ProtectedRoute
                element={<PaidMembershipPage />}
                allowedRoles={["student"]}
              />
            }
          />

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
            path="/student-profile-page"
            element={
              <ProtectedRoute
                element={<StudentProfilePage />}
                allowedRoles={["student"]}
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
          <Route
            path="/instructor-page"
            element={
              <ProtectedRoute
                element={<InstructorPage />}
                allowedRoles={["instructor"]}
              />
            }
          />
          <Route path="/student-management" element={<StudentPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
