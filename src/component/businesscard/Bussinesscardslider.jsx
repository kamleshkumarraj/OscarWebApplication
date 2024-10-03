import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/oscar_image/b-tshirt.jpeg'
const Bussinesscardslider = () => {

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
      { id: 1, label: 'Visiting Cards', image: "https://img.freepik.com/free-vector/clean-style-modern-business-card-template_1017-30352.jpg?size=626&ext=jpg&uid=R110348825&ga=GA1.1.128590668.1722247876&semt=ais_hybrid" },
      { id: 2, label: 'Digital Visiting Cards', image: 'https://img.freepik.com/free-vector/abstract-network-lines-low-poly-business-card-template_1017-31545.jpg?uid=R110348825&ga=GA1.1.128590668.1722247876&semt=ais_hybrid' },
      { id: 3, label: 'Premium Business Card', image: 'https://img.freepik.com/free-vector/black-gold-luxury-vip-business-card-template_1017-21978.jpg?uid=R110348825&ga=GA1.1.128590668.1722247876&semt=ais_hybrid' },
      { id: 5, label: 'Invitation Card', image: 'https://img.freepik.com/free-psd/wedding-invitation-greeting-cards-elegant-vintage-style_1340-49454.jpg?uid=R110348825&ga=GA1.1.128590668.1722247876&semt=ais_hybrid' },
      { id: 6, label: 'Standard Business Card', image: 'https://img.freepik.com/free-psd/wedding-invitation-greeting-cards-elegant-vintage-style_1340-49454.jpg?uid=R110348825&ga=GA1.1.128590668.1722247876&semt=ais_hybrid' },
      
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
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">The Perfect Introduction</h2><br />
    <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">Browse our sophisticated collection of business and invitation cards designed to impress from the start</p>
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

export default Bussinesscardslider