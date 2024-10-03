import React from 'react';

import emptycartImg from "../../assets/oscar_image/emptycart.png";


const Emptycart = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 px-4">
      <img
        className="w-[250px] sm:w-[300px] md:w-[350px]"
        src={emptycartImg}
        alt="Empty Cart"
      />
      <p className="font-dm-sans text-[28px] sm:text-[35px] md:text-[45.15px] font-bold leading-[38px] sm:leading-[45px] md:leading-[58.79px] text-center">

        Your cart is empty and sad : {"("}

      </p>
      <span className="font-dm-sans text-[18px] sm:text-[20px] md:text-[21.25px] font-bold leading-[24px] sm:leading-[26px] md:leading-[27.66px] text-[#807D7E] text-center">
        Add something to make it happy!
      </span>
      <button className="w-[200px] sm:w-[225px] md:w-[250px] h-[50px] sm:h-[55px] md:h-[62.87px] py-[12px] sm:py-[14px] md:py-[15.94px] gap-[15.94px] rounded-[10.62px] bg-[#8A33FD] text-white font-semibold text-[16px] sm:text-[18px] md:text-[20px] hover:bg-[#722bd1] transition duration-300">
        Continue Shopping
      </button>
    </div>
  );
};

export default Emptycart;
