import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#1F2022] text-white font-Josefin Sans     ">
      <div className="mx-[80px] flex justify-between items-center max-sm:flex max-sm:justify-items-stretch font-bold   ">
        <p className="py-[38px] px-5 text-2xl max-sm:pl-[16px] max-sm:ml-[-60px]  lg:mr-[15%] ">
          <button> Jessie. </button>
        </p>

        <div className="  hidden  md:flex   max-lg:text-sm list-none space-x-4 py-[41px] font-Josefin Sans justify-center  sm:gap-[1px]  gap-5 lg:gap-10">
          <li className="text-cyan-500 text-lg sm:text-sm ">
            <button>Portfolio</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Client reviews</button>
          </li>
          <li>
            <button>Contact me</button>
          </li>
        </div>
        <div className=" max-sm:hidden   ">
          <button className="bg-gray-200 rounded-[3px] py-[16px] px-[16px] text-lg  max-sm:text-[17px] whitespace-nowrap  max-sm:pl-[13px]   text-black font-bold max-sm:py-[8px] max-sm:mr-[4px]       ">
            Schedule a call
          </button>
        </div>
        <div className="sm:hidden flex " onClick={() => setToggle(!toggle)}>
          <button className="bg-gray-200 rounded-[3px] py-[16px] px-[16px] text-lg    max-sm:text-[17px] whitespace-nowrap  max-sm:pl-[13px]   text-black font-bold max-sm:py-[8px] max-sm:mr-[4px]       ">
            Schedule a call
          </button>
          <CiMenuBurger
            className="max-sm:ml-[20px] max-sm:mt-[3px]   "
            size={35}
          />
        </div>
      </div>
      <div>
        {toggle && (
          <div className="sm:hidden   bg-[#1F2022] text-white font-Josefin Sans flex flex-col space-y-2 p-4    ">
            <li className="text-cyan-500  ">
              <button>Portfolio</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Client reviews</button>
            </li>
            <li>
              <button>Contact me</button>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
