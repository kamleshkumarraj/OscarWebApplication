import { useEffect, useState } from "react";
import BannerDetails from "../designLogoComponent/BannerDetails.jsx";
import ColloborateDesignSection from "../designLogoComponent/ColloborateDesignSection.jsx";
import DesignOptions from "../designLogoComponent/DesignOptions.jsx";

import HeroSection from "../designLogoComponent/HeroSection.jsx";
import Loader from "../component/Loader.jsx";

function DesignAndLogo() {
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
    <div id="design-logo-page" className="w-full">
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="colloborate-section">
        <ColloborateDesignSection />
      </div>
      {/* <div id="design-section">
        <DesignSection />
      </div> */}
      <div
        id="banner-details-section"
        className="2xl:px-[4rem] xl:p-[3rem] px-[2rem]"
      >
        <BannerDetails />
      </div>
      <div id="design-section">
        <DesignOptions />
      </div>
    </div>
  );
}

export default DesignAndLogo;
