import React from 'react'
import { CgShoppingCart } from "react-icons/cg";
import { MdCurrencyExchange } from "react-icons/md";
import { GoPackageDependents } from "react-icons/go";
import { RiDiscountPercentFill } from "react-icons/ri";
import h_img from '../../assets/h_1.png'
import h_img1 from '../../assets/h_2.png'

const tabData = [
  {
    icontab: <CgShoppingCart size={28} />,
    title: 'Support Independent Brands',
    img: h_img,
  },
  {
    icontab: <MdCurrencyExchange  size={28} />,
    title: 'Free Returns and Exchanges',
    img:h_img ,
  },
  {
    icontab: <GoPackageDependents size={28} />,
    title: 'Sustainable Packaging Options',
    img:h_img,
  },
  {
    icontab: <RiDiscountPercentFill size={28} />,
    title: 'Exclusive Member Discounts',
    img: h_img,
  },
];
const ProductTab = () => {
  return (
    <div className='px-2 mt-6 flex flex-col gap-y-4 sm:gap-y-8 sm:px-20'>
    <div className='grid bg-[#524BAD] rounded-md sm:rounded-full w-full grid-cols-2 sm:grid-cols-4'>
    {tabData &&
    tabData.map((item, id) => (
      <div
        key={id}
        className="w-full border-r-2 md:border-r-0 border-white border-b-2 sm:border-b-0 p-2 flex flex-col items-center justify-center text-center gap-y-2 py-4 text-white"
      >
        <div>{item.icontab}</div>
        <p className="text-sm sm:text-base 2xl:text-lg font-normal">
          {item.title}
        </p>
      </div>
    ))}
    </div>

    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'>
        <div className='w-full h-[60vh] sm:h-[543px] rounded-sm overflow-hidden relative'>
        <img className='h-full' src={h_img} alt="img1" />
        <div className='bg-white flex flex-col gap-y-3 sm:gap-y-5 text-[#000000] absolute left-2 bottom-4 sm:bottom-10 sm:left-10 bg-opacity-75 w-3/4 sm:w-[350px] md:w-[489px] rounded-xl p-2 sm:p-8'>
    <p className='text-lg sm:text-2xl 2xl:text-[39px] font-medium md:font-normal'>Your day, your way</p>
    <p className='text-base sm:text-lg 2xl:text-xl sm:leading-8 font-normal'>Invites, save the dates and everything else wedding. Personalize all the small details for your big day.</p>

        <button className='bg-[#FF7D04] hover:bg-orange-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium py-2.5 px-4 sm:px-8'>Shop All Wedding</button>

  </div>
        </div>
        <div className='w-full h-[60vh] sm:h-[543px] rounded-sm overflow-hidden relative'>
        <img className='h-full' src={h_img1} alt="img1" />
        <div className='bg-white flex flex-col gap-y-3 sm:gap-y-5 text-[#000000] absolute left-2 bottom-4 sm:bottom-10 sm:left-10 bg-opacity-75 w-3/4 sm:w-[350px] md:w-[425px] rounded-xl p-2 sm:p-8'>
    <p className='text-lg sm:text-2xl 2xl:text-[39px] font-medium md:font-normal'>Price drop: Our most-loved business cards</p>
    <p className='text-base sm:text-lg 2xl:text-xl sm:leading-8 font-normal'>We've lowered prices on all our standard and premium cards, for a limited time. Now get 100 standard cards for just $15.99.</p>

        <button className='bg-[#4EB542] hover:bg-green-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium mt-2 sm:mt-4 py-2.5 px-4 sm:px-8'>Standard Business Card</button>
        <button className='bg-[#FF7D04] hover:bg-orange-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] w-fit font-medium py-2.5 px-4 sm:px-8'>Premium Business Card</button>

  </div>
        </div>
        
    </div>
    </div>
  )
}

export default ProductTab