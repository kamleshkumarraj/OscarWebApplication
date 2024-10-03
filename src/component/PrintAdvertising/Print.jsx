import React from 'react';
import bannerImage from '../../assets/oscar_image/12.png';
import Card from './AdCard';
import Cards from "../Card"
import img1 from "../../assets/oscar_image/McDonagh.jpeg"
import img2 from "../../assets/oscar_image/Corner.jpeg"
import img3 from "../../assets/oscar_image/Almanova.png"
import BannerDetails from '../BannerDetails';

const Print = () => {
    return (
        <div className="w-full">
            <div className='h-[70vh] overflow-hidden md:overflow-auto'>
                <div
                    className="h-full relative w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >

                    <div className='absolute left-2 bottom-20 sm:bottom-32 sm:left-10 w-full  sm:w-1/2 rounded-xl p-6'>
                        <p className='text-3xl sm:text-[46px] text-[#3143A5] 2xl:text-[51.67px] leading-10 md:leading-[75px] mt-3 font-bold'>Print Advertising & <br /> Office</p>
                        <p className='text-base sm:text-xl 2xl:text-lg font-normal capitalize mt-8'>Spread the word, stock the shelves and run your business <br /> like a pro.</p>
                    </div>
                </div>
            </div>
            <Card />
            <div className='p-20'>
                <div className='flex flex-col gap-2 p-2 py-8'>
                    <h1 className='text-4xl font-semibold'>Best sellers</h1>
                    <p>Check out the advertising and office.<br />
                        products flying off our virtual shelves.</p>
                </div>
                <Cards />
                <div className='text-center mt-12 py-8'>
                    <button className='bg-[#FF7D04] px-6 py-2 text-sm text-white uppercase'>View All</button>
                </div>
            </div>
            <div className='px-16'>
            <BannerDetails
                banner_1={img1}
                banner_2={img2}
                banner_3={img3}
                text={"Stand out with a custom, budget-friendly design."}
                desc={"Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours."}
                btn={"Explore More"}
                color={"bg-[#FCF8F3]"} />
            </div>
                
            <div className='px-20 py-12'>
                <div className='flex flex-col gap-2 p-2 py-8'>
                    <h1 className='text-4xl font-semibold'>New products</h1>
                    <p>Discover our most recent assortment of print advertising and office <br /> supplies for small businesses like yours.</p>
                </div>
                <Cards />
                <div className='text-center mt-12 py-8'>
                    <button className='bg-[#FF7D04] px-6 py-2 text-sm text-white uppercase'>View All</button>
                </div>
            </div>
        </div>
    );
}

export default Print;
