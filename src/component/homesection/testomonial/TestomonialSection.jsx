import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import TestCard from '../TestCard';
import { useEffect, useState } from 'react';

function TestimonialSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>
      <div className="text-center">
        <h1 className="text-lg dm_sansFont font-normal sm:text-3xl 2xl:text-[39px] lg:leading-[3.207rem] tracking-[-.09866] text-[#282828] leading-[4.5rem]">Testimonials</h1>
        <p className="font-normal text-sm sm:text-base 2xl:text-lg text-[#000000] lg:p-0">Our customers speak for us</p>
      </div>

      <Swiper 
        slidesPerView={windowWidth <= 800 ? 1 : windowWidth <= 1400 ? 2 : 3} 
        spaceBetween={30} 
        modules={[Navigation]} 
        className="px-6"
        
      >
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
        <SwiperSlide><TestCard /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialSection;
