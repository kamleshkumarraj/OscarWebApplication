import React from "react";
import verificationImg from "../assets/oscar_image/verification.png";

const Verification = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-4">
      <div className="pt-10 lg:pt-20 lg:pl-40 flex justify-center lg:justify-start">
        <img
          className="w-[250px] md:w-[300px] lg:w-[400px]"
          src={verificationImg}
          alt="Verification"
        />
      </div>
      <div className="flex-1 pt-10 lg:pt-16">
        <h1 className="text-[24px] md:text-[28px] lg:text-[33.55px] font-black leading-[1.2] md:leading-[1.2] lg:leading-[50.32px] tracking-[0.02em] text-left font-poppins">
          Verification
        </h1>

        <p className="mt-2 text-[14px] md:text-[15.79px] leading-[20px] md:leading-[20.55px] tracking-[0.02em] text-left font-dm-sans">
          Verify your code
        </p>
        <label
          htmlFor="verification-code"
          className="mt-2 text-[14px] md:text-[17.76px] leading-[20px] md:leading-[23.12px] tracking-[0.02em] text-left font-dm-sans"
        >
          Verification code
        </label>
        <input
          id="verification-code"
          type="text"
          placeholder="Enter your code"
          className="mt-2 block w-full md:w-[559.45px] h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px] border border-solid border-gray-400 rounded"
        />

        <button className="mt-7 inline-flex items-center justify-center w-full md:w-[164.78px] h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px] rounded bg-[#524BAD] text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#3e3b9e] hover:shadow-lg">
          Verify Code
        </button>
      </div>
    </div>
  );
};

export default Verification;
