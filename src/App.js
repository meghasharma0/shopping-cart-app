import "./App.css";
import React from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
