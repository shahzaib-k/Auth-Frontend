import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => { 

   
 return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>

    </>
  );
};

export default App;
