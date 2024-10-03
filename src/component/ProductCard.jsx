import React from 'react'

const ProductCard = ({ imageSrc, title, description, price }) => {
    return (
        <div className="bg-[#F9F1E7] rounded-3xl overflow-hidden flex flex-col">
            <img src={imageSrc} alt={title} className=" w-full object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 capitalize">{title}</h3>
                <p className="text-xs">{description}</p>
                <p className="text-gray-800 font-semibold mt-2 text-xs">{price}</p>
                <div>
                    <button className="mt-4 bg-white text-gray-800 py-2 px-6 rounded-full text-xs hover:bg-gray-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard