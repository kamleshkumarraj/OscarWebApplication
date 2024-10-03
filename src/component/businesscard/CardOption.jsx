import React from 'react';
import dentist from "../../assets/oscar_image/Dentist.jpeg"
import amber from "../../assets/oscar_image/amber.jpeg"
import food from "../../assets/oscar_image/Food.jpeg"
const CardOption = () => {
  const cards = [
    {
      title: 'Traditional',
      imageUrl: amber,
      altText: 'Traditional Cards',
    },
    {
      title: 'Premium',
      imageUrl: food, 
      altText: 'Premium Cards',
    },
    {
      title: 'Deluxe',
      imageUrl: dentist, 
      altText: 'Deluxe Cards',
    },
  ];

  return (
    <div className="px-4 py-10 md:px-16">
      <h2 className="mb-2 text-lg font-semibold text-center sm:text-2xl md:text-3xl">
        Explore all your card options
      </h2>
      <p className="mb-8 text-sm text-center text-gray-500 sm:text-base md:text-lg">
        From standard to standout papers, get the look you want.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className='flex flex-col'>
            <div className="overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.altText}
              className="w-full lg:h-[68vh] h-[28vh] object-cover"
              />
              </div>
              <div className='p-4 text-center'>
                 <p className='font-semibold'>{card.altText}</p>
              </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CardOption;
