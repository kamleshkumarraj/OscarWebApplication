import Bussinesscardslider from "../component/businesscard/Bussinesscardslider";
import img1 from "../assets/oscar_image/McDonagh.jpeg";
import img2 from "../assets/oscar_image/Corner.jpeg";
import img3 from "../assets/oscar_image/Almanova.png";
import HeroSection from "../component/businesscard/HeroSection";
import CardOption from "../component/businesscard/CardOption";
import Card from "../component/Card";
import BannerDetails from "../component/BannerDetails";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";

const Business = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetch or image loading)
    }, 1000);

    return () => clearTimeout(loadContent); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader />
      </div>
    ); // Render Loader component while loading
  }

  return (
    <div className="w-full">
      <HeroSection />
      <Bussinesscardslider />
      <CardOption />
      <div className="px-2 md:px-20 py-10">
        <div className="w-full py-6 gap-y-4 sm:gap-y-4 items-center text-center justify-center flex flex-col">
          <h1 className="text-sm sm:text-base 2xl:text-4xl font-semibold text-[#0d0d0d]">
            Featured Designs
          </h1>
        </div>
        <Card />
        <Card />
        <div className="mt-8 flex items-center justify-center">
          <button className="py-2 px-6 bg-[#FF7D04] uppercase text-xs text-white">
            View All
          </button>
        </div>
        <div>
          <BannerDetails
            banner_1={img1}
            banner_2={img2}
            banner_3={img3}
            text={"Stand out with a custom, budget-friendly design."}
            desc={
              "Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours."
            }
            btn={"Explore More"}
            color={"bg-[#FCF8F3]"}
            textColor={"text-[#3A3A3A]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
