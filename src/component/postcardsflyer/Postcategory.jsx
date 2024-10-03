import React from "react";
import special from "../../assets/oscar_image/specialpostcard.jpg";
import standard from "../../assets/oscar_image/standardpostcard.webp";
import roundedcorner from "../../assets/oscar_image/Roundedcorner.png";
import { Link } from "react-router-dom";

const Category = () => {
  const cards = [
    {
      title: "Special Postcard",
      imageUrl: special,
      altText: "Special Postcard",
    },
    {
      title: "Standard PostCard",
      imageUrl: standard,
      altText: "Standard PostCard",
    },
    {
      title: "Rounded cornerpostcard",
      imageUrl: roundedcorner,
      altText: "Rounded corner postcard",
    },
  ];

  return (
    <div className="px-4 md:px-16 py-10">
      <div className="text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
          Make a Statement with Our Postcards
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8">
          Create memorable postcards with our high-quality printing. Ideal for
          marketing campaigns, invitations, and more
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col group overflow-hidden rounded-lg shadow-md transition duration-100 ease-in-out transform hover:scale-105"
          >
            <Link to="/business-browse">
              <img
                src={card.imageUrl}
                alt={card.altText}
                className="w-full lg:h-[64vh] h-[24vh] object-cover rounded-t-lg group-hover:shadow-xl"
              />
            </Link>
            <div className="text-center p-4 bg-white rounded-b-lg">
              <p className="font-semibold text-lg group-hover:text-blue-600">
                {card.altText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
