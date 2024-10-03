import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Signandbannerslider = () => {

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
      { id: 1, label: 'Vinyl Banners', image: "https://mckennapro.com/wp-content/uploads/2023/09/2023-New-Banner-Stand.png" },
      { id: 2, label: 'Yard Signs', image: 'https://m.media-amazon.com/images/I/81wac3Ub-zL.jpg' },
      { id: 3, label: 'Retractable Banners', image: 'https://img.freepik.com/free-vector/professional-roll-up-stand-banner-template-design_1017-17361.jpg' },
      { id: 5, label: 'Posters', image: 'https://img.freepik.com/free-psd/it-now-business-poster-template_23-2148644217.jpg' },
      { id: 6, label: 'Backlit Signs', image: 'https://unblast.com/wp-content/uploads/2018/08/Backlit-Sign-Text-Effect.jpg' },
      
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
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">Make a Bold Statement with Professional Banners and Signs</h2><br />
    <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">Our collection of Vinyl Banners, Yard Signs, and Retractable Banners is designed to capture attention</p>
</div>

   <Slider {...settings} className="md:px-10 px-2 sm:px-4 gap-x-4 flex items-center justify-center">
  {items.map((item) => (
    <div key={item.id} className="flex flex-col items-center text-center justify-center rounded-full p-2 w-fit transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="relative group">
    <img 
        className="w-36 h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl" 
        src={item.image} 
        alt={item.label} 
    />
   
</div>
      <p className="text-base sm:text-lg 2xl:text-xl mt-2 font-medium text-[#000000]">{item.label}</p>
    </div>
  ))}
</Slider>
  </div>  
  )
}

export default Signandbannerslider