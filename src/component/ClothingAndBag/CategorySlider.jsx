import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/oscar_image/b-tshirt.jpeg';
import Category from './Category';

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
      { id: 1, label: 'Polo Shirts', image: "https://media.istockphoto.com/id/1266994981/photo/business-owner-checking-the-quality-after-she-finished-the-urban-print-on-a-cotton-t-shirt.jpg?s=1024x1024&w=is&k=20&c=9jAcK3KGCtXGudy14zwtzAprNzTv4Zb_2c6KBBTBAfA=" },
      { id: 2, label: 'T-Shirts', image: 'https://img.freepik.com/premium-photo/polyprint-dtg-tshirt-printing-machine-generative-by-ai_893571-9014.jpg?w=996' },
      { id: 3, label: 'Sweatshirts', image: 'https://images.pexels.com/photos/15389454/pexels-photo-15389454/free-photo-of-men-and-women-in-hoodies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 4, label: 'Bags', image: 'https://images.pexels.com/photos/7763939/pexels-photo-7763939.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
      { id: 6, label: 'Activewear', image: 'https://images.pexels.com/photos/26561318/pexels-photo-26561318/free-photo-of-back-view-of-woman-wearing-black-shirt-with-writings-on-back-sitting-in-front-of-white-modern-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 7, label: 'Dress Shirts', image: 'https://images.pexels.com/photos/7061737/pexels-photo-7061737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
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
            Customize Your Apparel
            </h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Create a unique look by adding your personal touch to your favorite items.
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
            <Category/>
        </div>
        
    );
}

export default CategorySlider;
