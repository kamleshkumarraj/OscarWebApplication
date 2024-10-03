import React from "react";
import collect1 from "../../assets/oscar_image/collect1.png";
import collect2 from "../../assets/oscar_image/collect2.png";
import collect3 from "../../assets/oscar_image/collect3.png";
import collect4 from "../../assets/oscar_image/collect4.png";
import collect5 from "../../assets/oscar_image/collect5.png";
import collect6 from "../../assets/oscar_image/collect6.png";
import collect7 from "../../assets/oscar_image/collect7.png";
import collect8 from "../../assets/oscar_image/collect8.png";

const Collection = () => {
  const collections = [
    { title: "New Arrivals", imgSrc: collect1, turnaround: "5 Days Turnaround" },
    { title: "No Minimum Order Quantity", imgSrc: collect2, turnaround: "5 Days Turnaround" },
    { title: "100% Cotton T-Shirts", imgSrc: collect3, turnaround: "5 Days Turnaround" },
    { title: "Soccer Kits", imgSrc: collect4, turnaround: "5 Days Turnaround" },
    { title: "Basketball Kits", imgSrc: collect5, turnaround: "5 Days Turnaround" },
    { title: "Custom Work Uniforms", imgSrc: collect6, turnaround: "5 Days Turnaround" },
    { title: "Our Bestsellers", imgSrc: collect7, turnaround: "5 Days Turnaround" },
    { title: "Express Shipping", imgSrc: collect8, turnaround: "5 Days Turnaround" },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={collection.imgSrc}
              alt={collection.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{collection.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{collection.turnaround}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
