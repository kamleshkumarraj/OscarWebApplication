import HomeAndGiftBanner from "../../component/HomeAndGifts/Banner";
import BDB1 from "../../assets/Home/HomeAndGift/BDB/BDB1.jpg";
import BDB2 from "../../assets/Home/HomeAndGift/BDB/BDB2.jpg";
import BDB3 from "../../assets/Home/HomeAndGift/BDB/BDB3.jpg";
import BDB4 from "../../assets/Home/HomeAndGift/BDB/BDB4.jpg";

import designer1 from "../../assets/Home/HomeAndGift/designer1.jpg";

import Popular1 from "../../assets/Home/HomeAndGift/popular/Popular1.jpg";
import Popular2 from "../../assets/Home/HomeAndGift/popular/Popular2.jpg";
import Popular3 from "../../assets/Home/HomeAndGift/popular/Popular3.jpg";
import Popular4 from "../../assets/Home/HomeAndGift/popular/Popular4.jpg";
import Popular5 from "../../assets/Home/HomeAndGift/popular/Popular5.jpg";

import Occasion1 from "../../assets/Home/HomeAndGift/Occasion/Occasion1.jpg";
import Occasion2 from "../../assets/Home/HomeAndGift/Occasion/Occasion2.jpg";
import Occasion3 from "../../assets/Home/HomeAndGift/Occasion/Occasion3.jpg";
import Occasion4 from "../../assets/Home/HomeAndGift/Occasion/Occasion4.jpg";

import Discount1 from "../../assets/Home/HomeAndGift/Discount/Discount1.jpg";
import Discount2 from "../../assets/Home/HomeAndGift/Discount/Discount2.jpg";
import Discount3 from "../../assets/Home/HomeAndGift/Discount/Discount3.jpg";
import Discount4 from "../../assets/Home/HomeAndGift/Discount/Discount4.jpg";
import Discount5 from "../../assets/Home/HomeAndGift/Discount/Discount5.jpg";
import Discount6 from "../../assets/Home/HomeAndGift/Discount/Discount6.jpg";
import Homeandgiftslider from "../../component/HomeAndGifts/Homeandgiftslider";
import Homeandgiftcategory from "../../component/HomeAndGifts/Homeandgiftcategory";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader";

const HomeAndGift = () => {
  const BigDayBestSeller = [
    {
      image: BDB1,
      title: "Business Card Design",
      description: "24 hours turnaround",
    },
    {
      image: BDB2,
      title: "Essential logo package",
      description: "5 days turnaround",
    },
    {
      image: BDB3,
      title: "Flyer Design",
      description: "24 hours turnaround",
    },
  ];
  const Popular = [
    {
      image: Popular1,
      title: "T-shirts",
    },
    {
      image: Popular2,
      title: "Business Cards",
    },
    {
      image: Popular3,
      title: "Postcards",
    },
    {
      image: Popular4,
      title: "Hats",
    },
    {
      image: Popular5,
      title: "Stickers",
    },
    {
      image: Popular1,
      title: "Stickers",
    },
    {
      image: Popular2,
      title: "Stickers",
    },
    {
      image: Popular3,
      title: "Stickers",
    },
  ];
  const Occasion = [
    {
      image: Occasion1,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion2,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion3,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion4,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion1,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion2,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion3,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion4,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion1,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion2,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion3,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
    {
      image: Occasion4,
      title: "standard (3.5’’ x 2’’)",
      description: "100 from $14.99",
    },
  ];

  const colors = [
    { name: "Color 1", code: "#4e69ae" },
    { name: "Color 2", code: "#000000" },
    { name: "Color 3", code: "#95c94a" },
    { name: "Color 4", code: "#c6211b" },
  ];

  const Discount = [
    {
      image: Discount1,
    },
    {
      image: Discount2,
    },
    {
      image: Discount3,
    },
    {
      image: Discount4,
    },
    {
      image: Discount5,
    },
    {
      image: Discount6,
    },
    {
      image: Discount5,
    },
    {
      image: Discount4,
    },
    {
      image: Discount3,
    },
    {
      image: Discount1,
    },
  ];
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
    <>
      <HomeAndGiftBanner />
      <Homeandgiftslider />
      <Homeandgiftcategory />
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="w-full flex flex-col space-y-10">
          <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="flex flex-col w-full max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-8">
                <h1 className="text-5xl font-semibold text-gray-800 capitalize">
                  Big-Day Bestsellers
                </h1>
                <p className="text-xl text-gray-600">
                  It’s official – brides and grooms-to-be are extra smitten with
                  these top picks.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  {BigDayBestSeller.map((shop, index) => (
                    <div
                      className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg"
                      key={index}
                    >
                      <img
                        src={shop.image}
                        alt={shop.title}
                        className="w-80 h-80 object-cover rounded-lg"
                      />
                      <p className="capitalize font-medium text-xl text-gray-800">
                        {shop.title}
                      </p>
                      <span className="text-base text-gray-600">
                        {shop.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#524bad] py-12 px-4 rounded-lg flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="text-center md:text-left md:w-1/3 space-y-6">
                  <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
                    Stand out with a custom, budget-friendly design.
                  </h1>
                  <p className="text-white text-base">
                    Give your business card a professional finish. Fill out a
                    quick brief to receive concepts from our in-house designer
                    within 24 hours.
                  </p>
                  <button className="px-6 py-3 text-white bg-[#ff7d04] rounded-lg shadow-md hover:bg-[#e56b00] transition duration-300">
                    Work With Designer
                  </button>
                </div>
                <div className="md:w-2/3">
                  <img
                    src={designer1}
                    alt="Designer"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Popular Product */}

          <div className="flex w-full justify-center items-center p-8 bg-gray-50">
            <div className="flex flex-col w-full max-w-7xl space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                    Oscarprint Picks
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-gray-500">
                    Popular Product. Unbeatable Value.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="px-6 py-3 md:px-9 md:py-4 text-lg rounded-md bg-[#fb5711] text-white shadow-lg hover:bg-[#e34d03] transition duration-300">
                    See All
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-8 justify-center">
                  {Popular.map((shop, index) => (
                    <div
                      className="flex flex-col space-y-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                      key={index}
                    >
                      <img
                        src={shop.image}
                        alt={shop.title}
                        className="w-full h-[250px] object-cover rounded-md mb-3"
                      />
                      <div className="flex justify-between items-center">
                        <p className="capitalize font-medium text-lg text-gray-800">
                          {shop.title}
                        </p>
                        <span className="text-gray-600">
                          <svg
                            width="53"
                            height="10"
                            viewBox="0 0 53 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M52.7241 5.37125C52.955 5.14033 52.955 4.76592 52.7241 4.535L48.9609 0.771842C48.73 0.540916 48.3556 0.540916 48.1246 0.771842C47.8937 1.00277 47.8937 1.37717 48.1246 1.6081L51.4697 4.95312L48.1246 8.29815C47.8937 8.52908 47.8937 8.90348 48.1246 9.13441C48.3556 9.36533 48.73 9.36533 48.9609 9.13441L52.7241 5.37125ZM0.269531 5.54445H52.3059V4.3618H0.269531V5.54445Z"
                              fill="#271E32"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Custom Calender */}
          <div className="flex w-full justify-center items-center">
            <div className="flex w-full max-w-6xl flex-col space-y-16">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Custom Calendars for Every Space and Occasion
                </h1>
                <p className="text-lg md:text-2xl text-gray-600">
                  From photo-centric options for the home to single-sheets for
                  the office, there really is a calendar for everyone.
                </p>
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {Occasion.map((shop, index) => (
                    <div
                      className="flex flex-col space-y-2 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      key={index}
                    >
                      <img
                        src={shop.image}
                        alt={shop.title}
                        className="w-full h-[200px] object-cover rounded-lg mb-4"
                      />
                      <p className="capitalize font-semibold text-xl text-gray-800">
                        {shop.title}
                      </p>
                      <p className="capitalize text-base text-gray-600">
                        {shop.description}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        {colors.map((color) => (
                          <div
                            key={color.name}
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.code }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <button className="px-6 py-3 text-lg font-semibold bg-[#ff7d04] text-white rounded-lg shadow-md hover:bg-[#e66701] transition-colors duration-300">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* discount Insta */}

          <div className="flex justify-center items-center py-12 bg-gray-100">
            <div className="flex flex-col space-y-12 max-w-6xl w-full">
              <h1 className="font-semibold text-4xl md:text-5xl text-center text-gray-800">
                Follow products and discounts on Instagram
              </h1>
              <div className="flex flex-wrap w-full gap-8 justify-center">
                {Discount.map((shop, index) => (
                  <div
                    className="flex flex-col space-y-4 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                    key={index}
                  >
                    <img
                      src={shop.image}
                      alt={`Discount ${index}`}
                      className="w-full h-[180px] object-cover rounded-t-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-12 bg-white">
            <div className="flex flex-col space-y-8 max-w-4xl w-full">
              <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800">
                Or subscribe to the newsletter
              </h1>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-full flex flex-col space-y-2">
                  <input
                    type="text"
                    placeholder="Email Address..."
                    className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff7d04] transition-colors duration-300"
                  />
                </div>
                <button className="px-6 py-3 bg-[#ff7d04] text-white font-medium rounded-md shadow-md hover:bg-[#e66701] transition-colors duration-300">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAndGift;
