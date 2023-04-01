// import React from "react";
// import { CiMenuBurger } from "react-icons/ci";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

// const Header = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div className="   bg-gray-500 text-white  font-Josefin Sans  ">
//       <div className="mx-[80px] flex justify-between items-center">
//         <header className="py-[38px]  mr-[25.1%]  "> Jessie. </header>

//         <div className="list-none  flex space-x-4 py-[41px]  font-Josefin Sans  justify-center gap-10 ">
//           <li className="text-cyan-500 sm:text-red-700">Portfolio</li>
//           <li>Blog</li>
//           <li>Client reviews</li>
//           <li>Contact me</li>
//         </div>
//         <div className="">
//           {/* {" "} */}
//           <button className="bg-gray-200 rounded-[3px]  py-[16px] px-[16px]  text-black font-bold   ">
//             Schedule a call
//           </button>
//         </div>
//         {/* <div
//           onClick={() => {
//             setToggle(!toggle);
//           }}
//         >
//           <CiMenuBurger size={30} />
//           <RxCross2 size={30} />
//         </div> */}
//       </div>
//       {/* <div className="bg-green-500 fixed top-0 left-0 w-full flex justify-center items-center ">
//         <li className="text-cyan-500 sm:text-red-700">Portfolio</li>
//         <li>Blog</li>
//         <li>Client reviews</li>
//         <li>Contact me</li>
//       </div> */}
//     </div>
//   );
// };
// export default Header;

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#1F2022] text-white font-Josefin Sans">
      <div className="mx-[80px] flex justify-between items-center">
        <header className="py-[38px] px-5  lg:mr-[15%] "> Jessie. </header>

        <div className="  hidden  md:flex    list-none space-x-4 py-[41px] font-Josefin Sans justify-center  gap-5 lg:gap-10">
          <li className="text-cyan-500  ">Portfolio</li>
          <li>Blog</li>
          <li>Client reviews</li>
          <li>Contact me</li>
        </div>
        <div className="  sm:block">
          <button className="bg-gray-200 rounded-[3px] py-[16px] px-[16px] text-black font-bold">
            Schedule a call
          </button>
        </div>
        <div className="sm:hidden" onClick={() => setToggle(!toggle)}>
          <CiMenuBurger size={30} />
        </div>
      </div>
      {/* {toggle && (
        // <div className="sm:hidden bg-gray-500">
        //   <ul className="list-none p-4 space-y-4">
        //     <li className="text-cyan-500 sm:text-red-700">Portfolio</li>
        //     <li>Blog</li>
        //     <li>Client reviews</li>
        //     <li>Contact me</li>
        //   </ul>
        // </div>
      )} */}
    </div>
  );
};
export default Header;
