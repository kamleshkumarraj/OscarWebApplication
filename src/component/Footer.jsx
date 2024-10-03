// import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import icon1 from "../assets/oscar_image/fvector1.svg";
import icon2 from "../assets/oscar_image/fvector2.svg";
import icon3 from "../assets/oscar_image/fgpay.svg";
import icon4 from "../assets/oscar_image/fapp2.svg";

const Footer = () => {
  return (
    <div className="bg-[#524BAD] px-4 sm:px-8 lg:px-16 xl:px-36 w-full py-16 pb-4 ">
      <div className="flex flex-col md:flex-row gap-y-4 ">
        <div className="grid md:w-[80%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-xs sm:text-base leading-4 font-semibold">
              ONLINE SHOPPING
            </h1>
            <div>
              <ul className="text-white text-xs font-normal 2xl:text-sm flex flex-col gap-2">
                <li>
                  <Link to="#">CARDS</Link>
                </li>
                <li>
                  <Link to="#">PRINT ADVERTISING</Link>
                </li>
                <li>
                  <Link to="#">BANNERS & POSTERS</Link>
                </li>
                <li>
                  <Link to="#">STICKERS & PACKAGING</Link>
                </li>
                <li>
                  <Link to="#">HOME & PHOTO GIFTS</Link>
                </li>
                <li>
                  <Link to="#">Gift Cards</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-white text-xs sm:text-base leading-4 font-semibold">
                USEFUL LINKS
              </h1>
              <div>
                <ul className="text-white text-xs font-normal 2xl:text-sm flex flex-col gap-2">
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Site Map</Link>
                  </li>
                  <li>
                    <Link to="#">Corporate Information</Link>
                  </li>
                  <li>
                    <Link to="#">Whitehat</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex  flex-col gap-6">
            <h1 className="text-white text-xs sm:text-base leading-4 font-semibold">
              CUSTOMER POLICIES
            </h1>
            <div>
              <ul className="text-white text-xs font-normal 2xl:text-sm flex flex-col gap-2">
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">T&C</Link>
                </li>
                <li>
                  <Link to="#">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="#">Shipping</Link>
                </li>
                <li>
                  <Link to="#">Cancellation</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
                <li>
                  <Link to="">Privacy policy</Link>
                </li>
                <li>
                  <Link to="#">Grievance Officer</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-white">
            <h1 className="text-white text-xs sm:text-base leading-4 font-semibold uppercase">
              Experience Mobile App
            </h1>
            <div className="grid grid-cols-2 gap-x-2 items-center">
              <img className="w-full" src={icon3} alt="App Store" />
              <img className="w-full" src={icon4} alt="Google Play" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xs sm:text-base">KEEP IN TOUCH</h1>
              <div className="flex items-center gap-4">
                <span className="cursor-pointer hover:text-blue-600 text-white text-opacity-60">
                  <ImFacebook2 size={20} />
                </span>
                <span className="cursor-pointer hover:text-blue-600 text-white text-opacity-60">
                  <BsTwitter size={20} />
                </span>
                <span className="cursor-pointer hover:text-red-500 text-white text-opacity-60">
                  <BsYoutube size={25} />
                </span>
                <span className="cursor-pointer hover:text-red-400 text-white text-opacity-60">
                  <TiSocialInstagram size={25} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={icon1} alt="img1" />
              <div className="flex flex-col">
                <span className="text-xs text-white uppercase font-normal">
                  100% ORIGINAL guarantee
                </span>
                <p className="text-xs text-white">For All Products</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={icon2} alt="img2" />
              <div className="flex flex-col">
                <span className="text-xs text-white uppercase font-normal">
                  Return within 30 days
                </span>
                <p className="text-xs text-white">Return within 30days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white w-full md:w-[20%] space-y-2">
          <span>JOIN US</span>
          <p className="text-xs sm:text-sm uppercase">
            Subscribe to our newsletters
          </p>
          <div>
            <form action="" className="space-y-2 w-full">
              <input
                type="text"
                className="w-full focus:outline-none border px-3 py-2 text-xs bg-transparent"
                placeholder="Email Address"
              />
              <div>
                <button className="bg-[#FF7D04] hover:bg-orange-600 w-full p-2 text-xs">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="w-full  border-[1px] border-opacity-40 border-[#FFFFFF] mt-8"></div> */}
      <hr className="h-[1px] my-4 bg-gray-200 bg-opacity-35 border-0" />
      <div className="py-4">
        <p className="text-xs font-normal 2xl:text-sm text-center sm:text-start text-white">
          In case of any concern, <span className="font-bold">Contact Us</span>
        </p>
        
      </div>
    </div>
  );
};

export default Footer;
