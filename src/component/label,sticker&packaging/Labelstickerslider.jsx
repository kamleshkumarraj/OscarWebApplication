import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Labelstickerslider = () => {

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
      { id: 1, label: 'Custom Labels', image: "https://i.etsystatic.com/15132469/r/il/ce1bc5/2472403915/il_fullxfull.2472403915_q50z.jpg" },
      { id: 2, label: 'Stickers', image: 'https://degqkf7c4iqz7.cloudfront.net/kraftixon/images/mastertemplates/238/101_23116909_1.jpg' },
      { id: 3, label: 'Bottle Labels', image: 'https://i.etsystatic.com/14839152/r/il/8376d8/1636818322/il_fullxfull.1636818322_5wza.jpg' },
      { id: 5, label: 'Food Packaging Sticker', image: 'https://img.freepik.com/free-vector/hand-drawn-asian-food-labels-template_23-2150057617.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user' },
      { id: 6, label: 'Custom Pouches', image: 'https://cdn.pacdora.com/image-resize/650xauto_outside/render/20240514/104130720001.jpg' },
      
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
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">Stand Out on the Shelf with Tailored Stickers & Labels</h2><br />
    <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">Create a lasting impression with custom designs that speak volumes about your brand</p>
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

export default Labelstickerslider