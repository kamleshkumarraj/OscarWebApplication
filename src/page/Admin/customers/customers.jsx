// import React from "react";
import prodImage from "../../../assets/admin/products/prodimage.svg";
import search from "../../../assets/admin/products/search.svg";
import action from "../../../assets/admin/products/action.svg";
import filter from "../../../assets/admin/filter.svg";

const Customers = () => {
  const orders = [
    {
      image: prodImage,
      name: "Lorem Ipsum",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem Ipsum",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem Ipsum",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem Ipsum",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      image: prodImage,
      name: "Lorem Ipsum",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
  ];

  return (
    <div>
      <div className="bg-[#f6f6f6] w-full h-[100vh]">
        <div className="w-full h-full p-16">
          <div className="bg-white w-full h-full border border-gray-200 rounded-md">
            <div className="flex flex-col ">
              <div className="flex justify-between items-center p-4 px-12">
                <div>
                  <h2 className="text-2xl font-medium ">Customers</h2>
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
                      <td className="p-3 px-8 w-[5%] text-center ">
                        <img src={filter} alt="" />
                      </td>
                      <td className="p-3 text-center">Name</td>
                      <td className="p-3 text-center">Email</td>
                      <td className="p-3 text-center">Shipping Address</td>
                      <td className="p-3 text-center">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-100 ">
                        <td className="text-center p-7">
                          <span className="text-blue-500 rounded-md px-4 py-2 bg-[#f6f6f6] ">
                            {" "}
                            {order.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </span>
                        </td>

                        <td className="p-3 text-center  text-lg">
                          {order.name}
                        </td>
                        <td className="p-3 text-center text-lg">
                          {order.date}
                        </td>
                        <td className="p-3 text-center text-lg">
                          {order.total}
                        </td>
                        <td className="p-6 cursor-pointer   text-center text-lg flex justify-center items-center h-full">
                          <img src={action} alt="" className="size-7 " />
                        </td>
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

export default Customers;
