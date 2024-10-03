import React from "react";

import error404 from "../../assets/oscar_image/error404.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src={error404}
        alt="Error 404"
        className="w-[90%] max-w-lg h-auto mb-6 transition-transform transform hover:scale-105"
      />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black drop-shadow-md">
        Oops! Page not found
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-black mb-8 px-4 max-w-lg">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <button className="flex items-center justify-center bg-purple-700 text-white px-8 py-3 rounded-lg hover:text-black shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105">
        <Link to={"/"} className="flex justify-center items-center space-x-3">
          <div>Back to HomePage </div>
          <div>
            <FaArrowRightLong className=" flex justify-center items-center" />
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Error404;
