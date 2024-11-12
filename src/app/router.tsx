import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Authorization from 'pages/authorization/Authorization';
import Home from 'pages/home/Home';
import Machines from 'pages/machines/Machines';
import NotFound from 'pages/notFound/NotFound';
import ReportPage from 'pages/report/ReportPage';

interface AppRoutesProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Authorization onLogin={onLogin} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
