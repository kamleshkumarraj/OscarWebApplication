import React, { useEffect, useState } from "react";
import img1 from "../../assets/oscar_image/label.png";
import dummy from "../../assets/oscar_image/dummy.jpeg";
import Collection from "../marketingmaterial/Collection";
import BannerDetails from "../BannerDetails";
import CartCard from "../marketingmaterial/CartCard";
import TestomonialSection from "../homesection/testomonial/TestomonialSection";
import banner_1 from "../../assets/oscar_image/slide-img-1.jpeg";
import banner_2 from "../../assets/oscar_image/slide-img-2.jpeg";
import banner_3 from "../../assets/oscar_image/slide-img-3.jpeg";
import Labelstickerslider from "./Labelstickerslider";
import Labelcategory from "./Labelcategory";
import Loader from "../Loader";

const Labels = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetch or image loading)
    }, 1000);

    return () => clearTimeout(loadContent); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader />
      </div>
    ); // Render Loader component while loading
  }

  return (
    <div>
      <div className="h-full w-full bg-[#43705D] p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full text-[#000000]  mt-6 md:mt-0 md:ml-10 rounded-xl md:p-10">
          <p className="text-base sm:text-md 2xl:text-lg font-semibold mt-6 text-white">
            Elevate Your Brand with Custom Bottle Labels! <br />
            Enjoy 20% Off Your First Order | Code:{" "}
            <span className="text-[#FFD700]">LABEL20</span> <br />
            Apply at checkout and make your products stand out on the shelves.{" "}
            <br />
            *Limited time offer. Terms apply.
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
              <button className="bg-[#f0f0f0] uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-colors duration-300 text-black text-xs sm:text-sm 2xl:text-base rounded-full font-medium py-3.5 px-8 sm:px-10 shadow-md">
                Custom Labels
              </button>
              <button className="bg-white uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-colors duration-300  text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8 sm:px-12 shadow-md">
                Stickers
              </button>
            </div>
            <div>
              <button className="bg-white uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-colors duration-300  text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10 mt-4 md:mt-0 shadow-md">
                Bottle Labels
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:p-8 flex justify-center md:justify-end p-4">
          <img
            src={img1}
            alt="postcard"
            className="w-[80%] h-[60vh] mt-8 rounded-xl"
          />
        </div>
      </div>

      <Labelstickerslider />
      <Labelcategory />

      <div className="px-24 py-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Discover Our Must-Have Collections
        </h2>
        <p className="mb-8 text-lg">
          Explore our curated range of essentials, from everyday wear to
          versatile travel bags.
        </p>
        <Collection />
      </div>

      {/* <div>
        <CartCard />
      </div> */}

      <div className="px-24 ">
        <h2 className="text-4xl font-semibold mb-4 flex justify-center items-center ">
          New Products
        </h2>
        <p className="mb-8 text-lg flex justify-center items-center ">
          Discover our most recent assortment for small businesses like yours.
        </p>
        <Collection />
      </div>

      <div className="px-16">
        <BannerDetails
          banner_1={banner_1}
          banner_2={banner_2}
          banner_3={banner_3}
          text={"Try Before You Buy"}
          desc={
            "Browse our variety of pre-printed and custom-printed packaging samples."
          }
          btn={"Browse Samples"}
          color={"bg-[#43705D]"}
          textColor={"text-[#FFFFFF]"}
        />
      </div>
    </div>
  );
};

export default Labels;
