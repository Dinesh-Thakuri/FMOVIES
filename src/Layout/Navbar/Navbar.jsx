import React from "react";
import Dropdown from "../../modal/Dropdown";
import LoginModal from "../../modal/LoginModal";

const Navbar = () => {
  return (
    <div className="flex py-4 justify-between items-center  ">
      <div className="flex items-center px-1">
        <Dropdown />
        <img src="../logo.png" className="w-40 px-2" />
      </div>
      <div>
        <div className="flex items-center px-2 py-1 gap-x-8 bg-[#424242]/75 text-white rounded-full">
          <button className="flex px-3 py-1 bg-[#424242] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
            Filter
          </button>
          <input
            className="w-[391px] bg-[#424242]/75 "
            placeholder="Search Movies"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <LoginModal />
    </div>
  );
};

export default Navbar;
