import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import { GlobalProvider } from "../context/GlobalContext";
import TopToBtn from "../components/TopToScroll";
import Preloader from "../components/Preloader";
import Wishlist from "../pages/Wishlist";
const AppRouter = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        <GlobalProvider>
          <BrowserRouter>
            <TopToBtn />
            <Header />
            <Banner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      {/* )} */}
    </>
  );
};

export default AppRouter;
