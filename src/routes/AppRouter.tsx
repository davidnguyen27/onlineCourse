import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailCoursePage from '../pages/detailCoursePage';
import HelpPage from '../pages/HelpPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailCoursePage />} />
        <Route path="/HelpPage" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
