import React from "react";
import emailcheckImg from "../assets/oscar_image/checkemail.png";

const Checkemail = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-4">
      <div className="pt-10 lg:pt-20 lg:pl-40 flex justify-center lg:justify-start">
        <img
          className="w-[300px] md:w-[400px]"
          src={emailcheckImg}
          alt="emailcheckImg"
        />
      </div>
      <div className="flex-1 pt-10 lg:pt-16">
        <h1 className="text-[24px] md:text-[28px] lg:text-[33.55px] font-black leading-[1.2] tracking-[0.02em] text-left font-poppins">
          Check Email
        </h1>

        <p className="mt-2 text-[14px] md:text-[15.79px] leading-[20px] md:leading-[20.55px] tracking-[0.02em] text-left font-dm-sans text-gray-400">
          Please check your email inbox and click on the provided link to reset
          your password. If you don’t receive the email,{" "}
          <a href="#" className="text-blue-500 underline cursor-pointer">
            Click here to resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default Checkemail;
