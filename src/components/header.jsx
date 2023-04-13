import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#1F2022] text-white font-Josefin Sans     ">
      <div className="mx-[80px]  max-sm:mx-[25px] flex justify-between items-center max-sm:flex max-sm:justify-items-stretch font-bold py-[25px]     ">
        <p className=" text-2xl max-sm:pl-[16px]  max-sm:justify-evenly  ">
          <button> Jessie. </button>
        </p>

        <div className="  hidden  md:flex   max-lg:text-sm list-none space-x-4   font-Josefin Sans justify-center  sm:gap-[1px]  gap-5 lg:gap-10">
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
        <div className=" max-md:hidden   ">
          <button
            className="bg-gray-200 rounded-[3px]  lg:text-lg  max-sm:text-[17px] md:text-[15px]

               whitespace-nowrap    text-black font-bold    max-xl:py-[6px] max-xl:px-[8px]     px-[16px] py-[16px] max-md:py-[8px]   "
          >
            Schedule a call
          </button>
        </div>
        <div className="md:hidden flex  ">
          <button
            className="bg-gray-200 rounded-[3px] px-[16px] text-lg          whitespace-nowrap max-md:py-[5px]  max-sm:px-[2px]
          max-sm:pl-[6px]   text-black font-bold max-sm:py-[5px] max-sm:mr-[4px]  max-md:mr-10    max-xl:px-[8px]  max-xl:text-sm ]     "
          >
            Schedule a call
          </button>
        </div>

        <CiMenuBurger className="md:hidden  max-sm:pl-[2%]" size={30}  onClick={() => setToggle(!toggle)} />
      </div>
      <div>
        {toggle && (
          <div className="sm:hidden  list-none  bg-[#1F2022] text-white font-Josefin Sans flex flex-col space-y-2 p-4    ">
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

// import React, { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";

// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className="bg-[#1F2022] text-white font-Josefin Sans">
//       <div className="mx-[80px] flex justify-between items-center sm:flex sm:justify-items-stretch font-bold py-[25px]">
//         <p className="text-2xl sm:pl-[16px] sm:justify-evenly">
//           <button> Jessie. </button>
//         </p>

//         <div className="hidden md:flex lg:text-sm list-none space-x-4 font-Josefin Sans justify-center sm:gap-[1px] gap-5 lg:gap-10">
//           <li className="text-cyan-500 text-lg sm:text-sm">
//             <button>Portfolio</button>
//           </li>
//           <li>
//             <button>Blog</button>
//           </li>
//           <li>
//             <button>Client reviews</button>
//           </li>
//           <li>
//             <button>Contact me</button>
//           </li>
//         </div>
//         <div className=" hidden">
//           <button className="bg-gray-200 rounded-[3px] px-[16px] text-lg whitespace-nowrap max-md:py-[5px] max-sm:px-[2px] max-sm:pl-[6px] text-black font-bold max-sm:py-[5px] max-sm:mr-[4px] max-md:mr-10 max-xl:px-[8px] max-xl:text-sm">
//             Schedule a call
//           </button>
//         </div>
//         <div className="md:hidden flex">
//           <CiMenuBurger
//             className="sm:pl-[2%]"
//             size={30}
//             onClick={() => setToggle(!toggle)}
//           />
//         </div>
//       </div>
//       <div>
//         {toggle && (
//           <div className="sm:hidden list-none bg-[#1F2022] text-white font-Josefin Sans flex flex-col space-y-2 p-4">
//             <li className="text-cyan-500">
//               <button>Portfolio</button>
//             </li>
//             <li>
//               <button>Blog</button>
//             </li>
//             <li>
//               <button>Client reviews</button>
//             </li>
//             <li>
//               <button>Contact me</button>
//             </li>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Header;
