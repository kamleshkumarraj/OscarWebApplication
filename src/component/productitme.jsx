import React from 'react'
import ProductCard from './ProductCard'

const Productitme = ({cardDetails,title,subtitle}) => {
  return (
    <div className="md:p-20 p-8">
                <div className="flex flex-col w-full pb-8 gap-4">
                    <h1 className="text-2xl md:text-4xl xl:text-[40px] 2xl:text-[48.97px] font-semibold">{title}</h1>
                    <p className="text-md md:text-[20px] 2xl:text-[26.45px]">{subtitle}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cardDetails && cardDetails.map((card, index) => (
                        <ProductCard
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                            price={card.price}
                        />
                    ))}
                </div>
            </div>
  )
}

export default Productitme