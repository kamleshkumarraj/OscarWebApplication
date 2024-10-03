import { useEffect, useState } from "react";
import banner1 from "../../assets/Home/HomeAndGift/Banner/banner1.png";
import Loader from "../Loader";

const HomeAndGiftBanner = () => {
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
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-full">
        <img
          src={banner1}
          alt="Home and Gift Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-10 md:left-32 transform -translate-y-1/2 w-[90%] md:w-[30%] space-y-4 lg:space-y-8 px-3 mx-auto p-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase drop-shadow-lg">
          Home & Photo Gifts
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-200 font-medium leading-relaxed drop-shadow-md">
          From mugs and blankets to calendars and pillows, create a memorable
          moment with photo gifts that won't bust your budget.
        </p>

        {/* Buttons Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
            {/* Button 1 */}
            <button className="bg-white uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-all duration-300 text-black text-xs sm:text-sm 2xl:text-base rounded-full font-medium py-3.5 px-8 sm:px-10 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Photo Prints
            </button>
            {/* Button 2 */}
            <button className="bg-white uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-all duration-300 text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-8 sm:px-12 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Home Décor
            </button>
          </div>
          {/* Button 3 */}
          <div>
            <button className="bg-white uppercase hover:bg-gradient-to-r from-[#000000] to-[#333333] hover:text-[#FFD700] transition-all duration-300 text-xs sm:text-sm 2xl:text-base rounded-full text-[#0d0d0d] font-medium py-3.5 px-10 mt-4 md:mt-0 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Photo Albums
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAndGiftBanner;
