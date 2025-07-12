import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <div class=" bg-[#202020] text-white  grid grid-cols-3 justify-between items-center   h-20  shadow-[#202020] shadow-sm  bottom-0 left-0 right-0 z-10">
      <div className="flex justify-center items-center gap-3">
        <div>
          <FaLocationDot className="text-2xl" />{" "}
        </div>
        <div>
          <h1 className="text-xl">Find Us</h1>
          <p className="text-sm text-gray-400">Punjab,India</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div>
          <FaPhoneAlt className="text-2xl" />{" "}
        </div>
        <div>
          <h1 className="text-xl">Call Us</h1>
          <p className="text-sm text-gray-400">7431925097</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div>
          <IoMdMail className="text-2xl" />{" "}
        </div>
        <div>
          <h1 className="text-xl">Mail Us</h1>
          <p className="text-sm text-gray-400">durjoysarkar745@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
