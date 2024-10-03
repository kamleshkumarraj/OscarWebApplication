import React from 'react';
import printingeqi from "../../assets/oscar_image/printtingequipment.jpg";
import ecommerceplatform from "../../assets/oscar_image/ecommerceImg.png";
import printondemand from "../../assets/oscar_image/homelabel.jpg";
import feedbackImg from "../../assets/oscar_image/feedbackImg.jpg";
import analyticstool from "../../assets/oscar_image/analyticstool.jfif";

const productdata = [
  {
    id: 1,
    imgsrc: printingeqi,
    label: "Printing Equipment",
  },
  {
    id: 2,
    imgsrc: ecommerceplatform,
    label: "E-commerce Platforms",
  },
  {
    id: 3,
    imgsrc: printondemand,
    label: "Print-on-Demand",
  },
  {
    id: 4,
    imgsrc: feedbackImg,
    label: "Feedback Tools",
  },
  {
    id: 5,
    imgsrc: analyticstool,
    label: "Analytics Tools",
  },
];

const CardDesign = ({ titletext }) => {
  return (
    <div className='md:px-20 px-2 py-4 md:py-8 mt-6 gap-y-6 flex flex-col'>
      
      <div className="text-center mb-4">
  <h1 className="text-3xl md:text-4xl font-bold text-[#000000] relative inline-block pb-2">
    Empower Your Business with Advanced Tools
    <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff9900]"></span>
  </h1>
  <p className="text-lg md:text-xl text-[#555555] mt-2 italic">
    Utilizing innovative design, printing, and marketing solutions to boost growth
  </p>
</div>

      {/* Image Grid */}
      <div className='grid w-full  grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-5'>
        {productdata && productdata.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className='flex flex-col w-full text-start gap-y-4 group hover:scale-105 transition-transform duration-300 ease-in-out'
          >
            <img 
              className='h-60 w-full object-cover rounded-lg shadow-md' 
              src={item.imgsrc} 
              alt={item.label} 
            />
            <hr className="h-px w-20 bg-[#913B10] border-0 group-hover:w-full transition-all duration-300 ease-in-out" />
            <p className='text-base sm:text-lg font-normal 2xl:text-xl text-[#000000]'>
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardDesign;
