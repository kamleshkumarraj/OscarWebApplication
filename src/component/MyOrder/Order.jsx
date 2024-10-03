// import React from "react";
import MyOrder from "./MyOrder";
import ActiveOrder from "./ActiveOrder";
// import CompletedOrder from "./CompletedOrder";
import Sidebar from "../checkoutpage/Sidebar";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Order = () => {
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
    <div className="p-28">
      <div className="flex space-x-4 ">
        <Sidebar />
        <div className="w-full">
          <MyOrder />
          {/* <CompletedOrder /> */}
          <ActiveOrder />
        </div>
      </div>
    </div>
  );
};

export default Order;
