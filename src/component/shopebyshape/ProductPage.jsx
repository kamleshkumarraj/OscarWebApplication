<<<<<<< HEAD
import React from 'react';
import img1 from "../../assets/oscar_image/img1.png"
import img2 from "../../assets/oscar_image/img2.png"
import img3 from "../../assets/oscar_image/img3.png"
import img4 from "../../assets/oscar_image/img4.png"
import img5 from "../../assets/oscar_image/img5.png"
import Description from './Description';

const ProductPage = () => {
    return (
        <div className="md:p-24 p-10">
            <div className="text-sm text-gray-500 mb-4">
                Home / New Arrivals / Visiting Card
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 p-2">
                    <img src={img1} alt="Product" className="w-full h-auto mb-4" />
                    <div className="flex justify-between">
                        <img src={img2} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img3} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img4} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img5} alt="Thumbnail" className="w-1/5 h-auto" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-20 py-2">
                    <h1 className="text-2xl font-bold">Product Name</h1>
                    <p className="text-gray-700 mb-4">Personalized cards with a professional look.</p>
                    <div className='space-y-3 mb-2'>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Dimensions: 89 × 51 mm</li>
                            <li>4000+ design options available</li>
                            <li>Standard glossy or matte paper included</li>
                        </ul>
                        <p className='ml-1'>Cash on Delivery available</p>
                    </div>
                    <p className='font-semibold'>Price below is MRP (inclusive of all taxes)</p>

                    <div className="border border-gray-300 p-4 mb-4 mt-10 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Paper Quality</h2>
                        <div className='flex items-center gap-4 mt-6'>
                            <div className="flex space-x-4">
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-[#01A7DB]">Standard</button>
                            </div>
                            <div className='relative'>
                                <p className='bg-[#84C743] absolute -top-3 rounded-sm text-white text-[16px] right-0 left-0 text-center'>Recommended </p>
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-black">Premium</button>
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-2 mt-8">Paper Stock</h2>
                        <div className='flex items-center gap-4 mt-6'>
                            <div className="flex space-x-4">
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-[#01A7DB]">Matte</button>
                            </div>
                            <div className='relative'>
                                <p className='bg-[#84C743] absolute -top-3 rounded-sm text-white text-[16px] right-0 left-0 text-center'>Recommended </p>
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-black">Glossy</button>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-300 px-3 py-6 mb-4 rounded-lg mt-8">
                        <h2 className="text-lg font-semibold mb-2">Corners</h2>
                        <div className="flex space-x-4 px-2">
                            <button className="border border-[#01A7DB] lg:px-12 px-6 py-2 rounded-lg">Standard</button>
                            <button className="border border-[#01A7DB] lg:px-12 px-6 py-2 rounded-lg">Rounded</button>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                        <p>Quantity : </p>
                        <span className='border border-black px-4 rounded-2xl text-sm'>10</span>
                    </div>

                    <div className="mb-4 text-gray-700">
                        <strong>Price: ₹ 35.00</strong>
                    </div>

                    <button className="bg-orange-500 text-white px-6 py-1 rounded">Start Designing</button>
                </div>
            </div>
            <Description/>
        </div>
    );
};

export default ProductPage;
=======
import React from 'react';
import img1 from "../../assets/oscar_image/img1.png"
import img2 from "../../assets/oscar_image/img2.png"
import img3 from "../../assets/oscar_image/img3.png"
import img4 from "../../assets/oscar_image/img4.png"
import img5 from "../../assets/oscar_image/img5.png"
import Description from './Description';

const ProductPage = () => {
    return (
        <div className="md:p-24 p-10">
            <div className="text-sm text-gray-500 mb-4">
                Home / New Arrivals / Visiting Card
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 p-2">
                    <img src={img1} alt="Product" className="w-full h-auto mb-4" />
                    <div className="flex justify-between">
                        <img src={img2} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img3} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img4} alt="Thumbnail" className="w-1/5 h-auto" />
                        <img src={img5} alt="Thumbnail" className="w-1/5 h-auto" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-20 py-2">
                    <h1 className="text-2xl font-bold">Product Name</h1>
                    <p className="text-gray-700 mb-4">Personalized cards with a professional look.</p>
                    <div className='space-y-3 mb-2'>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Dimensions: 89 × 51 mm</li>
                            <li>4000+ design options available</li>
                            <li>Standard glossy or matte paper included</li>
                        </ul>
                        <p className='ml-1'>Cash on Delivery available</p>
                    </div>
                    <p className='font-semibold'>Price below is MRP (inclusive of all taxes)</p>

                    <div className="border border-gray-300 p-4 mb-4 mt-10 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Paper Quality</h2>
                        <div className='flex items-center gap-4 mt-6'>
                            <div className="flex space-x-4">
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-[#01A7DB]">Standard</button>
                            </div>
                            <div className='relative'>
                                <p className='bg-[#84C743] absolute -top-3 rounded-sm text-white text-[16px] right-0 left-0 text-center'>Recommended </p>
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-black">Premium</button>
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-2 mt-8">Paper Stock</h2>
                        <div className='flex items-center gap-4 mt-6'>
                            <div className="flex space-x-4">
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-[#01A7DB]">Matte</button>
                            </div>
                            <div className='relative'>
                                <p className='bg-[#84C743] absolute -top-3 rounded-sm text-white text-[16px] right-0 left-0 text-center'>Recommended </p>
                                <button className="border lg:px-12 px-6 py-2 rounded-lg border-black">Glossy</button>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-300 px-3 py-6 mb-4 rounded-lg mt-8">
                        <h2 className="text-lg font-semibold mb-2">Corners</h2>
                        <div className="flex space-x-4 px-2">
                            <button className="border border-[#01A7DB] lg:px-12 px-6 py-2 rounded-lg">Standard</button>
                            <button className="border border-[#01A7DB] lg:px-12 px-6 py-2 rounded-lg">Rounded</button>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                        <p>Quantity : </p>
                        <span className='border border-black px-4 rounded-2xl text-sm'>10</span>
                    </div>

                    <div className="mb-4 text-gray-700">
                        <strong>Price: ₹ 35.00</strong>
                    </div>

                    <button className="bg-orange-500 text-white px-6 py-1 rounded">Start Designing</button>
                </div>
            </div>
            <Description/>
        </div>
    );
};

export default ProductPage;
>>>>>>> f605179fd6e205f5755f75517e6b79cdba43551b
