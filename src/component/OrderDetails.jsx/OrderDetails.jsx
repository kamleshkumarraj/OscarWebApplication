import { FaChevronLeft, FaCheckCircle, FaTruck } from "react-icons/fa";
import OrderCard from "./OrderCard";
import Sidebar from "../checkoutpage/Sidebar";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import Loader from "../Loader";

function OrderDetails() {
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
    <div className=" p-4 md:p-10 xl:p-20">
      <div className="flex items-center gap-2 lg:px-8 py-4">
        <span>Home</span>
        <MdArrowForwardIos size={10} />
        <span>My Account</span> <MdArrowForwardIos size={10} />
        <span className="font-semibold">Check Out</span>
      </div>
      <div className="flex flex-col md:flex-row lg:px-8 gap-10">
        <Sidebar />
        <div
          id="my-order"
          className="w-full md:col-start-2 md:col-end-4 p-6 bg-white shadow-lg rounded-lg"
        >
          {/* Header */}
          <div id="heading" className="flex items-center gap-4 mb-6">
            <FaChevronLeft
              size="18px"
              color="#3C4242"
              className="cursor-pointer transition-transform transform hover:scale-110"
            />
            <h1 className="font-dm-sans font-bold text-2xl text-[#3C4242] leading-tight tracking-tighter">
              Order Details
            </h1>
          </div>

          {/* Order Details Body */}
          <div id="order-details-body" className="space-y-8">
            {/* Order Information */}
            <div className="flex justify-between p-5 border border-gray-200 rounded-lg shadow-md bg-gradient-to-r from-gray-50 via-white to-gray-100">
              <div className="flex flex-col gap-2">
                <h1 className="font-dm-sans font-bold text-lg text-[#3C4242]">
                  Order no: #23241dmfeng3v
                </h1>
                <p className="font-dm-sans text-sm text-gray-600">
                  Placed On 2 June 2023 2:40 PM
                </p>
              </div>
              <div className="text-right">
                <p className="font-dm-sans font-bold text-lg text-[#3C4242]">
                  Total: <span className="text-blue-600">$233</span>
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div id="order-progress-bar" className="relative">
              <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: "75%" }}
                ></div>
                {/* Progress Steps */}
                <div className="absolute w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full left-0 -top-2 flex items-center justify-center">
                  <FaCheckCircle className="text-white" />
                </div>
                <div className="absolute w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full left-1/3 -top-2 flex items-center justify-center">
                  <FaCheckCircle className="text-white" />
                </div>
                <div className="absolute w-8 h-8 bg-gray-400 rounded-full left-2/3 -top-2 flex items-center justify-center">
                  <FaTruck className="text-white" />
                </div>
                <div className="absolute w-8 h-8 bg-gray-400 rounded-full right-0 -top-2"></div>
              </div>
              <div
                id="order-status"
                className="flex justify-between mt-3 text-sm text-gray-700"
              >
                {["Order Placed", "In Progress", "Shipped", "Delivered"].map(
                  (status, index) => (
                    <p key={index} className="font-dm-sans font-semibold">
                      {status}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Notification */}
            <div className="relative bg-white p-4 rounded-lg flex items-center border border-gray-200 shadow-sm">
              <div className="absolute top-[-10px] left-4 w-4 h-4 bg-white border-t border-l border-gray-300 clip-polygon"></div>
              <p className="font-dm-sans text-sm text-gray-600 mr-4">
                2 June 2023 2:40 PM
              </p>
              <h1 className="font-dm-sans font-bold text-sm text-[#3C4242]">
                Your order has been successfully verified.
              </h1>
            </div>

            {/* Order Cards */}
            <div className="space-y-6">
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
