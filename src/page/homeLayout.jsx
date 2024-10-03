// import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../component/homesection/HeroSection";
// import Productsection from "../component/homesection/Productsection"; category slider
import CardDesign from "../component/homesection/CardDesign";
import ProductTab from "../component/homesection/ProductTab";
import OscarProduct from "../component/homesection/Section_1";
import TestomonialSection from "../component/homesection/testomonial/TestomonialSection";
import PropTypes from "prop-types";
import PackagingSolution from "../component/browsedesign/PackagingSolution";
import { Link } from "react-router-dom";
import Toolsdetails from "../component/homesection/Toolsdetails";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";

const Home = () => {
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
  const services = [
    {
      title: "Packaging Solutions",
      items: [
        "Custom Boxes",
        "Custom Packaging",
        "Labels and Stickers",
        "Tags and Hangings",
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/business-owner-ready-ship-her-customers-orders-close-up-female-hands-putting-tape-big-package-with-products_662251-1920.jpg?w=996&t=st=1723661372~exp=1723661972~hmac=8c964b26c9246ca84334ba7a4b55675ec8bf902a14850730f162032507b89bfb",
    },
    {
      title: "Promotional Items",
      items: [
        "Pens and Stationery",
        "Mugs and Drinkware",
        "Keychains and Accessories",
        "Custom Apparel",
      ],
      imageUrl:
        "https://img.freepik.com/free-vector/advertising-corporate-identity-with-gold-palm-leaves_1284-10315.jpg?t=st=1723661498~exp=1723665098~hmac=657220f28b76b541c160a693bb6b9afb22419d2843ab6addbbbb5252019a51d9&w=740",
    },
    {
      title: "Marketing Materials",
      items: [
        "Brochures and Flyers",
        "Postcards and Mailers",
        "Door Hangers",
        "Catalogs and Booklets",
      ],
      imageUrl:
        "https://img.freepik.com/free-vector/old-vintage-style-background-design_1375-402.jpg?t=st=1723661622~exp=1723665222~hmac=503c6747153910f822ca4ba7271c5be39143996ca414b332d3a5c7de76ae7619&w=740",
    },
    {
      title: "Banners and Signage",
      items: ["Vinyl Banners", "Retractable Banners", "Posters", "Yard Signs"],
      imageUrl:
        "https://img.freepik.com/free-vector/professional-business-roll-up-banner-design_1017-36415.jpg?t=st=1723662024~exp=1723665624~hmac=ebf27d54b92af24c2bbd3136b2c81e178f0554edb4e2ecfd8a1df55b39e6557e&w=740",
    },
    {
      title: "Business Essentials",
      items: [
        "Business Cards",
        "Letterheads and Envelopes",
        "Notepads",
        "Presentation Folders",
      ],
      imageUrl:
        "https://img.freepik.com/free-vector/creative-business-stationery-collateral-set-red-theme_1017-14967.jpg?t=st=1723662128~exp=1723665728~hmac=dcabe09e5d56d6988f03dd0d0a2be60c1415ad48f6da5a323b4dd3ec488b1894&w=900",
    },
    {
      title: "Special Occasions",
      items: [
        "Invitations and Greeting Cards",
        "Event Tickets",
        "Announcements",
      ],
      imageUrl:
        "https://img.freepik.com/free-vector/christmas-stationery-collection_23-2148759818.jpg?t=st=1723662342~exp=1723665942~hmac=34a96e38bf7ad8b6802c3e463fa9b457216bd63871f4842ea86a510cb9d99716&w=996",
    },
  ];

  return (
    <div className="w-full">
      <HeroSection />

      <CardDesign titletext="OscarPrint Picks: Top products for building your brand" />
      <ProductTab />

      <div className="min-h-screen bg-gray-100 px-2 md:px-20 py-10">
        <div className="w-full py-6 gap-y-4 sm:gap-y-4 items-center text-center justify-center flex flex-col">
          <p className="text-4xl sm:text-base 2xl:text-xl font-semibold">
            Our Services
          </p>
          <p className=" text-base dm_sansFont  sm:text-3xl 2xl:text-[54px] w-full md:w-3/4  lg:w-[62%] sm:leading-8  md:leading-[52px]  font-semibold text-center">
            Your One-Stop Printing Solution - Explore Our Services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-28 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              items={service.items}
              imageUrl={service.imageUrl}
              details={service.details}
            />
          ))}
        </div>
      </div>

      {/* <CardDesign titletext="Tools to help build your business" /> */}
      <Toolsdetails />
      <div className="w-full px-2 sm:px-20 bg-[#524BAD]">
        <OscarProduct />
      </div>
      <div className="px-2 py-6 sm:py-10 sm:px-20">
        <TestomonialSection />
      </div>
    </div>
  );
};

export default Home;

const Card = ({ title, items, imageUrl }) => {
  return (
    <div className="bg-[#524BAD] p-6 text-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-white w-full h-48 rounded-md relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <button className="mt-4 bg-orange-500 text-xs sm:text-sm 2xl:text-base font-bold absolute bottom-4 right-4 text-white py-2.5 px-6 rounded hover:bg-orange-600">
          Details
        </button>
      </div>
      <div className="p-4">
        <h2 className="sm:text-xl 2xl:text-2xl text-base font-bold mb-2">
          {title}
        </h2>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li
              className="text-xs sm:text-sm 2xl:text-base font-medium"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  details: PropTypes.string,
};
