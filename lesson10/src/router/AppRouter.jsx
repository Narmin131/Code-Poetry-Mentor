import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import { GlobalProvider } from "../context/GlobalContext";
import TopToBtn from "../components/TopToScroll";
const AppRouter = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <TopToBtn />
          <Header />
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default AppRouter;
