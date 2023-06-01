import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import SideSocials from "./components/SideSocials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SideSocials />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
