import React from "react";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineKey,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const AccountDetail = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}

      <div className="w-full h-[150.3px] px-[212.93px] py-[52.58px] gap-[13.14px] border-[1.31px] bg-gray-200">
        <h1 className="text-xl font-semibold">My Account</h1>
        <p className="text-sm text-gray-500">Ecommerce &gt; My Account</p>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-6">
          {/* Sidebar */}
          <div className="bg-white p-4 shadow-md rounded-lg pl-10">
            <nav className="space-y-4">
              <a
                href="/orders"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineShopping />
                <span>Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineHeart />
                <span>Wishlist</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineHome />
                <span>
                  <Link to={"/address"}>Address</Link>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineKey />
                <span>Password</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineUser />
                <span>Account Detail</span>
              </a>
              <a
                href="/signup"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <AiOutlineLogout />
                <span>Logout</span>
              </a>
            </nav>
          </div>

          {/* Account Details */}

          <div className="md:col-span-3 bg-white p-6 shadow-md rounded-lg pl-10 gap-5">
            <h2 className="font-inter text-[21.03px] font-semibold leading-[25.45px] text-left mb-6">
              Account Details
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pl-1"
                  htmlFor="full-name"
                >
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="
    w-[420.61px] 
    h-[50.29px] 
    px-[19.72px] 
    py-[10.14px] 
    border-[1.31px] 
    border-l-0 
    border-r-0 
    border-b-0 
    rounded-[7.89px] 
    shadow 
    border-gray-300 
    text-gray-700 
    leading-tight 
    focus:outline-none 
    focus:shadow-outline
  "
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 pl-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-[420.61px] 
    h-[50.29px] 
    px-[19.72px] 
    py-[10.14px] 
    border-[1.31px] 
    border-l-0 
    border-r-0 
    border-b-0 
    rounded-[7.89px] 
    shadow 
    border-gray-300 
    text-gray-700 
    leading-tight 
    focus:outline-none 
    focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
