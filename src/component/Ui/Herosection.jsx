import React from "react";
import { FaArrowRight } from "react-icons/fa";
function Herosection() {
  return (
    <div>
      <div className="bg-black text-white h-screen flex justify-between items-center p-10">
        <div>
          <h1 class=" text-6xl font-bold">
            Explore the World , <br />
            one country at a time
          </h1>
          <p class=" mt-5">
            discover the history, culture, and beauty of every nation sort
            search <br />
            and filter though countries to find the details you need.{" "}
          </p>
          <button class=" mt-10 bg-blue-600 text-white w-[12rem] h-[3rem] rounded-2xl hover:bg-gray-500 hover:text-white flex justify-between items-center p-2 hover:scale-105 font-bold">
            Discover Countries
            <FaArrowRight className="" />
          </button>
        </div>
        <div>
          <img src="src\assets\images\world.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
