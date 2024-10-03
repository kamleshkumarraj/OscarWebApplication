import React from 'react';
import Homedecor from "../../assets/oscar_image/homedecor.jpg"
import photoprint from "../../assets/oscar_image/Photo Prints.webp"
import personalizedgift from "../../assets/oscar_image/p2.jpg"
import { Link } from 'react-router-dom';

const Homeandgiftcategory = () => {
  const cards = [
    {
      title: 'Photo Prints',
      imageUrl: photoprint,
      altText: 'Photo Prints',
    },
    {
      title: 'Personalized Gifts',
      imageUrl: personalizedgift,
      altText: 'Personalized Gifts',
    },
    {
      title: 'Home Décor',
      imageUrl:Homedecor ,
      altText: 'Home Décor',
    },
  ];

  return (
    <div className="px-4 md:px-16 py-10">
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
  Discover Our Signature Categories
</h2>
<p className="text-center text-base sm:text-lg md:text-xl text-gray-600 mb-10 px-4 sm:px-8">
  From striking Photo Prints to custom Personalized Gifts and elegant Home Décor</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col group overflow-hidden rounded-lg shadow-md transition duration-100 ease-in-out transform hover:scale-105">
            <Link to="/business-browse">
              <img
                src={card.imageUrl}
                alt={card.altText}
                d
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

export default Homeandgiftcategory;
