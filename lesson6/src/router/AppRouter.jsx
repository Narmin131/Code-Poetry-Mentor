import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../layout/Header";
import Banner from "../components/Banner";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
