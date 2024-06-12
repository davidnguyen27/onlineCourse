import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailCoursePage from '../pages/detailCoursePage';
import HelpPage from '../pages/HelpPage';
import StudentProfilePage from '../pages/StudentProfilePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetailCoursePage" element={<DetailCoursePage />} />
        <Route path="/HelpPage" element={<HelpPage />} />
        <Route path="/StudentProfilePage" element={<StudentProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
