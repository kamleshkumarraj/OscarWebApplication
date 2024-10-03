import React from 'react';
import bluebat from "../../assets/oscar_image/bluebat.jpeg";
import bookmockup from "../../assets/oscar_image/bookmockup.png";
import peasy from "../../assets/oscar_image/peasy.png";
import free from "../../assets/oscar_image/free.png";
import invite from "../../assets/oscar_image/60.png";

const ExploreStyles = () => {
    return (
        <div className="flex flex-col items-center py-8 bg-gray-100">
            {/* Text Section */}
            <div className="text-center mb-8 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Exclusive Designs</h2>
                <p className="text-gray-600 max-w-2xl">
                    Discover a range of unique and stylish designs crafted for your business needs. Whether it’s branding, marketing, or events, our designs are tailored to make your message stand out.
                </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl p-4 md:p-8">
                <div className="col-span-2 md:col-span-2 flex justify-center">
                    <img 
                        src={bluebat} 
                        alt="bluebat" 
                        className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-2 md:col-span-3">
                    <img 
                        src={bookmockup} 
                        alt="bookmockup" 
                        className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                    <img 
                        src={peasy} 
                        alt="peasy" 
                        className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                    <img 
                        src={free} 
                        alt="free" 
                        className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                    <img 
                        src={invite} 
                        alt="invite" 
                        className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExploreStyles;
