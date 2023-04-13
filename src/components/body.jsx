import Lady from "../../src/images/lady.webp";
import Dot from "../../src/images/dot.svg";
import line from "../../src/images/Line1.svg";
import Slider from "./slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden  bg-black    ">
      <div
        className="flex flex-col sm:flex-row sm:pt-[160px]   bg-no-repeat bg-cover bg-center bg-[#1F2022] w-[100%]  "
        style={{
          backgroundImage: `url(${Lady})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-full sm:w-[50%]     pl-[68px] gap-[38%] order-2 sm:order-1   ">
          <div className="flex gap- pl-[%]">
            <img className="self-start max-sm:hidden  " src={Dot} alt="" />
            <p className="font-montserrat font-extrabold text-2xl leading-7 tracking-tighter text-[#00ADB5] pt-[20px] max-sm:hidden pl-[3px]   ">
              Pro <br /> photographer
            </p>
          </div>
          <div className="flex pt-[12%] items-start   font-montserrat gap-3   font-extrabold text-2xl leading-10 text-gray-200">
            <div className="self-start pt-[3%]  ">
              <img className="max-sm:hidden    " src={line} alt="" />
            </div>
            <div className="text-[#EEEEEE] text-[24px] max-sm:hidden  ">
              Let’s take your <br /> photographs to next level
            </div>
          </div>
        </div>
        <div
          className="text-white gap-[224px]   flex flex-col w-full sm:w-[50%] max-sm:justify-start     
        justify-center items-center lg:items-start order-1 sm:order-2   "
        >
          <div className="   ">
            <p className="font-Poppins max-sm:ml-[-13%]   text-[#EEEEEE] font-medium    ">
              <span className="max-sm:pl-[20%] max-sm:flex   max-sm:text-sm max-md:pt-[5%]   ">
                Hello there, Nice to meet you. I am <br />
              </span>

              <span className="font-Montserrat text text-[#00ADB5] max-sm:justify-   max-sm:pl-[20%] font-extrabold max-sm:text-3xl sm:text-6xl lg:text-[100px]      ">
                Jessie
                <br />
                <div className="font-poppins font-normal  text-base max-sm:pl-[20%] max-sm:text-md  sm:leading-[30px]  leading-30 tracking-tighter text-white opacity-60 lg:pr-[10%] max-lg:w-[80%] max-sm:w-[90%] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam
                  <br /> consequat sunt nostrud amet. Amet minim mollit non
                  deserunt ullamco est sit aliqua dolor do amet sint.
                </div>
              </span>
            </p>
          </div>
          <div className="w-[100%] max-lg:w-[400px] max-md:w-[260px]     max-sm:w-[83%]   ">
            <div className="flex !justify-between   w-full    font-bold max-sm:justify-start     ">
              <h1 className="text-white text-xl max-sm:pt-[60%]  max-sm:text-xs ">
                Latest Shots
              </h1>
              <h1 className="text-lg max-sm:text-xs  text-[#00ADB5] max-sm:pt-[60%] sm:pr-[30px] max-sm:pl-10   ">
                view all
              </h1>
            </div>
            <div className="   sm:w-[110%]    pb-[10px] w-[100%]    ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
