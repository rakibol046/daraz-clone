import react from "react";
import Slider from "react-slick";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.scss";

const images = [
  "./images/slider1.jpg",
  "./images/slider2.jpg",
  "./images/slider3.jpg",
  ,
  "./images/slider4.jpg",
];

const ArrowRight = (props) => {
  return (
    <button {...props} style={{}} className="arrow-right">
      <BsArrowRight style={{ fontSize: "25px" }} className="arrow-right-icon" />
    </button>
  );
};

const ArrowLeft = (props) => {
  return (
    <button {...props} style={{}} className="arrow-left">
      <BsArrowLeft style={{ fontSize: "25px" }} className="arrow-left-icon" />
    </button>
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div className="custom-dots"></div>,
  };
  return (
    <section className="hero-slider">
      <div className="single-slider">
        <div className="container">
          <div className="row no-gutters">
            <div className="">
              <div>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img className="slider-img" src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
