import React from 'react';
import cards from "../../assets/oscar_image/cardhome1.webp";
import signbanner from "../../assets/oscar_image/homesignandbanner.jpg";
import labelsticker from "../../assets/oscar_image/homelabel.jpg";
import weddingimg from "../../assets/oscar_image/homewedding.jpg";
import clothingandbag from "../../assets/oscar_image/homeclothingbag.jfif";

import Titleheader from '../titleHeader';

const productdata = [
  {
    id: 1,
    imgsrc: cards,
    label: "Cards",
    link: "/business-card" 
  },
  {
    id: 2,
    imgsrc: signbanner,
    label: "Sign and banner",
    link: "/sign-banner" 
  },
  {
    id: 3,
    imgsrc: labelsticker,
    label: "Label and sticker",
    link: "/label-sticker" 
  },
  {
    id: 4,
    imgsrc: weddingimg,
    label: "WEDDING",
    link: "/wedding" 
  },
  {
    id: 5,
    imgsrc: clothingandbag,
    label: "CLOTHING & BAGS",
    link: "/clothing-bags" 
  },
];

const CardDesign = ({ titletext }) => {
  return (
    <div className='md:px-20 px-2 py-4 md:py-8 mt-6 gap-y-6 flex flex-col'>
      <Titleheader  title={titletext} btn='see all' textcolor="#1e1e1e" />
      <div className='grid w-full mt-6 grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-5'>
        {
          productdata && productdata.map((item) => (
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
          ))
        }
      </div>
    </div>
  );
}

export default CardDesign;
