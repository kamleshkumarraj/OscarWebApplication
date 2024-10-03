import React from 'react';
import seasonal from "../../assets/oscar_image/seasonalwear.jpg"
import apparels from "../../assets/oscar_image/apparels.jpg"
import bag from "../../assets/oscar_image/printed bag.jpeg"
import { Link } from 'react-router-dom';

const Category = () => {
  const cards = [
    {
      title: 'Custom T-shirt',
      imageUrl: apparels,
      altText: 'Apparels',
    },
    {
      title: 'Customized Bags',
      imageUrl: bag,
      altText: 'Bags',
    },
    {
      title: 'Summer dress',
      imageUrl: seasonal,
      altText: 'Seasonal Clothing',
    },
  ];

  return (
    <div className="px-4 md:px-16 py-10">
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
        Craft apparel that reflects your style
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-500 mb-8">
        Explore our categories to find your perfect print.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col group overflow-hidden rounded-lg shadow-md transition duration-100 ease-in-out transform hover:scale-105">
            <Link to="/business-browse">
              <img
                src={card.imageUrl}
                alt={card.altText}
                className="w-full lg:h-[68vh] h-[28vh] object-cover rounded-t-lg group-hover:shadow-xl"
              />
            </Link>
            <div className='text-center p-4 bg-white rounded-b-lg'>
              <p className='font-semibold text-lg group-hover:text-blue-600'>{card.altText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
