import React from 'react';
import logodesigner from "../assets/oscar_image/logodesigner.jpg";
import website from "../assets/oscar_image/website.jpg";
import flyer1 from "../assets/oscar_image/flyer.jpg"
import { Link } from 'react-router-dom';

const Designandlogocategory = () => {
  const cards = [
    {
      title: 'Websites',
      imageUrl: website,
      altText: 'Website Designs',
    },
    {
      title: 'Logo & Brand Identity Pack',
      imageUrl: logodesigner,
      altText: 'Logo & Brand Identity Pack',
    },
    {
      title: 'Flyer Design',
      imageUrl:flyer1 ,
      altText: 'Flyer Designs',
    },
  ];

  return (
    <div className="px-4 md:px-16 py-10">
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
        Your Partner in Brand Success
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-500 mb-8">
        Offering the best in website creation, logo design, and promotional flyers
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

export default Designandlogocategory;
