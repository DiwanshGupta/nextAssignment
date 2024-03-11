"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenResult, setIsOpenResult] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownResult = () => {
    setIsOpenResult(!isOpenResult);
    // setIsOpenCuet(false); // Close other dropdown when this one is opened
  };

  return (
    <section className="container items-center m-auto flex flex-row bg-[#b3bfcb] justify-center p-3 font-semibold gap-3">
      <div className="gap-10 items-center flex flex-row text-base w-3/5 justify-end">
        <span className="relative cursor-pointer">CUET</span>

        <span
          className="relative cursor-pointer"
          onClick={toggleDropdownResult}
        >
          Result <span className="items-center m-auto">&#709;</span>
          {isOpenResult && (
            <span className="absolute  flex flex-col bg-gray-800/35 p-1  rounded-xl">
              <span className="border-b py-2 border-white hover:text-gray-800/45">
                Test 1
              </span>
              <span className="border-b py-2 border-white hover:text-gray-800/45">
                Test 2
              </span>
              <span className="py-2 hover:text-gray-800/45">Test 3</span>
            </span>
          )}
        </span>
        <span onClick={toggleDropdown} className="cursor-pointer">
          Prepration <span className="items-center m-auto">&#709;</span>
          {isOpen && (
            <span className="absolute  flex flex-col justify-center bg-gray-800/35 p-1  rounded-xl">
              <span className="border-b py-2 border-white hover:text-gray-800/45">
                Test 1
              </span>
              <span className="border-b py-2 border-white hover:text-gray-800/45">
                Test 2
              </span>
              <span className="py-2 hover:text-gray-800/45">Test 3</span>
            </span>
          )}
        </span>
        <span>Articles</span>
        <span>Universities</span>
        <span>center</span>
      </div>
      <div className="flex flex-row gap-3 justify-center w-2/5">
        <button className="p-2 shadow-lg shadow-slate-600/20 px-7 text-white border border-white rounded-3xl ">
          SIGN IN
        </button>{" "}
        <button className="p-2 shadow-xl shadow-black/20 px-4 text-white bg-[#ff6905] rounded-3xl ">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Navbar;
