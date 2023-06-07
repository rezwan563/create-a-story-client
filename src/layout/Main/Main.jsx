import React from "react";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import ScrollToTop from "../../pages/Shared/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Main;
