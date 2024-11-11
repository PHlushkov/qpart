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

const useAuthenticatedRoute = (
  isAuthenticated: boolean,
  route: React.ReactNode,
) => {
  return isAuthenticated ? route : <Navigate to="/authorization" />;
};

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route
        path="/authorization"
        element={<Authorization onLogin={onLogin} />}
      />
      <Route
        path="/home"
        element={useAuthenticatedRoute(isAuthenticated, <Home />)}
      />
      <Route
        path="/reports"
        element={useAuthenticatedRoute(isAuthenticated, <ReportPage />)}
      />
      <Route
        path="/machines"
        element={useAuthenticatedRoute(isAuthenticated, <Machines />)}
      />
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? '/home' : '/authorization'} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
