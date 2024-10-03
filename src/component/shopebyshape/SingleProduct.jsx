<<<<<<< HEAD
import React from 'react';
import product1 from '../../assets/oscar_image/product1.jpeg';
import product2 from '../../assets/oscar_image/product2.jpeg';
import product3 from '../../assets/oscar_image/product3.jpeg';
import product4 from '../../assets/oscar_image/product4.jpeg';
import product5 from '../../assets/oscar_image/product5.jpeg';
import Description from './Description';

const SingleProduct = () => {
    const product = {
        name: "Poster",
        price: "Rs. 250,000.00",
        rating: 4.5,
        reviewCount: 5,
        description: "Lorem ipsum dolor sit amet consectetur. Sed potenti mauris ipsum arcu. Elementum eget lectus integer proin sollicitudin pellentesque arcu dui. Tellus metus leo risus feugiat sed egestas in. Aliquet ut nec volutpat eu sed risus velit diam.",
        sizes: ["standard", "rounded corners", "special"],
        colors: ["bg-purple-600", "bg-yellow-500", "bg-black"],
        sku: "SS001",
        category: "Sofas",
        tags: ["Sofa", "Chair", "Home", "Shop"],
        mainImage: product1,
        thumbnails: [
            product2,
            product3,
            product4,
            product5
        ]
    };

    return (
        <div className="lg:p-24 md:p-12 p-6">
            <div className='flex md:flex-row flex-col items-center justify-between'>
                <div className='flex justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        {product.thumbnails.map((thumbnail, index) => (
                            <div className='bg-[#F9F1E7] md:p-2 p-1 rounded-lg'>
                                <img src={thumbnail} className='w-[75px]' alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className='bg-[#F9F1E7] md:p-4 p-2 rounded-lg'>
                        <img src={product.mainImage} className='w-[399px]' alt="Main product" />
                    </div>
                </div>
                <div>
                </div>

                <div className="md:w-1/2 flex flex-col md:p-0 p-4">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 text-xl mb-4">{product.price}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500">
                                {"★".repeat(Math.floor(product.rating))}
                                {product.rating % 1 !== 0 && "½"}
                                {"☆".repeat(5 - Math.ceil(product.rating))}
                            </span>
                            <span className="text-gray-600 ml-2">{product.reviewCount} Customer Review</span>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Size</h2>
                        <div className="flex gap-2 flex-wrap">
                            {product.sizes.map((size, index) => (
                                <button key={index} className="py-2 px-4 border rounded-lg hover:bg-gray-200">{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Color</h2>
                        <div className="flex space-x-2 flex-wrap">
                            {product.colors.map((color, index) => (
                                <button key={index} className={`w-8 h-8 rounded-full ${color} border-2 border-gray-200`}></button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <button className="py-2 px-4 border rounded-lg">-</button>
                        <span className="mx-2">1</span>
                        <button className="py-2 px-4 border rounded-lg">+</button>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add To Cart</button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Buy now</button>
                    </div>
                    <div className="text-gray-600 mb-4">
                        <p>SKU: {product.sku}</p>
                        <p>Category: {product.category}</p>
                        <p>Tags: {product.tags.join(", ")}</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Share</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
                    </div>
                </div>
            </div>
            <Description/>
        </div>
    );
}

export default SingleProduct;
=======
import React from 'react';
import product1 from '../../assets/oscar_image/product1.jpeg';
import product2 from '../../assets/oscar_image/product2.jpeg';
import product3 from '../../assets/oscar_image/product3.jpeg';
import product4 from '../../assets/oscar_image/product4.jpeg';
import product5 from '../../assets/oscar_image/product5.jpeg';
import Description from './Description';

const SingleProduct = () => {
    const product = {
        name: "Poster",
        price: "Rs. 250,000.00",
        rating: 4.5,
        reviewCount: 5,
        description: "Lorem ipsum dolor sit amet consectetur. Sed potenti mauris ipsum arcu. Elementum eget lectus integer proin sollicitudin pellentesque arcu dui. Tellus metus leo risus feugiat sed egestas in. Aliquet ut nec volutpat eu sed risus velit diam.",
        sizes: ["standard", "rounded corners", "special"],
        colors: ["bg-purple-600", "bg-yellow-500", "bg-black"],
        sku: "SS001",
        category: "Sofas",
        tags: ["Sofa", "Chair", "Home", "Shop"],
        mainImage: product1,
        thumbnails: [
            product2,
            product3,
            product4,
            product5
        ]
    };

    return (
        <div className="lg:p-24 md:p-12 p-6">
            <div className='flex md:flex-row flex-col items-center justify-between'>
                <div className='flex justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        {product.thumbnails.map((thumbnail, index) => (
                            <div className='bg-[#F9F1E7] md:p-2 p-1 rounded-lg'>
                                <img src={thumbnail} className='w-[75px]' alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className='bg-[#F9F1E7] md:p-4 p-2 rounded-lg'>
                        <img src={product.mainImage} className='w-[399px]' alt="Main product" />
                    </div>
                </div>
                <div>
                </div>

                <div className="md:w-1/2 flex flex-col md:p-0 p-4">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 text-xl mb-4">{product.price}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500">
                                {"★".repeat(Math.floor(product.rating))}
                                {product.rating % 1 !== 0 && "½"}
                                {"☆".repeat(5 - Math.ceil(product.rating))}
                            </span>
                            <span className="text-gray-600 ml-2">{product.reviewCount} Customer Review</span>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Size</h2>
                        <div className="flex gap-2 flex-wrap">
                            {product.sizes.map((size, index) => (
                                <button key={index} className="py-2 px-4 border rounded-lg hover:bg-gray-200">{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Color</h2>
                        <div className="flex space-x-2 flex-wrap">
                            {product.colors.map((color, index) => (
                                <button key={index} className={`w-8 h-8 rounded-full ${color} border-2 border-gray-200`}></button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <button className="py-2 px-4 border rounded-lg">-</button>
                        <span className="mx-2">1</span>
                        <button className="py-2 px-4 border rounded-lg">+</button>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add To Cart</button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Buy now</button>
                    </div>
                    <div className="text-gray-600 mb-4">
                        <p>SKU: {product.sku}</p>
                        <p>Category: {product.category}</p>
                        <p>Tags: {product.tags.join(", ")}</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Share</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
                    </div>
                </div>
            </div>
            <Description/>
        </div>
    );
}

export default SingleProduct;
>>>>>>> f605179fd6e205f5755f75517e6b79cdba43551b
