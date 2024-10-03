import React from 'react'
import bg from '../assets/oscar_image/dummy.png';
import { Link } from 'react-router-dom';

const Card = ({color,rounded,background,gap}) => {
  const cardsData = [
    {
        id: 1,
        name: "Standard (3.5” x 2”)",
        price: "100 from $14.99",
        url : 'http://localhost:8000/Business-1.png'
    },
    {
        id: 2,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-3.png'
    },
    {
        id: 3,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-5.png'
    },
    {
        id: 4,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-6.png'
    },
    {
        id: 5,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-8.png'
    },
    {
        id: 6,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-11.png'
    },
    {
        id: 7,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-12.png'
    },
    {
        id: 8,
        name: "standard (3.5’’ x 2’’)",
        price: "100 from $19.99",
        url : 'http://localhost:8000/Business-15.png'
    },
  ]
  return (
    <div  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-${gap}`}>
      {cardsData.map((item,idx) => (
        <Link to={'/editor'}
          key={idx} 
          state={item.url}
          className={`p-4 ${color} ${rounded} transition-transform duration-300 hover:shadow-lg hover:scale-105`}
        >
          <div className={`flex justify-center mb-4 bg-gray-200 md:p-4 lg:p-0 ${background}`}>
            <img src={item.url} alt="Standard" className="w-full" />
          </div>
          <div>
            <p className="text-sm font-bold">{item.name}</p>
            <p className="text-gray-500">{item.price}</p>
            <div className="flex mt-2 space-x-2">
              <button className="w-4 h-4 bg-[#4E69AE] rounded-full"></button>
              <button className="w-4 h-4 bg-[#000000] rounded-full"></button>
              <button className="w-4 h-4 bg-[#95C94A] rounded-full"></button>
              <button className="w-4 h-4 bg-[#C6211B] rounded-full"></button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card
