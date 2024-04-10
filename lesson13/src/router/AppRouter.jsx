import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import { GlobalProvider } from "../context/GlobalContext";
const AppRouter = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Banner />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About  />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default AppRouter;
