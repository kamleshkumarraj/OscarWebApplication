import React, { useState } from 'react';
import bg from "../../assets/oscar_image/dummy.png";
import { BsUpload } from "react-icons/bs";
import Review from './Review';

const cardsData = [
    {
        id: 1,
        name: "Standard (3.5” x 2”)",
        price: "100 from $14.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 2,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 3,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 4,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 5,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 6,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 7,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 8,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 9,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 10,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 11,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 12,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 13,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 14,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
    {
        id: 15,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        colors: ['#4E69AE', '#000000', '#95C94A', '#C6211B']
    },
];

const Cards = ({ toggleModal }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 31;
    const pageCount = Math.ceil(cardsData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardsData.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className='bg-[#f1baa9] rounded-2xl flex flex-col gap-2 items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <button onClick={toggleModal} className='border border-dashed bg-[#FFFFFFC9] border-black p-5 rounded-full'>
                            <span><BsUpload size={35} className='text-orange-600' /></span>
                        </button>
                    </div>
                    <p className='text-center text-white'>Upload your own <br /> design</p>
                    <span className='text-sm text-gray-500'>100 from $14.99</span>
                </div>
                {currentCards.map((card) => (
                    <div key={card.id} className="bg-white rounded-lg">
                        <div className="bg-gray-300 p-4 flex items-center justify-center">
                            <div className="text-center">
                                <img src={bg} alt="bg" />
                            </div>
                        </div>
                        <div className='p-1'>
                            <div className="font-bold mb-2">{card.name}</div>
                            <div className="text-gray-500 mb-4">{card.price}</div>
                            <div className="flex space-x-2">
                                {card.colors.map((color, idx) => (
                                    <button key={idx} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-6 mt-8">
                <button
                    className={`border bg-[#F9F1E7] rounded-lg ${currentPage === 1 ? 'invisible' : ''}`}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <div className="flex space-x-4">
                    {Array.from({ length: pageCount }).map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-[#FF7D04]' : 'bg-[#F9F1E7]'}`}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    className="px-4 py-2 border bg-[#F9F1E7] rounded-lg"
                    onClick={handleNextPage}
                    disabled={currentPage === pageCount}
                >
                    Next
                </button>
            </div>
            <Review />
        </div>
    );
}

export default Cards;
