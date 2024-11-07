import React, { useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router";
import Home from "../pages/home/Home";
import Authorization from "../pages/authorization/Authorization";
import ReportPage from "../pages/report/ReportPage";
import { BrowserRouter } from "react-router-dom";
import Machines from "../pages/machines/Machines";
// import { BrowserRouter } from "react-router";

// const [auth, setAuth] = useState(false)



function App() {

  const [auth, setAuth] = useState(true)

  return (
    <Routes>
      {/* {auth ? 
      <Route path="/authorization" element={<Authorization/>}/>
      :
      <Route path="/" element={<Home/>}></Route>
      } */}
      <Route path="/" element={<Navigate to="/authorization" replace/>}></Route>
      <Route path="/authorization" element={<Authorization/>}/> 
      <Route path="/report" element={<ReportPage/>}/>
      <Route path="/machines" element={<Machines/>}/>
    </Routes>
  );
}

export default App;
