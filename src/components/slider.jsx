import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "../../src/images/image1.png";
import Img2 from "../../src/images/image2.png";
import Img3 from "../../src/images/image3.png";
import leftfacearrow from "../../src/images/leftfacearrow.svg";
import rightfacearrow from "../../src/images/rightfacearrow.svg";
import { useRef } from "react";
const MyFun = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1513,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" ">
      <Slider ref={slider} {...settings}>
        <div className="md:pr-[15px] ">
          <img className="" src={Img1} alt="" />
        </div>
        <div className="md:mr-10 md:pr-[15px] w-[230px] h-[150px] object-cover ">
          <h3>
            {" "}
            <img src={Img2} className="" alt="" />
          </h3>
        </div>
        <div className="md:pr-[15px] ">
          <img className="" src={Img1} alt="" />
        </div>
        <div className="md:mr-10 md:pr-[15px] w-[230px] h-[150px] object-cover ">
          <h3>
            {" "}
            <img src={Img2} className="" alt="" />
          </h3>
        </div>

        <div className="md:mr-5 md:pr-[15px] w-[230px] h-[150px] object-cover  ">
          <h3>
            <img src={Img2} className=" " alt="" />
          </h3>
        </div>
      </Slider>
      <div className="flex gap-[33.5px] pt-[26.12px]">
        <button onClick={() => slider?.current?.slickPrev()}>
          <img src={leftfacearrow} alt="" />
        </button>
        <button onClick={() => slider?.current?.slickNext()}>
          <img src={rightfacearrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MyFun;

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import Img1 from "../../src/images/image1.png";
// import Img2 from "../../src/images/image2.png";
// import Img3 from "../../src/images/image3.png";
// import leftfacearrow from "../../src/images/leftfacearrow.svg";
// import rightfacearrow from "../../src/images/rightfacearrow.svg";

// const MyFun = () => {
//   const slider = useRef(null);

//   const NextArrow = ({ onClick }) => {
//     return (
//       <button className="next-arrow" onClick={onClick}>
//         <img src={rightfacearrow} alt="" />
//       </button>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <button className="prev-arrow" onClick={onClick}>
//         <img src={leftfacearrow} alt="" />
//       </button>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className=" ">
//       <Slider ref={slider} {...settings}>
//         {/* Your slider content */}
//       </Slider>
//     </div>
//   );
// };

// export default MyFun;
