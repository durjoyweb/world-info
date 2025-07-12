import React from "react";
import Herosection from "../component/Ui/Herosection";
import About from "../Pages/About";
import Country from "./Country";
export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Country />
    </>
  );
}
