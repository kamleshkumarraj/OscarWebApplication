import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import { useCart } from "../../contextAPI/CartContext"; // Import the useCart hook
import wed1 from "../../assets/Home/HomeAndGift/shopallwedding/wed1.jpg";
import wed2 from "../../assets/Home/HomeAndGift/shopallwedding/wed2.jpg";
import wed3 from "../../assets/Home/HomeAndGift/shopallwedding/wed3.jpg";
import wed4 from "../../assets/Home/HomeAndGift/shopallwedding/wed4.jpg";
import wed5 from "../../assets/Home/HomeAndGift/shopallwedding/wed5.jpg";
import wed6 from "../../assets/Home/HomeAndGift/shopallwedding/wed6.jpg";
import Loader from "../Loader";

const Homeandgiftslider = () => {
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
          right: "10px",
        }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
          left: "10px",
        }}
        onClick={onClick}
      />
    );
  };

  const items = [
    { id: 1, label: "Customized cups", img: wed1, price: 20 },
    { id: 2, label: "Invitation Suites", img: wed2, price: 15 },
    { id: 3, label: "Parties & Bshower", img: wed3, price: 10 },
    { id: 4, label: "Samples", img: wed4, price: 5 },
    { id: 5, label: "Ceremony & Reception Essential", img: wed5, price: 30 },
    { id: 6, label: "Gifts", img: wed6, price: 25 },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });

  const slidesToShow = isMobile ? 2 : isTablet ? 4 : 6;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: isLaptopOrDesktop ? <CustomNextArrow /> : null,
    prevArrow: isLaptopOrDesktop ? <CustomPrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.label} added to cart!`); // Show success message
  };

  return (
    <div className="mt-10 overflow-hidden py-2 px-0 lg:px-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">
          Transform Your Special Moments with Our Premium Gifts!
        </h2>
        <br />
        <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">
          Explore our elegant home and wedding gifts, crafted to make your
          celebrations truly special
        </p>
      </div>

      <Slider
        {...settings}
        className="md:px-10 px-2 sm:px-4 gap-x-4 flex items-center justify-center"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center justify-center rounded-full p-2 w-fit transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative group">
              <img
                className="w-36 h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
                src={item.img}
                alt={item.label}
              />
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-yellow-500 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
            <p className="text-base sm:text-lg 2xl:text-xl mt-2 font-medium text-[#000000]">
              {item.label}
            </p>
            <p className="text-sm text-gray-600">${item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homeandgiftslider;
