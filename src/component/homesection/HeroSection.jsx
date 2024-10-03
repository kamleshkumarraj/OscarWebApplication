import React from 'react'
import oscar from '../../assets/oscar_image/oscar.png'
const HeroSection = () => {
  return (
    <div className='h-[70vh] overflow-hidden md:overflow-auto'>
        <div
        className="h-full relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${oscar})` }}
      >

      <div className='bg-white text-[#000000] absolute left-2 bottom-10 sm:bottom-14 sm:left-10 bg-opacity-75 w-full  sm:w-1/2 rounded-xl p-6'>
        <p className='text-xs sm:text-sm 2xl:text-base font-light'>Over 3,000 five-star reviews</p>
        <p className='text-3xl sm:text-[56px] 2xl:text-[76px] leading-10 md:leading-[75px] mt-3 font-normal'>“Can’t beat the quality and price!”</p>
        <p className='text-base sm:text-xl 2xl:text-2xl font-normal mt-8'>Verified Buyers like Darrin can’t get enough of our custom tees. Create one yourself and find out why.</p>
        <div className='flex flex-row gap-x-6 mt-5'>
            <button className='bg-[#FF7D04] hover:bg-orange-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] font-medium py-2.5 px-4 sm:px-8'>Shop T-Shirts</button>
            <button className='bg-[#4EB542] hover:bg-green-600 text-xs sm:text-sm 2xl:text-base rounded-full text-[#ffff] font-medium py-2.5 px-8'>All Clothing</button>
        </div>
      </div>

      </div>
        </div>
  )
}

export default HeroSection