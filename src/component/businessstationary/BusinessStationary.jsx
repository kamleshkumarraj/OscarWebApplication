import React from 'react'
import bannerImage from "../../assets/oscar_image/oscar8.png"
import dummy from "../../assets/oscar_image/dummy.jpeg"
import Bestseller from './BestSeller';
import CartCard from '../marketingmaterial/CartCard';
import Card from '../Card';
import img from "../../assets/oscar_image/cart.png"

const BusinessStationary = () => {
    const items = [
        { id: 1, label: 'Save The Dates' },
        { id: 2, label: 'Invitation Suites' },
        { id: 3, label: 'Parties & Bshower' },
        { id: 4, label: 'Thankyou Card' },
        { id: 5, label: 'Samples' },
        { id: 6, label: 'Ceremony & Reception Essential' },
    ];
    return (
        <div>
            <div className='h-[70vh] overflow-hidden md:overflow-auto'>
                <div
                    className="h-full relative w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >

                    <div className='absolute left-2 bottom-20 sm:bottom-32 sm:left-10 w-full  sm:w-1/2 rounded-xl p-6'>
                        <p className='text-3xl sm:text-[46px] text-[#ffffff] 2xl:text-[51.67px] leading-10 md:leading-[75px] mt-3 font-bold'>Business Stationery</p>
                        <p className='text-base sm:text-xl 2xl:text-lg font-normal text-[#ffffff] capitalize mt-8'>Get 50 wedding invites for under $50 with 50% off all <br /> quantities, sizes and paper stocks.</p>
                    </div>
                </div>
            </div>

            <div className="p-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 p-4 sm:p-6 lg:p-8 gap-3">
                    {items.map(item => (
                        <div key={item.id} className="flex flex-col items-center text-center">
                            <img
                                src={dummy}
                                alt={item.label}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-black rounded-full flex items-center justify-center"
                            />
                            <p className="mt-2 text-xs sm:text-sm md:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Bestseller 
                title={"Bestsellers"}
                desc={"Check out the business stationery products flying off our virtual shelves."}/>
            </div>
            <div>
                <CartCard />
            </div>
            <div className='px-20'>
                <div>
                    <h2 className="text-5xl font-bold mb-8 capitalize">new products</h2>
                    <p className="text-gray-600 mb-8 text-3xl">Discover our most recent assortment of business stationery for small <br /> businesses like yours.</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <Card color={"#F9F1E7"} rounded={"rounded-2xl"} background={"inherit"} gap={"18"} />
                    <Card color={"#F9F1E7"} rounded={"rounded-2xl"} background={"inherit"} gap={"18"} />
                </div>
                <div className='flex items-center justify-center mt-8 py-4'>
                    <button className='bg-[#FF7D04] px-4 py-2 text-sm text-white'>View All</button>
                </div>
            </div>

            <section className="py-8 px-16">
                <div className='bg-[#62C9E9] flex flex-col lg:flex-row items-center justify-between gap-12 p-16'>
                    <div className='bg-[#01A7DB] w-full lg:w-1/2 rounded-[59.2px]'>
                        <img
                            src={img}
                            alt="Custom Design"
                            className="h-[60vh] m-auto"
                        />
                    </div>
                    <div className='lg:w-1/2 p-4'>
                        <h2 className="text-4xl font-bold mb-4">Stand Out With A <br /> Custom, Budget- <br />Friendly Design.</h2>
                        <p className='text-xs mb-6'>
                            Give Your Project A Professional Finish. Fill Out A Quick Brief <br /> To Receive Concepts From Our In-House Designer Within <br /> 24 Hours.
                        </p>
                        <button className="bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition duration-300">
                            Work with a designer
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BusinessStationary
