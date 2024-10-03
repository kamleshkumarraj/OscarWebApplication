import banner_1 from "../assets/DesignAndLogoImg/slide-img-1.svg";
import banner_2 from "../assets/DesignAndLogoImg/slide-img-2.svg";
import banner_3 from "../assets/DesignAndLogoImg/slide-img-3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

function BannerDetails() {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#6a4bc6] to-[#524BAD] w-full rounded-xl font-[poppins] lg:items-center pr-[1rem] gap-[2rem] grid lg:grid-cols-4 grid-cols-2 grid-row-2 lg:grid-rows-1 pl-[1rem] py-[2rem] 2xl:mt-[20px] px-[20px] shadow-2xl">
      <div id="details" className="w-full col-start-1 col-end-3 lg:col-span-1 lg:col-end-2 p-[20px]">
        <h1 className="2xl:text-[44.4px] xl:text-[40px] lg:text-[37px] md:text-[35px] sm:text-[32px] text-[35px] font-[poppins] font-[700] leading-[54.17px] text-left text-[#ffffff]">
          Stand out with a custom, budget-friendly design.
        </h1>
        <p className="text-[15.79px] font-[poppins] text-[#fff] leading-[23.68px] text-left mt-[20px]">
          Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours.
        </p>
        <div id="btn" className="my-[3rem]">
          <button className="bg-[#FF7D04] hover:bg-[#e56f03] transition-colors duration-300 rounded-md shadow-md hover:shadow-lg">
            <p className="text-[15.79px] leading-[23.68px] px-[20px] py-[12px] text-left text-[#fff]">
              Work With Designer
            </p>
          </button>
        </div>
      </div>
      <div className="w-full col-start-1 col-end-3 mx-auto lg:col-start-2 lg:col-end-5">
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
            <div className="w-full rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full rounded-full" src={banner_1} alt="Banner 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full rounded-full" src={banner_2} alt="Banner 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full rounded-full" src={banner_3} alt="Banner 3" />
            </div>
          </SwiperSlide>
          {/* Repeat SwiperSlides for additional images */}
        </Swiper>
      </div>
    </div>
  );
}

export default BannerDetails;
