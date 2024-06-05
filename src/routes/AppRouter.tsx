import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailCoursePage from '../pages/detailCoursePage';
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/DetailCoursePage" element={<DetailCoursePage />}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
