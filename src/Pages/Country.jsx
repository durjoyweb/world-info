import CountryData from "../component/Api/countries.json";
import { FaArrowRight } from "react-icons/fa";
import CountryBar from "../component/Ui/Countrybar";
export default function Country() {
  return (
    <div>
      <CountryBar />

      <div className="bg-black text-white h-screen justify-center items-center  m-auto ">
        {/* country card  */}

        <div class="grid grid-cols-4 gap-1   justify-items-center  ">
          {CountryData.map((data) => {
            return (
              <div className="card  ">
                <div
                  className="card-body"
                  class="border-2 border-gray-500  rounded-lg p-5 mt-10 max-w-fit pr-16 bg-linear-to-bl from-[#202020] to-[#000000] shadow-gray-400 shadow-sm hover:scale-115 hover:duration-500  fill-cyan-500 drop-shadow-lg drop-shadow-cyan-100/50"
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

                  <button className=" text-sm border-1 overflow-hidden  rounded-lg justify-center items-center pl-1 pr-1 pb-1 mt-10 flex gap-3 cursor-pointer text-gray-300 ">
                    Read more
                    <div>
                      <FaArrowRight className="mt-1" />
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
