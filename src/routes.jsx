import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./about"
import Services from "./services"
import App from "./App"

const routes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    </>
  );
};

export default routes;
