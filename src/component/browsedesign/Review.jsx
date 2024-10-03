import React from 'react'

const Review = () => {
    const reviewData = [
        {
            title: "Emily Davis",
            duration: "1 Week ago",
            desc: "This company always goes above and beyond to satisfy their customers."
        },
        {
            title: "Daniel Smith",
            duration: "2 Week ago",
            desc: "I can't believe how affordable and high-quality this item is!"
        },
        {
            title: "Benjamin Clark",
            duration: "12 april",
            desc: "These guys know their stuff, and it shows in their products."
        },
    ]
    return (
        <div className="container mx-auto max-w-4xl py-16">
            <h1 className="text-3xl font-bold mb-4">Standard Business Cards: Take Your Inspiration To Reality.</h1>
            <p className="text-gray-700 mb-6">
                Looking for a simple way to make custom standard business cards? Vistaprint is here to help. We have a variety of <br /> customizable standard business cards templates, with options to add images, logos, and more. Working with your own <br /> design? Our upload experience lets you focus on the product choices that are most important to you. We can even <br /> pair you with one of our designers to create a signature look for your standard business cards. Whatever your need, <br /> we’ll work with you until your custom creation looks just right. Ready to get started? Terrific – so are we.
            </p>
            <div className="mb-4 space-y-2">
                <h2 className="text-md font-bold">Reviews</h2>
                <div className="text-2xl text-gray-700 font-bold">4.2 <span className='text-sm font-semibold'>— 54 Reviews</span></div>
                <div className='py-4'>
                    <button className="bg-black text-white px-4 py-2 text-sm rounded-lg">Write a review</button>
                </div>
            </div>
            <div className="mb-4 text-end max-w-xl">
                <button className="text-gray-500 text-xs">SORT BY</button>
            </div>
            <div className="border-t border-gray-300 my-4 py-4 w-[65%]"></div>
            <div className="space-y-6 max-w-xl">
                {
                    reviewData.map((item, i) => (
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-lg font-semibold text-blue-600">
                                ED
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-bold">{item.title}</p>
                                        <p className='text-gray-400'>{item.duration}</p>
                                    </div>
                                    <div className="flex">
                                        <div className="text-yellow-400">★</div>
                                        <div className="text-yellow-400">★</div>
                                        <div className="text-yellow-400">★</div>
                                        <div className="text-yellow-400">★</div>
                                        <div className="text-gray-400">★</div>
                                    </div>
                                </div>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
                <div className='flex items-end justify-end'>
                    <button className="bg-black text-white px-4 py-2 mt-8 rounded-lg">Load more reviews</button>
                </div>
            </div>
        </div>
    )
}

export default Review
