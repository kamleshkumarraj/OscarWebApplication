import React from "react";
import business from "../../assets/oscar_image/business.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[80vh] overflow-hidden md:overflow-auto">
      <div
        className="h-full relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${business})` }}
      >
        <div className=" text-[#000000] absolute left-2 bottom-10 sm:bottom-14 sm:left-10 bg-opacity-75 w-full  sm:w-1/2 rounded-xl p-6">
          <p className="text-3xl text-[#4E69AE] sm:text-[56px] 2xl:text-[51px] leading-[56.7px] uppercase mt-3 font-bold">
            Business Cards
          </p>
          <p className="text-base sm:text-md 2xl:text-lg font-semibold mt-8">
            The right card for your business? We print that. Easily <br />
            customize your design, paper and more.
          </p>
          <div className="flex flex-row gap-x-6 mt-5">
            <button className="bg-[#0a0a0a] hover:bg-black hover:text-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] font-medium py-3.5 px-4 sm:px-8">
              <Link to={"/business-browse"}> Browse designs</Link>
            </button>
            {/* <button className='bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8'>Upload design</button> */}

            <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10">
              Reorder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
