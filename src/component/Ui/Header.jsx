import React from "react";

export default function header() {
  return (
    <div class="bg-[#202020] text-white  grid grid-cols-2 justify-between align-center  m-auto p-[2rem] h-20  shadow-[#202020] shadow-sm fixed top-0 left-0 right-0 z-10">
      <h1 class=" text-3xl font-bold ">World Info</h1>

      <ul className="grid grid-cols-4 font-bold   ">
        <li>
          <a href="/" className="text-gray-300 hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/country" className="text-gray-300 hover:text-gray-400">
            Country
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-300 hover:text-gray-400">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" className="text-gray-300 hover:text-gray-400">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
