import React from "react";

export default function Countrybar() {
  //   const handleinputCng = (event) => {
  //     SetSearch(event.target.value);
  //   };

  return (
    <div>
      <div className="bg-black text-white pt-28  grid grid-cols-4  gap-1   justify-items-center ">
        <div className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className=" border-none outline-0 "
            // oneChange={handleinputCng}
            // value={search}
          />
        </div>

        <button className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          ASC
        </button>
        <button
          className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold"
          onClick={() => {}}
        >
          DESC
        </button>

        <div className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          <label for="region">Choose a region: </label>
          <select
            name="region"
            id="region"
            className="border-none rounded-2xl outline-0 bg-black "
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
      </div>
    </div>
  );
}
