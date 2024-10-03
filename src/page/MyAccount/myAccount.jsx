// import React from 'react'

import { Route, Routes } from "react-router-dom";
import CheckoutWishList from "../../component/checkoutpage/Sidebar";
import Contactdetails from "../../component/checkoutpage/Contactdetails";
import AddAddress from "../../component/checkoutpage/AddAddress";
import Wishlist from "../../component/checkoutpage/Wishlist";
import OrderDetails from "../../component/OrderDetails.jsx/OrderDetails";
import MyOrder from "../../component/MyOrder/MyOrder";
import Order from "../../component/MyOrder/Order";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader";

const MyAccount = () => {
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
    <div className="w-full h-full">
      <div className="flex justify-between items-center w-full  ">
        {/* <CheckoutWishList /> */}
        <div className="w-full ">
          {" "}
          {/* Main content area */}
          <Routes>
            <Route path="" element={<Order />} />
            <Route path="muOrders" element={<Order />} />
            <Route path="myinfo" element={<Contactdetails />} />
            <Route path="add-address" element={<AddAddress />} />
            <Route path="wishlist" element={<Wishlist />} />

            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="customers" element={<Customers />} /> */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
