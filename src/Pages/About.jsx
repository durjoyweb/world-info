import React from "react";

import CountryData from "../component/Api/CountryData.json";
export default function About() {
  return (
    <div>
      <div class="bg-black text-white h-screen justify-center items-center  m-auto ">
        <h1 class="text-4xl font-bold text-center       pt-20">
          Here are ther interrasting facts <br />
          we're proud of
        </h1>

        <div class="grid grid-cols-4 gap-1 mt-10     justify-items-center">
          {CountryData.map((data) => {
            return (
              <div className="card">
                <div
                  className="card-body "
                  class="border-2 border-gray-500 rounded-lg p-5 mt-10 max-w-fit pr-16 bg-linear-to-bl from-[#202020] to-[#000000] shadow-gray-400 shadow-sm"
                >
                  <p class="text-[1.7rem]"> {data.countryname}</p>
                  <p class="text-[.8rem]">
                    <span>capital :</span>
                    {data.capital}
                  </p>
                  <p class="text-[.8rem]">
                    <span>population :</span> {data.population}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
