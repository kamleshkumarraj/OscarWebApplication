import React, { useEffect, useState } from "react";
import img1 from "../../assets/oscar_image/Trade.jpeg";
import Card from "../Card";
import BannerDetails from "../BannerDetails";
import card1 from "../../assets/oscar_image/card1.png";
import card2 from "../../assets/oscar_image/60.png";
import card3 from "../../assets/oscar_image/card3.png";
import card4 from "../../assets/oscar_image/card4.png";
import card5 from "../../assets/oscar_image/card5.png";
import card6 from "../../assets/oscar_image/card6.png";
import banner_1 from "../../assets/oscar_image/ad1.png";
import banner_2 from "../../assets/oscar_image/ad2.png";
import banner_3 from "../../assets/oscar_image/ad3.png";
import Signandbannerslider from "./Signandbannerslider";
import Signbannercategory from "./Signbannercategory";
import Loader from "../Loader";

const Sign = () => {
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

  const images = [
    { src: card1, alt: "Product 1" },
    { src: card2, alt: "Product 2" },
    { src: card3, alt: "Product 3" },
    { src: card4, alt: "Product 4" },
    { src: card5, alt: "Product 5" },
    { src: card6, alt: "Product 6" },
  ];

  return (
    <div>
      <div className="h-full w-full bg-[#648FA4] p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full text-[#000000] bg-opacity-75 mt-6 md:mt-0 md:ml-10 rounded-xl md:p-10">
          <p className="text-3xl text-[#fbfcfc] sm:text-[56px] text-[35px] 2xl:text-[41px] uppercase font-bold leading-tight">
            Custom Signs
          </p>
          <p className="text-base sm:text-md 2xl:text-lg font-semibold mt-6 text-white">
            20% off all signage | Code: SIGNS20 | Enter code at <br /> checkout.
            Cannot be combined with other promo codes,
            <br /> promotions or discounts.
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
              <button className="bg-[#f0f0f0] hover:bg-black hover:text-white text-black text-xs sm:text-sm 2xl:text-base rounded-full font-medium py-3.5 px-8 sm:px-10">
                Vinyl Banners
              </button>
              <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8 sm:px-12">
                Yard Signs
              </button>
            </div>
            <div>
              <button className="bg-white text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10 mt-4 md:mt-0">
                Retractable Banners
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
      <Signandbannerslider />
      <Signbannercategory />

      {/* <Productitme cardDetails={cardetails} title="Find a style that fits your business" subtitle="Choose tried-and-true options, or go for extra attention with rounded corners, luxe finishes, and more." /> */}

      <div className="">
        <div className="flex flex-col items-center text-center gap-8 mb-8">
          <h1 className="text-4xl font-semibold">Bestsellers for a reason</h1>
          <p className="text-xl">
            See why these signage favorites are flying off our virtual shelves.
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

      <div className="px-16">
        <BannerDetails
          text="Stand out with a custom, budget-friendly design."
          desc="Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours."
          btn="Work with Designer"
          color="bg-[#648FA4]"
          textColor="text-[#3A3A3A]"
          banner_1={banner_1}
          banner_2={banner_2}
          banner_3={banner_3}
        />
      </div>
      <div>
        <div className="px-2 py-10 max-w-5xl mx-auto text-center rounded-lg shadow-lg">
          <h2 className="text-xl md:text-4xl font-semibold mb-8 pb-8 text-gray-800 border-b-2 border-gray-400">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-center gap-4 overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-40 w-48 object-cover rounded-md transform hover:scale-90 transition duration-300 ease-in-out shadow-md"
              />
            ))}
          </div>
          <h3 className="text-lg md:text-4xl font-semibold my-8 py-4 text-gray-800 border-b-2 border-gray-400">
            Or Subscribe To The Newsletter
          </h3>
          <div className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Email Address..."
              className="px-4 py-2 w-full max-w-sm border-b border-gray-400 focus:outline-none focus:border-gray-800 transition duration-300 ease-in-out"
            />
            <button className="px-4 py-2 bg-gray-800 text-white font-medium rounded-md shadow hover:bg-gray-900 transition duration-300 ease-in-out">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
