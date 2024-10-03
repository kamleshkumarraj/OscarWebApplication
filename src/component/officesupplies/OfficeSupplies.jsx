import React from 'react'
import img1 from "../../assets/oscar_image/10.png"
import dummy from "../../assets/oscar_image/dummy.jpeg"
import Collection from '../marketingmaterial/Collection';
import CartCard from '../marketingmaterial/CartCard'
import BannerDetails from '../BannerDetails';
import TestomonialSection from '../homesection/testomonial/TestomonialSection';

const OfficeSupplies = () => {
    const items = [
        { id: 1, label: 'Pen' },
        { id: 2, label: 'Stamp' },
        { id: 3, label: 'Diary' },
    ];
    return (
        <div>
            <div className='h-[70vh] overflow-hidden md:overflow-auto'>
                <div
                    className="h-full relative w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img1})` }}
                >

                    <div className='absolute left-2 bottom-20 sm:bottom-32 sm:left-10 w-full  sm:w-1/2 rounded-xl p-6 text-white'>
                        <p className='text-3xl sm:text-[56px] 2xl:text-[76px] leading-10 md:leading-[75px] mt-3 font-bold'>Office & Stationery</p>
                        <p className='text-base sm:text-xl 2xl:text-2xl font-normal capitalize mt-8'>Get 50 wedding invites for under $50 with 50% off all quantities, sizes and paper stocks.</p>
                    </div>
                </div>
            </div>
            <div className="py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 p-4 sm:p-6 lg:p-8 gap-3">
                    {items.map(item => (
                        <div key={item.id} className="flex flex-col items-center text-center gap-2">
                            <img
                                src={dummy}
                                alt={item.label}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-52 bg-black rounded-full flex items-center justify-center"
                            />
                            <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-24 py-6">
                <h2 className="text-4xl font-semibold mb-4">Best sellers</h2>
                <p className="mb-8 text-lg">
                    From daily wear to travel bags, we’ve got you covered.
                </p>
                <Collection />
            </div>

            <div>
                <CartCard />
            </div>

            <div className="px-24 py-6">
                <h2 className="text-4xl font-semibold mb-4">New Products</h2>
                <p className="mb-8 text-lg">
                    Discover our most recent assortment for small businesses like yours.
                </p>
                <Collection />
            </div>

            <div className="px-24 py-6">
                <TestomonialSection />
            </div>

            <div className='px-16'>
                <BannerDetails
                    text={"Try Before You Buy"}
                    desc={"Browse our variety of pre-printed and custom-printed packaging samples."}
                    btn={"Browse Samples"}
                    color={"bg-[#43705D]"}
                />
            </div>
        </div>
    )
}

export default OfficeSupplies
