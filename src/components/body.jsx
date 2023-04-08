import Lady from "../../src/images/lady.webp";
import Dot from "../../src/images/dot.svg";
import line from "../../src/images/Line1.svg";
import Slider from "./slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden      ">
      <div
        className="flex flex-col sm:flex-row pt-[151px] gap-[0%] bg-no-repeat bg-cover bg-center bg-[#1F2022] w-[100%] h-[982px]"
        style={{
          backgroundImage: `url(${Lady})`,
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col w-full sm:w-[50%] pt-[308px]   pl-[68px] gap-[38%] order-2 sm:order-1   ">
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
        <div className="text-white max-sm:mt-[-25%]  flex flex-col w-full sm:w-[50%] max-sm:justify-start gap-[280px] justify-center items-center lg:items-start order-1 sm:order-2 max-sm:pt[10px]  ">
          <div>
            <p className="font-Poppins max-sm:ml-[-15%]   text-[#EEEEEE] font-medium  ">
              <span className="max-sm:pl-[30%] max-sm:flex   max-sm:text-sm   ">
                Hello there, Nice to meet you. I am <br />
              </span>

              <span className="font-Montserrat text text-[#00ADB5]   max-sm:pl-[30%] font-extrabold max-sm:text-3xl sm:text-6xl lg:text-[100px]      ">
                Jessie
                <br />
                <div className="font-poppins font-normal  text-base max-sm:pl-[29%] max-sm:text-sm  sm:leading-[30px]  leading-30 tracking-tighter text-white opacity-60 lg:pr-[10%] max-lg:w-[80%]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  <br />
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam
                  <br /> consequat sunt nostrud amet. Amet minim mollit non
                  deserunt ullamco est sit aliqua dolor do amet sint.
                </div>
              </span>
            </p>
          </div>
          <div className="w-[100%] max-lg:w-[400px] max-md:w-[250px]  max-sm:mr-[80px] max-sm:m-t[40%] ">
            <div className="flex justify-between mr-5 mb-4 font-bold  ">
              <h1 className="text-white text-xl max-sm:pt-[25%] max-sm:pr-10  ">
                Latest Shots
              </h1>
              <h1 className="text-lg   text-[#00ADB5] max-sm:pt-14    ">
                view all
              </h1>
            </div>
            <div className=" max-sm:pt-[15%]  w-[110%] pr-[60px]     ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
