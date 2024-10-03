import React from 'react';
import comma_l from '../../assets/images/comma-left.svg';
import comma_r from '../../assets/images/comma-right.svg';

function TestCard() {
  return (
    <div className="testimonial-card flex flex-col items-center max-w-[36.1rem] h-64 p-[1rem] bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
      <div className="text-section w-full relative mb-6">
        <img className="absolute top-[-1rem] left-[1rem]" src={comma_l} alt="left comma" />
        <p className="font-[poppins] text-xs sm:text-sm 2xl:text-base font-normal leading-[2.5rem] text-center pl-[3rem] pr-[3rem] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.
        </p>
        <img className="absolute right-[1rem] bottom-[-1rem]" src={comma_r} alt="right comma" />
      </div>
      <div className="image-section flex gap-[1rem] items-center mx-auto">
        <img className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZOwv-ThhfOYXCq8h5NY-EIB1-S6r1M6CwA&usqp=CAU" alt="John Doe" />
        <div className="text-start">
          <h3 className="text-xs sm:text-sm 2xl:text-base font-bold leading-4">John Doe</h3>
          <p className="text-xs sm:text-sm 2xl:text-base font-normal text-[#4F4F4F] leading-3 sm:leading-4">Entrepreneur</p>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
