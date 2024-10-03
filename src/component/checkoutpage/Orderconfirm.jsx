import React from "react";

import orderconfirm from "../../assets/oscar_image/order-confirmed 1.png";

const Orderconfirm = () => {
  return (
    <>
      <div className="flex justify-center items-center m-auto w-[720.18px]">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src={orderconfirm} alt="Order Confirmation" />
        </a>
      </div>
    </>
  );
};

export default Orderconfirm;
