import React from 'react';
import dummy from "../../assets/oscar_image/dummy.png";

const AdCard = () => {
    const cardDetails = [
        {
            title: "Marketing Materials",
            img: dummy,
            lists: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Non qui est sed tempus enim sed sit lacus.",
                "Augue egestas purus enim scelerisque et nibh eu."
            ],
            btn: "shop now"
        },
        {
            title: "Business Stationery",
            img: dummy,
            lists: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Non qui est sed tempus enim sed sit lacus.",
                "Augue egestas purus enim scelerisque et nibh eu."
            ],
            btn: "shop now"
        },
        {
            title: "Office Supplies",
            img: dummy,
            lists: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Non qui est sed tempus enim sed sit lacus.",
                "Augue egestas purus enim scelerisque et nibh eu."
            ],
            btn: "shop now"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
            {cardDetails.map((item, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img src={item.img} alt={item.title} className="w-full object-cover h-48" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                        <ul className="list-disc list-inside text-xs text-gray-700 mb-4">
                            {item.lists.map((listItem, index) => (
                                <li key={index}>{listItem}</li>
                            ))}
                        </ul>
                        <button className="border border-black rounded-full py-2 px-6 hover:bg-gray-200 transition">
                            {item.btn}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdCard;
