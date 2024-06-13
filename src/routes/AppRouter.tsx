import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import AboutPage from '../pages/AboutPage';
import SearchContent from '../components/SearchContent';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="/search" element={<SearchContent />} />
        <Route path="about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
    
  );
};

export default AppRouter;