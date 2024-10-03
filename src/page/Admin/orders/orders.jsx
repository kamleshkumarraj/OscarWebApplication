import React from "react";
import prodImage from "../../../assets/admin/products/prodimage.svg";
import search from "../../../assets/admin/products/search.svg";
import filter from "../../../assets/admin/filter.svg";

const Orders = () => {
  const orders = [
    {
      image: prodImage,
      name: "Lorem ipsum dolor",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
      action: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem ipsum dolor",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
      action: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem ipsum dolor",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
      action: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem ipsum dolor",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
      action: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem ipsum dolor",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
      action: "Processing",
    },
  ];

  return (
    <div>
      <div className="bg-[#f6f6f6] w-full h-full">
        <div className="w-full h-full p-16">
          <div className="bg-white w-full h-full border border-gray-200 rounded-md">
            <div className="flex flex-col ">
              <div className="flex justify-between items-center p-4 px-12">
                <div>
                  <h2 className="text-2xl font-medium ">Orders</h2>
                </div>
                <div className="flex space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-gray-200 px-6 py-3 rounded-md "
                      placeholder="     Search"
                    />
                    <div className="absolute top-2 left-2">
                      <img src={search} alt="" className="size-8" />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full">
                <table className="w-full">
                  <thead className="w-full border-b-[1px]">
                    <tr>
                      <td className="p-3 px-7 w-[5%] text-center">
                        <img src={filter} alt="" />
                      </td>
                      <td className="p-3 text-center">Order</td>
                      <td className="p-3 text-center">Date</td>
                      <td className="p-3 text-center">Total</td>
                      <td className="p-3 text-center">Status</td>
                      <td className="p-3 text-center">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 text-center">
                          <img src={order.image} className="size-24" alt="" />
                        </td>
                        <td className="p-3 text-center">{order.name}</td>
                        <td className="p-3 text-center">{order.date}</td>
                        <td className="p-3 text-center">{order.total}</td>
                        <td className="p-3 text-center">{order.status}</td>
                        <td className="p-3 text-center">{order.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
