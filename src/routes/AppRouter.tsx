// AppRouter.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
