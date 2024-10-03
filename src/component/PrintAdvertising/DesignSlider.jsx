
// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MC from "../../assets/oscar_image/McDonagh.jpeg";
import Almanova from "../../assets/oscar_image/Almanova.png";

const DesignSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-8 px-4 sm:px-8 md:px-16">
      <div className="bg-[#F4F1EA] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 px-24 py-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stand out with a <br /> custom, budget- <br />
            friendly design.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Give your business card a professional finish.
            <br /> Fill out a quick brief to receive concepts from <br /> our
            in-house designer within 24 hours.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
            Explore More
          </button>
        </div>
        <div>
          <img width={298} src={MC} alt="" />
        </div>
        <div className="w-3/12">
          <Slider {...settings}>
            <div className="p-4">
              <img
                src="image-url-1"
                alt="Design 1"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="p-4">
              <img
                src="image-url-2"
                alt="Design 2"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="p-4">
              <img
                src="image-url-3"
                alt="Design 3"
                className="rounded-lg shadow-md"
              />
            </div>
          </Slider>
        </div>
        <div>
          <img width={298} src={Almanova} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DesignSlider;
