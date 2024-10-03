import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Modal from "./Modal";
import Cards from "./Cards";
import Filter from "./Filter";
import business from "../../assets/oscar_image/business.png";

const BusinessCardTemplates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="h-[70vh] overflow-hidden md:overflow-auto">
        <div
          className="h-full relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${business})` }}
        >
          <div className="absolute left-2 bottom-10 sm:bottom-14 sm:left-10 bg-opacity-75 w-full sm:w-[80%]  md:w-[60%] lg:w-[40%] rounded-xl p-6">
            <div className="bg-[#FFFFFF] bg-opacity-65 px-6 py-6 rounded-md">
              <p className="font-semibold">New Arrival</p>
              <p className="text-xl text-[#816DFA] sm:text-[36px] lg:w-[80%] w-full leading-5 sm:leading-9 2xl:text-[51px] mt-3 font-bold lg:leading-[52px]">
                Discover Our New Collection
              </p>
              <p className="text-base sm:text-sm 2xl:text-lg font-semibold mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="flex flex-row gap-x-6 mt-5">
                <button className="bg-[#816DFA] hover:bg-black hover:text-white text-xs sm:text-sm 2xl:text-base text-[#ffff] font-medium py-3.5 px-4 sm:px-8">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 lg:p-16 md:p-8">
        <div className="text-sm text-gray-500 mb-4">
          Home / Business Cards / Standard Business Cards / Templates
        </div>
        <h1 className="text-[37.74px] font-semibold mb-2">
          Business Card Templates
        </h1>
        <div className="mb-4 flex md:flex-row flex-col md:items-center md:justify-between">
          <div className="flex items-baseline gap-1">
            <div className="flex items-center">
              <div className="text-[#5C5F6A] text-2xl">★</div>
              <div className="text-[#5C5F6A] text-2xl">★</div>
              <div className="text-[#5C5F6A] text-2xl">★</div>
              <div className="text-[#5C5F6A] text-2xl">★</div>
              <div className="text-yellow-200 text-2xl">★</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs">4.6</span>
              <div className="text-xs">(654675)</div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xs">
              Check Out A Variety Of Templates For Standard Business Cards.
            </p>
            <p className="font-semibold text-xs lg:text-end">
              Find A Look That Fits Your Business – And Your Style.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300 border-2 my-8"></div>

        <div className="flex md:flex-row flex-col justify-between md:items-center py-4 md:gap-0 gap-2">
          <div className="flex-grow max-w-3xl">
            <div className="flex border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search For Designs"
                className="flex-grow px-6 italic py-2 text-gray-600 placeholder-gray-400 focus:outline-none"
              />
              <button className="px-4 py-2">
                <IoIosSearch />
              </button>
            </div>
          </div>
          <button className="flex items-center gap-1 border rounded-full px-4 py-2 md:ml-4">
            <span>
              <CiHeart />
            </span>
            <span>Favorites</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-8 mt-8">
          <Filter />

          <Cards toggleModal={toggleModal} />
        </div>
        <Modal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      </div>
    </div>
  );
};

export default BusinessCardTemplates;
