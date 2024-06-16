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
import StudentHomePage from "../pages/Student/StudentHomePage";
import StudentProfilePage from "../pages/Student/StudentProfilePage";
import InstructorPage from "../pages/Instructor/InstructorPage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="/detail" element={<DetailCoursePage />} />
          <Route path="/help-page" element={<HelpPage />} />
          <Route path="/student-management" element={<StudentPage />} />
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
            path="/instructor-page"
            element={
              <ProtectedRoute
                element={<InstructorPage />}
                allowedRoles={["instructor"]}
              />
            }
          />
          <Route
            path="/student-page"
            element={
              <ProtectedRoute
                element={<StudentHomePage />}
                allowedRoles={["student"]}
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
            path="/"
            element={
              <ProtectedRoute element={<HomePage />} allowedRoles={["user"]} />
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
