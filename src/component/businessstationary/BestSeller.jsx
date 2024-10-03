import React from 'react';
import sixty from "../../assets/oscar_image/60.png"
import identity from "../../assets/oscar_image/identity.png"
import flyer from "../../assets/oscar_image/flyer.png"
import makeup from "../../assets/oscar_image/makeup.jpeg"

const products = [
  {
    id: 1,
    title: 'Business Card Design',
    turnaround: '24 Hours Turnaround',
    imageUrl: sixty,
  },
  {
    id: 2,
    title: 'Essential Logo Package',
    turnaround: '5 Days Turnaround',
    imageUrl: makeup,
  },
  {
    id: 3,
    title: 'Flyer Design',
    turnaround: '24 Hours Turnaround',
    imageUrl: flyer,
  },
  {
    id: 4,
    title: 'Logo & Brand Identity Pack',
    turnaround: '7 Days Turnaround',
    imageUrl: identity,
  },
];


const Bestseller = ({title,desc}) => {
  return (
    <section className="bg-white px-16">
      <div>
        <h2 className="text-5xl font-bold mb-8">{title}</h2>
        <p className="text-gray-600 mb-8 text-xl">{desc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center">
            <img src={product.imageUrl} alt={product.title} className="w-full object-cover rounded-lg" />
            <h3 className="text-lg font-medium mt-4">{product.title}</h3>
            <p className="text-gray-500">{product.turnaround}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestseller;
