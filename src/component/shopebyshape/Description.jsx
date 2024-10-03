<<<<<<< HEAD
import React from 'react'
import cloud2 from "../../assets/oscar_image/cloud2.png"
import cloud from "../../assets/oscar_image/cloud.png"
import cover from "../../assets/oscar_image/cover.png"
import cover1 from "../../assets/oscar_image/cover1.png"
import cover2 from "../../assets/oscar_image/cover2.png"
import cover3 from "../../assets/oscar_image/cover3.png"

const Description = () => {
    const products = [
        {
            id: 1,
            title: "Classic Monochrome Tees",
            price: "$35.00",
            stock: "IN STOCK",
            image: cover
        },
        {
            id: 2,
            title: "Monochromatic Wardrobe",
            price: "$27.00",
            stock: "IN STOCK",
            image: cover1
        },
        {
            id: 3,
            title: "Essential Neutrals",
            price: "$22.00",
            stock: "IN STOCK",
            image: cover2
        },
        {
            id: 4,
            title: "UTRAANET Black",
            price: "$43.00",
            stock: "IN STOCK",
            image: cover3
        }
    ];
    return (
        <div className="px-4 lg:py-24">
            <hr />
            <div className="mb-6 space-x-8 text-center mt-6">
                <button className="text-black font-semibold py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl">
                    Description
                </button>
                <button className="text-gray-400 py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl font-semibold">
                    Additional Information
                </button>
                <button className="text-gray-400 py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl font-semibold">
                    Reviews [5]
                </button>
            </div>
            <div className="mb-6 flex justify-between">
                <div className='w-1/4 lg:p-10'>
                    <div className='flex flex-col mt-16 gap-4'>
                        <button className='bg-gray-400 w-full p-2'>Details</button>
                        <button className='w-full p-2'>Reviews</button>
                    </div>
                </div>
                <div className='w-3/4 p-10'>
                    <h3 className="text-xl font-semibold mb-2">Detail</h3>
                    <p className="text-gray-700 mb-4">
                        Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. <br /> Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must- <br />have addition to your collection.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping <br /> it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-8 py-8">
                        <li>Premium Quality</li>
                        <li>Versatile Wardrobe Staple</li>
                        <li>Available in Various Sizes</li>
                        <li>Tailored Fit</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 py-8">
                <div className="bg-[#F9F1E7] rounded-lg p-6 flex justify-center items-center">
                    <img src={cloud2} alt="Business Card" className="max-w-full h-auto" />
                </div>
                <div className="bg-[#F9F1E7] rounded-lg p-6 flex justify-center items-center">
                    <img src={cloud} alt="Sticker Roll" className="max-w-full h-auto" />
                </div>
            </div>

            <div className="p-16">
                <h2 className="text-2xl font-bold mb-2">You might also like</h2>
                <p className="text-gray-500 mb-6">SIMILAR PRODUCTS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <div>
                                <div className='bg-gray-100'>
                                    <img src={product.image} alt={product.title} className="w-full h-auto mb-4 " />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                <div className='flex items-center gap-4'>
                                    <p className="font-semibold border px-3 py-1 rounded-full text-sm">{product.stock}</p>
                                    <p className="">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Description
=======
import React from 'react'
import cloud2 from "../../assets/oscar_image/cloud2.png"
import cloud from "../../assets/oscar_image/cloud.png"
import cover from "../../assets/oscar_image/cover.png"
import cover1 from "../../assets/oscar_image/cover1.png"
import cover2 from "../../assets/oscar_image/cover2.png"
import cover3 from "../../assets/oscar_image/cover3.png"

const Description = () => {
    const products = [
        {
            id: 1,
            title: "Classic Monochrome Tees",
            price: "$35.00",
            stock: "IN STOCK",
            image: cover
        },
        {
            id: 2,
            title: "Monochromatic Wardrobe",
            price: "$27.00",
            stock: "IN STOCK",
            image: cover1
        },
        {
            id: 3,
            title: "Essential Neutrals",
            price: "$22.00",
            stock: "IN STOCK",
            image: cover2
        },
        {
            id: 4,
            title: "UTRAANET Black",
            price: "$43.00",
            stock: "IN STOCK",
            image: cover3
        }
    ];
    return (
        <div className="px-4 lg:py-24">
            <hr />
            <div className="mb-6 space-x-8 text-center mt-6">
                <button className="text-black font-semibold py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl">
                    Description
                </button>
                <button className="text-gray-400 py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl font-semibold">
                    Additional Information
                </button>
                <button className="text-gray-400 py-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 text-2xl font-semibold">
                    Reviews [5]
                </button>
            </div>
            <div className="mb-6 flex justify-between">
                <div className='w-1/4 lg:p-10'>
                    <div className='flex flex-col mt-16 gap-4'>
                        <button className='bg-gray-400 w-full p-2'>Details</button>
                        <button className='w-full p-2'>Reviews</button>
                    </div>
                </div>
                <div className='w-3/4 p-10'>
                    <h3 className="text-xl font-semibold mb-2">Detail</h3>
                    <p className="text-gray-700 mb-4">
                        Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. <br /> Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must- <br />have addition to your collection.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping <br /> it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-8 py-8">
                        <li>Premium Quality</li>
                        <li>Versatile Wardrobe Staple</li>
                        <li>Available in Various Sizes</li>
                        <li>Tailored Fit</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 py-8">
                <div className="bg-[#F9F1E7] rounded-lg p-6 flex justify-center items-center">
                    <img src={cloud2} alt="Business Card" className="max-w-full h-auto" />
                </div>
                <div className="bg-[#F9F1E7] rounded-lg p-6 flex justify-center items-center">
                    <img src={cloud} alt="Sticker Roll" className="max-w-full h-auto" />
                </div>
            </div>

            <div className="p-16">
                <h2 className="text-2xl font-bold mb-2">You might also like</h2>
                <p className="text-gray-500 mb-6">SIMILAR PRODUCTS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <div>
                                <div className='bg-gray-100'>
                                    <img src={product.image} alt={product.title} className="w-full h-auto mb-4 " />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                <div className='flex items-center gap-4'>
                                    <p className="font-semibold border px-3 py-1 rounded-full text-sm">{product.stock}</p>
                                    <p className="">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Description
>>>>>>> f605179fd6e205f5755f75517e6b79cdba43551b
