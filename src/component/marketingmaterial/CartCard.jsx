import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import productImage from '../../assets/oscar_image/5.png';

const CartCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
    };
    return (
        <div className="p-4 md:p-8 lg:p-16">
            <div className="flex flex-col md:flex-row justify-around items-center bg-[#928ECB] rounded-[38.92px]">

                <div className="w-full md:w-1/2 text-white space-y-6 p-16">
                    <p className="uppercase tracking-widest">Concentrates</p>
                    <h2 className="text-2xl md:text-5xl font-bold">Political Campaign <br/> Signage & Supplies</h2>

                    <div className="flex items-center space-x-2">
                        <FaStar className="text-yellow-400" />
                        <p className="text-sm">4.6/5</p>
                        <p className="text-sm text-white"> | 135 <span className='text-[#ffffff]'>Reviews</span></p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-[#9B97CF] text-white border px-3 py-1 rounded-lg">flyerr</span>
                        <span className="bg-[#9B97CF] text-white border px-3 py-1 rounded-lg">poster</span>
                        <span className="bg-[#9B97CF] text-white border px-3 py-1 rounded-lg">banner</span>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold">Add to Cart</button>
                        <p className="text-2xl font-bold text-yellow-500">$102.00 <span className="text-gray-300 line-through font-normal text-sm">$200.00</span></p>
                    </div>
                </div>

                <div className="w-full md:w-[37%] mt-8 md:mt-0 p-10">
                    <Slider {...settings}>
                        <div className='bg-[#B88885] rounded-3xl'>
                            <img src={productImage} alt="Product" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className='bg-[#B88885] rounded-3xl'>
                            <img src={productImage} alt="Product" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className='bg-[#B88885] rounded-3xl'>
                            <img src={productImage} alt="Product" className="w-full h-auto rounded-lg" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CartCard
