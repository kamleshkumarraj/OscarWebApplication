// import React from "react";
import { Link } from "react-router-dom";
import dasboardIcon from "../../assets/admin/dashboard/dasboard.svg";
import productIcon from "../../assets/admin/dashboard/product.svg";
import orderIcon from "../../assets/admin/dashboard/orders.svg";
import customerIcon from "../../assets/admin/dashboard/customers.svg";
import reviewIcon from "../../assets/admin/dashboard/reviews.svg";
import settingIcon from "../../assets/admin/dashboard/setting.svg";

const Sidebar = () => {
  /* className =
        "hidden sm:block fixed top-0 left-0 z-20 md:flex flex-col flex-shrink-0 w-64 h-full pt-20 font-normal duration-75 transition-width";
 */
  return (
    <aside className="w-80 h-full flex justify-center items-center pt-8  border-r-2 ">
      <ul className="pb-2 space-y-2 w-full h-full px-6 ">
        <li>
          <Link
            to=""
            className="flex items-center p-2 text-center   text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={dasboardIcon} alt="" />
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="products"
            className="flex items-center p-2 text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={productIcon} alt="" />
            <span className="ml-3">Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="orders"
            className="flex items-center p-2 text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={orderIcon} alt="" />
            <span className="ml-3">Orders</span>
          </Link>
        </li>
        <li>
          <Link
            to="customers"
            className="flex items-center p-2 text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={customerIcon} alt="" />
            <span className="ml-3">Customers</span>
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            className="flex items-center p-2 text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={reviewIcon} alt="" />
            <span className="ml-3">Reviews</span>
          </Link>
        </li>
        <li>
          <Link
            to="setting"
            className="flex items-center p-2 text-lg text-gray-900 font-semibold rounded-lg hover:bg-gray-200 group"
          >
            <img src={settingIcon} alt="" />
            <span className="ml-3">Setting</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
