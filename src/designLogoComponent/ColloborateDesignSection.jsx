import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Designandlogocategory from './Designandlogocategory';



const CategorySlider = () => {

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
      { id: 1, label: 'Website Design', image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 2, label: 'Flyer Design', image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 3, label: 'Logo & Brand Identity Pack', image: 'https://images.pexels.com/photos/7661627/pexels-photo-7661627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 4, label: 'Marketing Materials', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 6, label: 'Essential Logo Package', image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 7, label: 'Business Card Design', image: 'https://images.pexels.com/photos/4466420/pexels-photo-4466420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
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
            <div className="text-center mb-10 mt-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 relative inline-block">
            Craft Your Perfect Design
            </h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Design logos, websites, and flyers that leave a lasting impression.
    </p>
        </div>
            <Slider {...settings} className="md:px-10 px-2 sm:px-4 gap-x-4 flex items-center justify-center">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-center justify-center rounded-full p-2 w-fit transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <div>
                            <img className="w-36 h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out transform hover:scale-100" src={item.image} alt={item.label} />
                        </div>
                        <p className="text-base sm:text-lg 2xl:text-xl mt-2 font-medium text-[#000000]">{item.label}</p>
                    </div>
                ))}
        </Slider>
        <Designandlogocategory/>
           
        </div>
        
    );
}

export default CategorySlider;
