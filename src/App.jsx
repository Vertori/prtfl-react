import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import SideSocials from "./components/SideSocials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <SideSocials />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
