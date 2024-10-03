// import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import AddressCard from "../AddressCard";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";

const Contactdetails = () => {
  const navigate = useNavigate();
  const handleAddressNavigate = () => {
    navigate("add-address");
  };
  const Details = [
    {
      title: "Your Name",
      name: "Jhanvi Shah",
      opt: "Change",
    },
    {
      title: "Email Address",
      name: "Jhanvi@gmail.com",
      opt: "Change",
    },
    {
      title: "Phone Number",
      name: "8980252445",
      opt: "Change",
    },
    {
      title: "Password",
      name: "*********",
      opt: "Change",
    },
  ];
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
        {/* Main Content */}
        <div className="w-full md:w-3/4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">My Info</h1>
          </div>
          <div className="mb-2 flex flex-col">
            <h2 className="text-xl font-bold mb-6">Contact Details</h2>
            {Details.map((items, i) => (
              <div key={i} className="rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{items.title}</p>
                    <p className="text-sm font-semibold">{items.name}</p>
                  </div>
                  <div>
                    <button className="font-semibold text-sm">
                      {items.opt}
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <button className="text-blue-500 mb-4">
                <Link to="/myAccount/add-address">Add New</Link>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AddressCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactdetails;
