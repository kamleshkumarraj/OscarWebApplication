import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import identity from "../../assets/oscar_image/identity.png";
import flyer from "../../assets/oscar_image/flyer.png";
import card2 from "../../assets/oscar_image/card2.jpeg";
import card3 from "../../assets/oscar_image/60.png";
import Brandidentity from "../../assets/oscar_image/Brandidentity.jpeg";
import card7 from "../../assets/oscar_image/card7.jpeg";

const Weddingslider = () => {

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%', right: '10px' }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%', left: '10px' }}
        onClick={onClick}
      />
    );
  };

  const items = [
    { id: 1, label: 'Save The Dates', img: identity },
    { id: 2, label: 'Invitation Suites', img: flyer },
    { id: 3, label: 'Parties & Bshower', img: card2 },
    { id: 4, label: 'Thankyou Card', img: card3 },
    { id: 5, label: 'Samples', img: Brandidentity },
    { id: 6, label: 'Ceremony & Reception Essential', img: card7 },
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
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="mt-10 overflow-hidden py-2 px-0 lg:px-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">
          Where Every Detail Tells Your Love Story
        </h2>
        <br />
        <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">
          From invitations to thank you notes, find the perfect card to complement your wedding vision
        </p>
      </div>

      <Slider {...settings} className="md:px-10 px-2 sm:px-4 gap-x-4 flex items-center justify-center">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center justify-center rounded-full p-2 w-fit transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="relative group">
              <img
                className="w-36 h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
                src={item.img}
                alt={item.label}
              />
            </div>
            <p className="text-base sm:text-lg 2xl:text-xl mt-2 font-medium text-[#000000]">{item.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Weddingslider;
