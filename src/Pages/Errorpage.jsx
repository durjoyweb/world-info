import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class=" flex justify-center h-[100vh] w-[100%] items-center bg-black gap-5">
      <div class="gap-4 m-auto">
        <div class="flex justify-center items-center">
          <TbError404 class="text-9xl text-white " />
        </div>
        <div class="text-3xl text-white gap-4 "> Oops! An error occurred!</div>
        <div class="text-center flex justify-center items-center">
          <Link to="/">
            <div class="  border-1 rounded-2xl bg-blue-800 text-white w-[15rem] hover:bg-blue-600 hover:text-white">
              Back Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
