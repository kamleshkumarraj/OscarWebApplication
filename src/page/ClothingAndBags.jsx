import Banner from "../component/ClothingAndBag/Banner";
import BestSeller from "../component/ClothingAndBag/BestSeller";
import CollectionSection from "../component/ClothingAndBag/CollectionSection";
import Discount from "../component/ClothingAndBag/Discount";
import HeroSection from "../component/ClothingAndBag/HeroSection";
import CategorySlider from "../component/ClothingAndBag/CategorySlider";
import Subscribe from "../component/ClothingAndBag/Subscribe";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";

function ClothingAndBags() {
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
    <div id="clothing-bag-pages">
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="personal-section">
        <CategorySlider />
      </div>
      <div id="best-seller-section">
        <BestSeller />
      </div>
      <div id="banner-section">
        <Banner />
      </div>
      <div id="collection-design">
        <CollectionSection />
      </div>
      <div id="discount-section">
        <Discount />
      </div>
      <div id="subscribe-section">
        <Subscribe />
      </div>
    </div>
  );
}

export default ClothingAndBags;
