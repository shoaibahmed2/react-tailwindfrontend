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
        className="flex flex-col sm:flex-row sm:pt-[145px]   bg-no-repeat bg-cover bg-center bg-[#1F2022] w-[100%]  "
        style={{
          backgroundImage: `url(${Lady})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-full sm:w-[50%] pt-[275px] max-sm:pt-[1px]   pl-[68px] gap-[38%] order-2 sm:order-1 max-sm:hidden   ">
          <div className="flex ">
            <img className="self-start   " src={Dot} alt="" />
            <p className="font-montserrat font-extrabold text-2xl leading-7 tracking-tighter text-[#00ADB5] pt-[20px]  pl-[3px]   ">
              Pro <br /> photographer
            </p>
          </div>
          <div className="flex pt-[12.3%] items-start   font-montserrat gap-3   font-extrabold text-2xl leading-10 text-gray-200">
            <div className="self-start pt-[2%]  ">
              <img src={line} alt="" />
            </div>
            <div className="text-[#EEEEEE] text-[24px]    pb-[20px] ">
              Let’s take your <br /> photographs to next level
            </div>
          </div>
        </div>
        <div
          className="text-white gap-[180px]   max-sm:gap-[10px] flex flex-col w-full sm:w-[50%] max-sm:justify-start     
        justify-center items-center lg:items-start order-1 sm:order-2   "
        >
          <div className="">
            <p className="font-Poppins max-sm:ml-[-13%]   text-[#EEEEEE] font-medium    ">
              <span className="max-sm:pl-[20%] max-sm:flex   max-sm:text-sm max-md:pt-[5%]   ">
                Hello there, Nice to meet you. I am <br />
              </span>

              <span className="font-Montserrat text text-[#00ADB5] max-sm:justify-   leading-[121.9px] max-sm:pl-[20%] font-extrabold max-sm:text-3xl sm:text-6xl lg:text-[100px]      ">
                Jessie
                <br />
                <div className="font-poppins w-[560px]  font-normal pt-[18px]  text-base max-sm:pl-[20%] max-sm:text-md  sm:leading-[30px]  leading-[30px] tracking-wider text-white opacity-50   max-lg:w-[80%] max-sm:w-[90%] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim{" "}
                  <br />
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </div>
              </span>
            </p>
          </div>
          <div className="sm:hidden w-full ">
            <div className="flex flex-col w-full items-end a sm:w-[50%] pt-[275px] max-sm:pt-[1px]     order-2 sm:order-1   ">
              <div className="flex gap-  ">
                <img
                  className="self-start max-sm:hidden    "
                  src={Dot}
                  alt=""
                />
                <p className="font-montserrat font-extrabold text-2xl leading-7 tracking-tighter text-[#00ADB5] pt-[20px] pl-[3px] max-sm:text-sm max-sm:pr-[90px] ">
                  Pro <br /> photographer
                </p>
              </div>
              <div className="flex pt-[12%] items-start   font-montserrat gap-3   font-extrabold text-2xl leading-10 text-gray-200">
                <div className="self-start pt-[3%]  ">
                  <img className=" max-sm:hidden     " src={line} alt="" />
                </div>
                <div className="text-[#EEEEEE] text-[24px]  idden  pb-[10px] max-sm:text-sm max-sm:pr-[8px] ">
                  Let’s take your <br /> photographs to next level
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] max-lg:w-[400px] max-md:w-[260px]   max-sm:w-[83%]   ">
            <div className="flex !justify-between   w-full    font-bold max-sm:justify-start font-josefin-sans  leading-[24px]  ">
              <h1 className="text-white text-2xl   max-sm:text-xs  ">
                Latest Shots
              </h1>
              <h1 className=" font-semibold font-montserrat  max-sm:text-xs leading-[17px]  text-[#00ADB5] sm:pr-[30px] max-sm:pl-10 pb-[23px]  text-sm ">
                view all
              </h1>
            </div>
            <div className="   sm:w-[105%]     pb-[10px] w-[100%]    ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
