import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import ReportPage from "../pages/ReportPage";
import FeedbackPage from "../pages/FeedbackPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
