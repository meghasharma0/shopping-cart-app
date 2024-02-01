import "./App.css";
import React from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ResetPassword from "./Pages/ResetPassword";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
