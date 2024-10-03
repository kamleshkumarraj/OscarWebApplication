import React from 'react'
import { BiArrowFromBottom } from 'react-icons/bi';

const Filter = () => {
    const filterData = [
        {
            title: "Shape",
            item1: 'standard (3.5" x 2")',
            item2: 'square (2.5" x 2.5")'
        },
        {
            title: "Corners",
            item1: 'standard',
            item2: 'rounded'
        },
        {
            title: "Orientation",
            item1: 'Horizontal',
            item2: 'Vertical'
        },
        {
            title: "Use Case",
            item1: 'None',
            item2: 'Foil Accent',
            item3: 'Gold',
            item4: 'Silver'
        },
        {
            title: "Styles & Themes",
            item1: 'Foil Accent',
            item2: 'Gold',
            item3: 'Silver',
            item4: 'Embossed Gloss'
        },
        {
            title: "Use Logo / Photo Area",
            item1: 'Has Logo/Photo Area'
        },
        {
            title: "Finishes",
            item1: 'None',
            item2: 'Embossed Gloss',
            item3: 'Foil Accent',
            item4: 'Gold',
            item5: 'Silver'
        },
        {
            title: "Industry",
            link1: 'Agriculture & Farming',
            link2: 'Animals & Pet Care',
            link3: 'Arts, Crafts, and Design',
            link4: 'Automotive & Transportation',
            link5: 'Beauty & Spa',
            link6: 'Construction and Real Estate'
        },
    ];
    return (
        <div className="w-full lg:w-1/5 md:w-[25%] mb-8 md:mb-0">
            <div className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Make it yours</h2>
                <p className='text-xs mb-4'>Add your information to see it <br /> come to life on these designs!</p>
                <div className='mt-8'>
                    <button className='flex items-center gap-1 border w-full p-3 justify-center rounded-full border-black text-sm'><span><BiArrowFromBottom size={20} /></span>Add your logo</button>
                </div>
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-8 py-3 mb-4 mt-4 border border-black rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-8 py-3 mb-4 border border-black rounded-lg"
                />
                <div>
                    {filterData.map((item, i) => (
                        <div key={i}>
                            <h3 className="font-bold mb-4">{item.title}</h3>
                            <div>
                                {item.item1 && (
                                    <label className="flex items-center space-x-2 mb-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item.item1}</span>
                                    </label>
                                )}
                                {item.item2 && (
                                    <label className="flex items-center space-x-2 mb-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item.item2}</span>
                                    </label>
                                )}
                                {item.item3 && (
                                    <label className="flex items-center space-x-2 mb-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item.item3}</span>
                                    </label>
                                )}
                                {item.item4 && (
                                    <label className="flex items-center space-x-2 mb-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item.item4}</span>
                                    </label>
                                )}
                                {item.item5 && (
                                    <label className="flex items-center space-x-2 mb-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item.item5}</span>
                                    </label>
                                )}
                                <div className="flex flex-col gap-2">
                                    <span>{item.link1}</span>
                                    <span>{item.link2}</span>
                                    <span>{item.link3}</span>
                                    <span>{item.link4}</span>
                                    <span>{item.link5}</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
