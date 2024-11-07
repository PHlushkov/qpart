import React from "react";

interface AuthorizationProps {
  onLogin: () => void;
}

const Authorization: React.FC<AuthorizationProps> = ({ onLogin }) => {
  return (
    <div>
      <h2>Авторизация</h2>
      <button onClick={onLogin}>Войти</button>
    </div>
  );
};

export default Authorization;