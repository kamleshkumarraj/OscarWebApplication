import React, { useEffect, useState } from "react";
import postcard from "../../assets/oscar_image/postcard.jpeg";
import Card from "../Card";
import ExploreStyles from "./ExploreStyle";
import BannerDetails from "../BannerDetails";
import img1 from "../../assets/oscar_image/McDonagh.jpeg";
import img2 from "../../assets/oscar_image/Corner.jpeg";
import img3 from "../../assets/oscar_image/Almanova.png";
import Postcardslider from "./Postcardslider";
import Postcategory from "../postcardsflyer/Postcategory";
import Loader from "../Loader";

const PostCard = () => {
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
    <div className="overflow-hidden md:overflow-auto">
      {/* Header Section */}
      <div className="h-full w-full bg-[#19415C] p-8 md:px-12 lg:px-20 xl:px-24 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full text-[#000000] bg-opacity-75 mt-6 md:mt-0 md:ml-10 rounded-xl p-6 md:p-8 lg:p-10">
          <p className="text-3xl text-[#4E69AE] sm:text-[56px] text-[35px] 2xl:text-[41px] uppercase font-bold leading-tight">
            Postcards & <br /> Print <br /> Advertising
          </p>
          <p className="text-base sm:text-md 2xl:text-lg font-semibold mt-6 text-white">
            Get your business the attention it deserves with a set of <br />{" "}
            custom marketing materials.
          </p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
              <button className="bg-[#f0f0f0] hover:bg-black hover:text-white text-black text-xs sm:text-sm 2xl:text-base rounded-full font-medium py-3.5 px-8 sm:px-10">
                Postcards
              </button>
              <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8 sm:px-12">
                Flyers
              </button>
            </div>
            <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10 mt-4 md:mt-0">
              Presentation Folders
            </button>
          </div>
        </div>

        <div className="w-full p-8 flex justify-center md:justify-end">
          <img
            src={postcard}
            alt="postcard"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mt-8 rounded-xl object-contain"
          />
        </div>
      </div>

      {/* Postcards Slider and Category */}
      <div className="px-8 md:px-12 lg:px-20 xl:px-24 py-8">
        <Postcardslider />
        <Postcategory />
      </div>

      {/* Testimonials Section */}
      <div className="bg-white md:p-10">
        <div className="flex flex-col gap-8 mb-8 text-center items-center justify-center">
          <h1 className="text-2xl md:text-4xl xl:text-[40px] 2xl:text-[48.97px] font-semibold">
            Loved by Small Business Owners
          </h1>
          <p className="text-md md:text-[20px] 2xl:text-[26.45px]">
            Make new connections or rekindle old ones with these top picks from{" "}
            <br /> our marketing collection.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Card
            color={"bg-[#F9F1E7]"}
            rounded={"rounded-2xl"}
            background={"bg-inherit"}
            gap={"16"}
          />
          <button className="bg-[#FF7D04] px-4 py-2 text-sm text-white mt-4">
            View All
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r  pl-10 pr-10  rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <BannerDetails
          banner_1={img1}
          banner_2={img2}
          banner_3={img3}
          text={"Stand out with a custom, budget-friendly design."}
          desc={
            "Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours."
          }
          btn={"Work With Designer"}
          color={"bg-[#FCF8F3]"}
        />
      </div>

      {/* More Products Section */}
      <div className="bg-white md:p-10">
        <div className="flex flex-col gap-8 mb-8 text-center items-center justify-center">
          <h1 className="text-2xl md:text-4xl xl:text-[40px] 2xl:text-[48.97px] font-semibold">
            More Ways to Get Your Logo Seen
          </h1>
          <p className="text-md md:text-[20px] 2xl:text-[26.45px]">
            From in-store displays to street marketing and more, these
            customizable <br /> products are ready to work for you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Card
            color={"bg-[#F9F1E7]"}
            rounded={"rounded-2xl"}
            background={"bg-inherit"}
            gap={"16"}
          />
          <button className="bg-[#FF7D04] px-4 py-2 text-sm text-white mt-4">
            View All
          </button>
        </div>
      </div>

      {/* Explore Styles Section */}
      <div className="px-8 md:px-12 lg:px-20 xl:px-24 py-8">
        <ExploreStyles />
      </div>
    </div>
  );
};

export default PostCard;
