// import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import order from "../../assets/oscar_image/order.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const CheckoutWishList = () => {
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
    <div className="w-full ml-24 md:w-[55%] mb-8">
      <div className="p-6 ml-5 bg-white shadow-lg rounded-lg">
        <div className="flex gap-3 items-center mb-6">
          <div className="w-2 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl"></div>
          <h1 className="text-2xl font-bold text-gray-800">Hello Jhanvi</h1>
        </div>
        <div className="text-gray-500 mb-6 text-sm">
          Welcome to your Account
        </div>
        <ul className="space-y-3 gap-1">
          <Link to={"/myAccount"}>
            <li className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 rounded-lg transition duration-300">
              <img
                src={order}
                alt="myorder"
                width={20}
                className="opacity-80"
              />
              <span className="font-semibold text-gray-700">My orders</span>
            </li>
          </Link>
          <Link to={"/myAccount/wishlist"}>
            <li className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 rounded-lg transition duration-300">
              <CiHeart size={22} className="text-gray-700 opacity-80" />
              <span className="font-semibold text-gray-700">Wishlist</span>
            </li>
          </Link>
          <Link to={"/myAccount/myinfo"}>
            <li className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 rounded-lg transition duration-300">
              <AiOutlineUser size={22} className="text-gray-700 opacity-80" />
              <span className="font-semibold text-gray-700">My info</span>
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 rounded-lg transition duration-300">
              <FiLogOut size={22} className="text-gray-700 opacity-80" />
              <span className="font-semibold text-gray-700">Sign out</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutWishList;
