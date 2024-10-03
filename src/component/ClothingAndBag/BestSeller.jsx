import React from 'react';
import bestseller_img_1 from '../../assets/ClothingAndBag/bestseller-image-1.svg';
import bestseller_img_2 from '../../assets/ClothingAndBag/bestseller-image-2.svg';
import bestseller_img_3 from '../../assets/ClothingAndBag/bestseller-image-3.svg';
import BestesellerCard from './BestesellerCard';

function BestSeller() {
  const imgArr = [bestseller_img_1, bestseller_img_2, bestseller_img_3];
  const labelArr_1 = ['Hoodies & Sweatshirt', 'Coats & Parkas', 'Tees & T-Shirt'];
  const labelArr_2 = ['Explore Now!', 'Explore Now!', 'Explore Now!'];

  return (
    <div id="personal-section" className="w-full sm:p-6 lg:p-10">
      <div id="heading" className="text-center mb-4">
        <h1 className="font-poppins mb-4 font-semibold text-xl md:text-2xl lg:text-3xl text-gray-800">
          Popular Choices
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          Shop the most popular items in demand
        </p>
      </div>

      <div id="img-section" className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        {imgArr.map((img, idx) => (
          <BestesellerCard
            key={idx}
            img={img}
            label_1={labelArr_1[idx]}
            label_2={labelArr_2[idx]}
            className="hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
