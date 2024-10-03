import React from 'react'
import dummy from "../../assets/oscar_image/dummy.png"

const PersonalizeCard = () => {
    const items = [
        { src: dummy, label: "Postcard" },
        { src: dummy, label: "Flyer" },
        { src: dummy, label: "Brochure" },
        { src: dummy, label: "Ticket" },
        { src: dummy, label: "Tabletop" },
        { src: dummy, label: "Folder & Booklets" },
        { src: dummy, label: "Door Hangers" },
        { src: dummy, label: "Vouchers" },
    ];

    return (
        <div className="py-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Personalize Clothes, Bags & More</h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-12">From Daily Wear To Travel Bags, We've Got You Covered.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.src} alt={item.label} className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover" />
                        <p className="mt-4 text-center text-sm md:text-base font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default PersonalizeCard
