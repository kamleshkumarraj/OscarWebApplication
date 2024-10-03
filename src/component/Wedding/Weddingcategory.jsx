import React from 'react';
import CeremonyReception from "../../assets/oscar_image/Ceremony & Reception Essential.jpg"
import Thankyoucard from "../../assets/oscar_image/thankyou.webp"
import savedate from "../../assets/oscar_image/savedate.png"
import { Link } from 'react-router-dom';

const Weddingcategory = () => {
  const cards = [
    {
      title: 'Ceremony & Reception Essential',
      imageUrl: CeremonyReception,
      altText: 'Ceremony & Reception Essential',
    },
    {
      title: 'Thankyou Card',
      imageUrl: Thankyoucard,
      altText: 'Thankyou Cards',
    },
    {
      title: 'Save The Dates',
      imageUrl:savedate ,
      altText: 'Save The Dates',
    },
  ];

  return (
    <div className="px-4 md:px-16 py-10">
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
        Premium Categories for Every Wedding Need
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-500 mb-8">
        Browse our categories to find the finest cards tailored to make your day unforgettable
      </p>

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

export default Weddingcategory;
