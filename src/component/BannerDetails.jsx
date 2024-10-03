
import banner_1 from '../assets/oscar_image/slide-img-1.jpeg'
import banner_2 from '../assets/oscar_image/slide-img-2.jpeg'
import banner_3 from '../assets/oscar_image/slide-img-3.jpeg'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
function BannerDetails({
  text,
  desc,
  btn,
  color,
  textColor,
  banner_1,
  banner_2,
  banner_3,
}) {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const hanldleWindow = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", hanldleWindow);

    return () => {
      window.removeEventListener("resize", hanldleWindow);
    };
  }, []);

  return (
    <div
      className={`${color} w-full rounded-md shadow-lg  font-[poppins] lg:items-center pr-[1rem] gap-[2rem] grid lg:grid-cols-3 grid-cols-2 grid-row-2 lg:grid-rows-1  pl-[1rem] py-[2rem] 2xl:mt-[50px] px-[20px] mb-5`}
      id="banner-details "
    >
      <div
        id="detils"
        className="w-full col-start-1 col-end-3 lg:col-span-1 lg:col-end-2 md:p-[25px]"
      >
        <h1
          className={`2xl:text-[44.4px] xl:text-[40px] lg:text-[37px] md:text-[35px] sm:text-[32px] text-[35px] font-[poppins] font-[700] leading-[54.17px] text-left ${textColor}`}
        >
          {text}
        </h1>
        <p
          className={`text-[15.79px] font-[poppins] leading-[23.68px] text-left mt-[20px] ${textColor}`}
        >
          {desc}
        </p>
        <div id="btn" className="my-[3rem]">
          <button>
            <p className=" text-[15.79px] leading-[23.68px] px-[15px] py-[10px] text-left text-[#fff] bg-[#FF7D04] ">
              {btn}
            </p>
          </button>
        </div>
      </div>
      <div className="w-full col-start-1 col-end-3 mx-auto lg:col-start-2 lg:col-end-5 md:p-10">
        <Swiper
          slidesPerView={
            WindowWidth <= 550
              ? 1
              : WindowWidth <= 1400
              ? 2
              : WindowWidth > 1400
              ? 3
              : ""
          }
          spaceBetween={20}
          pagination={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper px-[10px] mx-auto"
        >
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_1} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div id="banner-1" className="w-full">
              <img className="w-full" src={banner_3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}


export default BannerDetails;

