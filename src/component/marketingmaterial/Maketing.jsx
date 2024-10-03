import React from 'react'
import bannerImage from "../../assets/oscar_image/11.png"
import PersonalizeCard from './PersonalizeCard'
import dummy from "../../assets/oscar_image/dummy.jpeg"
import { HiArrowRight } from 'react-icons/hi'
import CartCard from './CartCard'
import Collection from './Collection'
import card1 from "../../assets/oscar_image/card1.png"
import card2 from "../../assets/oscar_image/60.png"
import card3 from "../../assets/oscar_image/card3.png"
import card4 from "../../assets/oscar_image/card4.png"
import card5 from "../../assets/oscar_image/card5.png"
import card6 from "../../assets/oscar_image/card6.png"


const Maketing = () => {
    const items = [
        { src: dummy, title: "Postcard", subtitle: "Explore Now!" },
        { src: dummy, title: "Presentation Folder", subtitle: "Explore Now!" },
        { src: dummy, title: "Rack Card", subtitle: "Explore Now!" }
    ];
    const images = [
        { src: card1, alt: "Product 1" },
        { src: card2, alt: "Product 2" },
        { src: card3, alt: "Product 3" },
        { src: card4, alt: "Product 4" },
        { src: card5, alt: "Product 5" },
        { src: card6, alt: "Product 6" },
    ];
    return (
        <div>
            <div className='h-[70vh] overflow-hidden md:overflow-auto'>
                <div
                    className="h-full relative w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >

                    <div className='absolute left-2 bottom-20 sm:bottom-32 sm:left-10 w-full  sm:w-1/2 rounded-xl p-6'>
                        <p className='text-3xl sm:text-[46px] text-[#ffffff] 2xl:text-[51.67px] leading-10 md:leading-[75px] mt-3 font-bold'>Marketing <br /> Materials</p>
                        <p className='text-base sm:text-xl 2xl:text-lg font-normal text-[#ffffff] capitalize mt-8'>Meet customers where they are with custom <br /> marketing materials – in the mail, at events or on <br /> the street.</p>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 md:px-8 lg:px-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Personalize Clothes, Bags & More</h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-12">From Daily Wear To Travel Bags, We've Got You Covered.</p>
                <PersonalizeCard />
            </div>
            <div className="py-12 px-4 md:px-8 lg:px-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8">Best Sellers</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={item.src} alt={item.title} className="w-full h-auto rounded-lg object-cover" />
                            <div className="flex items-center justify-between w-full mt-4">
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-500">{item.subtitle}</p>
                                </div>
                                <div>
                                    <HiArrowRight className="text-gray-500 mt-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <CartCard />
            </div>
            <div className="px-24 py-6">
                <h2 className="text-4xl font-semibold mb-4">Can't-Miss Collections</h2>
                <p className="mb-8 text-lg">
                    From Daily Wear To Travel Bags, We've Got You Covered.
                </p>
                <Collection />
            </div>
            <div className="px-4 py-8 max-w-5xl mx-auto text-center">
                <h2 className="text-xl md:text-4xl font-semibold mb-8 pb-8">
                    Follow Products And Discounts On Instagram
                </h2>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-center gap-4 overflow-x-auto scrollbar-hide">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="h-40 w-48 object-cover rounded-md"
                        />
                    ))}
                </div>
                <h3 className="text-lg md:text-4xl font-semibold my-8 py-4">
                    Or Subscribe To The Newsletter
                </h3>
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="email"
                        placeholder="Email Address..."
                        className="px-4 py-2 w-full max-w-sm border-b border-black focus:outline-none"
                    />
                    <button className="px-4 py-2 border-b border-black font-medium">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Maketing
