import CountryData from "../component/Api/countries.json";
import { FaArrowRight } from "react-icons/fa";
export default function Country() {
  return (
    <div>
      <div className="bg-black text-white pt-28  grid grid-cols-4  gap-1   justify-items-center ">
        <div className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          {" "}
          <input
            type="text"
            placeholder="name "
            className=" border-none outline-0 "
          />
        </div>

        <button className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          ASC
        </button>
        <button className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          DESC
        </button>

        <div className="border-2 border-white p-1 pl-5 pr-5 rounded-lg hover:font-bold">
          <label for="cars">Choose a car: </label>
          <select
            name="cars"
            id="cars"
            className="border-none rounded-2xl outline-0 bg-black "
          >
            <option value="volvo">Asia</option>
            <option value="saab">Africa</option>
            <option value="opel">Europe</option>
          </select>
        </div>
      </div>
      <div className="bg-black text-white h-screen justify-center items-center  m-auto ">
        {/* country card  */}

        <div class="grid grid-cols-4 gap-1    justify-items-center  ">
          {CountryData.map((data) => {
            return (
              <div className="card  ">
                <div
                  className="card-body"
                  class="border-2 border-gray-500 rounded-lg p-5 mt-10 max-w-fit pr-16 bg-linear-to-bl from-[#202020] to-[#000000] shadow-gray-400 shadow-sm"
                >
                  <img src={data.flag} className="w-[5rem]" />
                  <p class="text-[1.7rem]"> {data.name}</p>
                  <p class="text-[.8rem]">
                    <span>capital :</span>
                    {data.capital}
                  </p>
                  <p class="text-[.8rem]">
                    <span>population :</span> {data.population}
                  </p>

                  <button className="text-.5xl border-2 rounded-2xl justify-center items-center pl-1 pr-1 mt-5 flex gap-2">
                    Read more
                    <div>
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
