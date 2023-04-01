import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "../../src/images/image1.png";
import Img2 from "../../src/images/image2.png";
import Img3 from "../../src/images/image3.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" w-[100%]">
        <Slider {...settings}>
          <div className="md:pr-[15px] ">
            <h3>
              <img className=" " src={Img1} alt="" />
            </h3>
          </div>
          <div className="md:mr-5 md:pr-[15px]">
            <h3>
              {" "}
              <img src={Img2} className="" alt="" />
            </h3>
          </div>

          <div className="md:mr-5 md:pr-[15px]">
            <h3>
              <img src={Img2} className=" " alt="" />  
            </h3>
          </div>
          <div className="md:pr-[15px] ">
            <h3>
              <img className=" " src={Img1} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
