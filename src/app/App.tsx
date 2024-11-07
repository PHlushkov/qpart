// src/app/App.tsx
import React, { useState } from "react";
import AppRoutes from "./router";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = () => {
    setIsAuthenticated(true);
  };


  return (
    <div>
      <AppRoutes isAuthenticated={isAuthenticated} onLogin={onLogin} />
    </div>
  );
}

export default App;
