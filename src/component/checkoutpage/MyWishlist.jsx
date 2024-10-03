import React, { useEffect, useState } from "react";

import wishlistImg from "../../assets/oscar_image/wishlistImg.png";
import Loader from "../Loader";

const MyWishlist = () => {
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
    <div className="p-4 sm:p-8 top-20">
      <div className="text-center sm:text-left mb-8">
        <p className="text-3xl sm:text-5xl font-semibold">
          My Wishlist
          <span className="font-normal text-gray-500 ml-2">(1 item)</span>
        </p>
      </div>

      <div className="flex flex-col  sm:items-start gap-6">
        <img
          src={wishlistImg}
          alt="wishlistimage"
          className="w-full sm:w-[300px] rounded-[10px] object-cover"
        />

        <div className="flex flex-col w-full sm:w-[300px] border border-gray-300 rounded-[10px] p-4">
          <p className="font-bold text-lg">Product Name</p>
          <div className="w-full h-[1px] bg-gray-300 mt-2 mb-2"></div>
          <span className="text-gray-500 text-sm mb-2">Flyer</span>
          <span className="font-bold text-lg">$100</span>
          <div className="w-full h-[1px] bg-gray-300 mt-4 mb-4"></div>
          <a href="#move-to-cart" className="text-blue-500 text-center mt-2">
            Move to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
