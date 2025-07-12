import React from "react";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";
import { Outlet } from "react-router-dom";
function Applayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Applayout;
