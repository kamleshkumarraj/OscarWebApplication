import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/oscar_image/b-tshirt.jpeg'
const Postcardslider = () => {

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
      { id: 1, label: 'Standard Postcards', image: "https://premiumcards.net/ink/wp-content/uploads/2015/08/standard-postcards-glossy-or-matte-mockup.jpg" },
      { id: 2, label: 'Rounded Corners Postcards', image: 'https://image.peartree.com/products/PTG/39098VSDPC-naturally-in-love-save-the-date-postcards_900x900.jpg' },
      { id: 3, label: 'Special Finishes Postcards', image: 'https://qcopy.ca/wp-content/uploads/2023/11/silver-foil-postcard.jpg' },
      { id: 5, label: 'Catalogs & Booklets', image: 'https://publicationimageprinters.com/wp-content/uploads/2019/08/Catalog.jpg' },
      { id: 6, label: 'Direct Mail Postcards', image: 'https://cdn.dribbble.com/users/127876/screenshots/3711348/grow_dribbble.jpg?resize=400x300&vertical=center' },
      
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
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-400 pb-2 mb-4 inline-block">Quality Postcards & Print Ads That Make You Stand Out</h2><br />
    <p className="text-lg text-gray-600 border-b border-yellow-400 pb-2 mb-4 inline-block">Professionally designed and printed to grab attention and deliver your message effectively</p>
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

export default Postcardslider