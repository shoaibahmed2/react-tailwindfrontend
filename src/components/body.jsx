 

import Lady from "../../src/images/lady.webp";
import Dot from "../../src/images/dot.svg";
import line from "../../src/images/Line1.svg";
import Slider from "./slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  return (
    <div>
      <div
        className="flex flex-col sm:flex-row pt-[151px] gap-[0%] bg-no-repeat bg-cover bg-[#000000] w-[100%] h-[982px]"
        style={{ backgroundImage: `url(${Lady})` }}
      >
        <div className="flex flex-col w-full sm:w-[50%] pt-[240px]   pl-[7%] gap-[18%] order-2 sm:order-1">
          <div className="flex gap- pl-[4.4%]">
            <img className="self-start" src={Dot} alt="" />
            <p className="font-montserrat font-extrabold text-2xl leading-7 tracking-tighter text-[#00ADB5] pt-[20px]  ">
              Pro <br /> photographer
            </p>
          </div>
          <div className="flex pt-[12%] items-start ml font-montserrat font-extrabold text-2xl leading-10 text-gray-200">
            <div className="self-start pt-[1%]">
              <img className="max-sm:hidden" src={line} alt="" />
            </div>
            <div className="text-[#EEEEEE] text-[24px] max-sm:hidden ">
              Let’s take your <br /> photographs to next level
            </div>
          </div>
        </div>
        <div className="text-white   flex flex-col w-full sm:w-[50%] max-sm:justify-start gap-[224px] justify-center items-center lg:items-start order-1 sm:order-2">
          <div className="">
            <p className="font-Poppins max-sm:ml-[-15%]  text-[#EEEEEE] font-medium ">
              Hello there, Nice to meet you. I am <br />
              <span className="font-Montserrat text text-[#00ADB5] font-extrabold text-xl max-sm:text-5xl sm:text-6xl   ">
                Jessie
              </span>{" "}
              <br />
              <div className="font-poppins font-normal max-sm:hidden text-base leading-30 tracking-tighter text-white opacity-60 lg:pr-[10%] max-lg:w-[80%]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam
                <br /> consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint.
              </div>
            </p>
          </div>
          <div className="w-[500px] max-lg:w-[400px] max-w-full max-sm:ml-[35px]  ">
            <div className="flex justify-between mr-5 mb-4 font-bold ">
              <h1 className="text-white text-xl mb-">Latest Shots</h1>
              <h1 className="text-lg max-md:hidden">view all</h1>
            </div>
            {/* max-sm:bg-gray-500  lg:w-auto order-first lg:order-last */}
            <div className="sm:max-w-[calc(100vw-3rem)]  ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Body;
