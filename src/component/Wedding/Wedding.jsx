import React, { useEffect, useState } from "react";
import img1 from "../../assets/oscar_image/oscar6.png";

import h_img from "../../assets/h_1.png";
import h_img1 from "../../assets/h_2.png";
import Card from "../Card";
import BannerDetails from "../BannerDetails";
import banner_1 from "../../assets/oscar_image/Brandidentity.jpeg";
import banner_2 from "../../assets/oscar_image/slide-img-2.jpeg";
import banner_3 from "../../assets/oscar_image/slide-img-3.jpeg";
import Weddingslider from "./Weddingslider";
import Weddingcategory from "./Weddingcategory";
import Loader from "../Loader";

const Wedding = () => {
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
      <div className="h-[80vh] overflow-hidden md:overflow-auto">
        <div
          className="h-full relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute left-2 bottom-20 sm:bottom-32 sm:left-10 w-full  sm:w-1/2 rounded-xl p-6 text-white">
            <p className="text-3xl sm:text-[46px] 2xl:text-[56px] leading-10 md:leading-[75px] mt-3 font-bold uppercase">
              Wedding Planning
            </p>
            <p className="text-base sm:text-xl 2xl:text-2xl font-normal capitalize mt-8">
              Get 50 wedding invites for under $50 with 50% off all quantities,
              sizes and paper stocks.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
                <button className="bg-[#f0f0f0] hover:bg-black hover:text-white text-black text-xs sm:text-sm 2xl:text-base rounded-full font-medium py-3.5 px-8 sm:px-10">
                  ALL INVITES
                </button>
                <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8 sm:px-12">
                  FREE SAMPLE KITS
                </button>
              </div>
              <div>
                <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10 mt-4 md:mt-0">
                  2024 INVITE COLLECTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Weddingslider />
      </div>

      <div>
        {/* <Bestseller
          title={"Big-Day Bestsellers"}
          desc={
            "It’s official – brides and grooms-to-be are extra smitten with these top picks."
          }
        /> */}
        <Weddingcategory />
      </div>

      <div className="p-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
          <div className="w-full h-[60vh] sm:h-[543px] rounded-sm overflow-hidden relative">
            <img className="h-full" src={h_img} alt="img1" />
            <div className="bg-white flex flex-col gap-y-3 sm:gap-y-5 text-[#000000] absolute left-2 bottom-4 sm:bottom-10 sm:left-10 bg-opacity-75 w-3/4 sm:w-[350px] md:w-[489px] rounded-xl p-2 sm:p-8">
              <p className="text-lg sm:text-2xl 2xl:text-[39px] font-medium md:font-normal">
                Your day, your way
              </p>
              <p className="text-base sm:text-lg 2xl:text-xl sm:leading-8 font-normal">
                Invites, save the dates and everything else wedding. Personalize
                all the small details for your big day.
              </p>

              <button className="bg-[#FF7D04] hover:bg-orange-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium py-2.5 px-4 sm:px-8">
                Shop All WeddingCards
              </button>
            </div>
          </div>
          <div className="w-full h-[60vh] sm:h-[543px] rounded-sm overflow-hidden relative">
            <img className="h-full" src={h_img1} alt="img1" />
            <div className="bg-white flex flex-col gap-y-3 sm:gap-y-5 text-[#000000] absolute left-2 bottom-4 sm:bottom-10 sm:left-10 bg-opacity-75 w-3/4 sm:w-[350px] md:w-[425px] rounded-xl p-2 sm:p-8">
              <p className="text-lg sm:text-2xl 2xl:text-[39px] font-medium md:font-normal">
                Price drop: Our most-loved business cards
              </p>
              <p className="text-base sm:text-lg 2xl:text-xl sm:leading-8 font-normal">
                We've lowered prices on all our standard and premium cards, for
                a limited time. Now get 100 standard cards for just $15.99.
              </p>

              <button className="bg-[#4EB542] hover:bg-green-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium mt-2 sm:mt-4 py-2.5 px-4 sm:px-8">
                Ceremony & Reception Essential
              </button>
              <button className="bg-[#FF7D04] hover:bg-orange-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium py-2.5 px-4 sm:px-8">
                Thankyou Cards
              </button>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col gap-8 mb-8 items-center">
            <h1 className="text-4xl font-semibold text-center">
              Delight in the details
            </h1>
            <p className="text-xl text-center">
              You’ve fallen for a stationery style, now elevate your suite with
              foil, fun <br /> corners or a custom monogram.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              color={"bg-[#F9F1E7]"}
              rounded={"rounded-2xl"}
              background={"bg-inherit"}
              gap={"16"}
            />
            <div>
              <button className="bg-[#FF7D04] px-4 py-2 text-sm text-white">
                View All
              </button>
            </div>
          </div>
        </div>
        <div>
          <BannerDetails
            banner_1={banner_1}
            banner_2={banner_2}
            banner_3={banner_3}
            text={"Feel it first with a free sample kit"}
            desc={
              "Explore our wedding cards, paper stocks, finishes and more to find your perfect match."
            }
            btn={"Request a free Sample kit"}
            color={"bg-[#524BAD]"}
            textColor={"text-[#FFFFFF]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Wedding;
