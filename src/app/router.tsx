// src/app/router.tsx
import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Authorization from "../pages/authorization/Authorization";
import ReportPage from "../pages/report/ReportPage";
import Machines from "../pages/machines/Machines";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

interface AppRoutesProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      {/* Страница авторизации доступна всегда */}
      <Route path="/authorization" element={<Authorization onLogin={onLogin} />} />

      {/* Если пользователь авторизован, показываем защищенные страницы */}
      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/authorization" />}
      />
      <Route
        path="/report"
        element={isAuthenticated ? <ReportPage /> : <Navigate to="/authorization" />}
      />
      <Route
        path="/machines"
        element={isAuthenticated ? <Machines /> : <Navigate to="/authorization" />}
      />

      {/* Редирект на /home по умолчанию, если уже авторизован */}
      <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/authorization"} />} />

        {/* Обработка несуществующих маршрутов */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
