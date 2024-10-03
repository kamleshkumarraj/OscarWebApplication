import { useContext, useEffect, useState } from "react";
// import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { LuFolderClosed } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";

import logo from "../assets/oscar_image/header-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

import { CartContext } from "../contextAPI/CartContext";

import { AuthContext } from "../contextAPI/AuthContext";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [subMenu, setSubMenu] = useState([]);
  const [showLogOut, setShowLogOut] = useState(false);
  const { cartItems } = useContext(CartContext);

  // const [email, setEmail] = useState(null);
  const { email, logout } = useContext(AuthContext);
  console.log(email);

  useEffect(() => {
    setShowLogOut(!!email);
  }, [email]);

  const menu = [
    {
      title: "BUSINESS CARDS",
      link: "/business-card",
    },
    {
      title: "POSTCARDS & PRINT ADVERTISINGS",
      link: "/postcards-flyer",
    },
    {
      title: "SIGNS, BANNERS & POSTERS",
      link: "/sign-banner",
    },
    {
      title: "LABELS, STICKERS & PACKAGING",
      link: "/label-sticker",
    },
    {
      title: "HOME & PHOTO GIFTS",
      link: "home-gifts",
    },
    {
      title: "WEDDING",
      link: "/wedding",
    },
    {
      title: "CLOTHING & BAGS",
      link: "/clothing-bags",
    },
    {
      title: "DESIGN & LOGO",
      link: "/design-logo",
    },
  ];
  const menuItems = [
    {
      heading: "Cards",
      submenus: [
        {
          subheading: "Visiting Cards",
          items: [
            {
              title: "Standard Visiting Cards",
              link: "/standard-visiting-cards",
            },
            {
              title: "Classic Visiting Cards",
              link: "/classic-visiting-cards",
            },
            {
              title: "Rounded Corner Visiting Cards",
              link: "/rounded-corner-visiting-cards",
            },
            { title: "Square Visiting Cards", link: "/square-visiting-cards" },
          ],
        },
        {
          subheading: "Digital Visiting Cards",
          items: [
            {
              title: "QR Code Visiting Cards",
              link: "/qr-code-visiting-cards",
            },
            { title: "NFC Visiting Cards", link: "/nfc-visiting-cards" },
          ],
        },
        {
          subheading: "Brilliant Finishes",
          items: [
            {
              title: "Spot UV Visiting Cards",
              link: "/spot-uv-visiting-cards",
            },
            {
              title: "Raised Foil Visiting Cards",
              link: "/raised-foil-visiting-cards",
            },
          ],
        },
        {
          subheading: "Standard Papers",
          items: [
            { title: "Glossy Visiting Cards", link: "/glossy-visiting-cards" },
            { title: "Matte Visiting Cards", link: "/matte-visiting-cards" },
          ],
        },
        {
          subheading: "Specialty Cards",
          items: [
            {
              title: "Magnetic Visiting Cards",
              link: "/magnetic-visiting-cards",
            },
            {
              title: "Transparent Visiting Cards",
              link: "/transparent-visiting-cards",
            },
          ],
        },
        {
          subheading: "Premium Papers",
          items: [
            {
              title: "Premium Plus Visiting Cards",
              link: "/premium-plus-visiting-cards",
            },
            {
              title: "Non-Tearable Visiting Cards",
              link: "/non-tearable-visiting-cards",
            },
            {
              title: "Velvet Touch Visiting Cards",
              link: "/velvet-touch-visiting-cards",
            },
          ],
        },
        {
          subheading: "Design and Logo",
          items: [
            { title: "Design Services", link: "/design-services" },
            { title: "Logo Maker", link: "/logo-maker" },
            { title: "QR Code Generator", link: "/qr-code-generator" },
          ],
        },
        {
          subheading: "Visiting Cards Holder",
          items: [
            {
              title: "Engraved Metal Visiting Card Holders",
              link: "/engraved-metal-visiting-card-holders",
            },
            {
              title: "Metal Visiting Card Holder",
              link: "/metal-visiting-card-holder",
            },
            {
              title: "Leatherite Visiting Cards Holder",
              link: "/leatherite-visiting-cards-holder",
            },
          ],
        },
      ],
    },
    {
      heading: "POSTCARDS & PRINT ADVERTISING",
      submenus: [
        {
          subheading: "Standard",
          items: [
            { title: "Classic Postcards", link: "/classic-postcards" },
            { title: "Flyers & Brochures", link: "/flyers-brochures" },
            { title: "Business Cards", link: "/business-cards" },
            { title: "Catalogs & Booklets", link: "/catalogs-booklets" },
            { title: "Posters & Banners", link: "/posters-banners" },
          ],
        },
        {
          subheading: "Rounded Corners",
          items: [
            {
              title: "Rounded Corner Postcards",
              link: "/rounded-corner-postcards",
            },
            {
              title: "Business Cards with Rounded Corners",
              link: "/business-cards-rounded",
            },
            { title: "Flyers with Rounded Corners", link: "/flyers-rounded" },
            {
              title: "Brochures with Rounded Corners",
              link: "/brochures-rounded",
            },
            { title: "Custom Invitations", link: "/custom-invitations" },
          ],
        },
        {
          subheading: "Special Finishes",
          items: [
            { title: "Foil Stamping", link: "/foil-stamping" },
            { title: "Embossing & Debossing", link: "/embossing-debossing" },
            { title: "Spot UV Coating", link: "/spot-uv-coating" },
            { title: "Textured Paper", link: "/textured-paper" },
            { title: "Die-Cut Shapes", link: "/die-cut-shapes" },
          ],
        },
        {
          subheading: "Die-Cut Designs",
          items: [
            {
              title: "Custom Shape Postcards",
              link: "/custom-shape-postcards",
            },
            {
              title: "Die-Cut Business Cards",
              link: "/die-cut-business-cards",
            },
            { title: "Shaped Stickers", link: "/shaped-stickers" },
            { title: "Die-Cut Door Hangers", link: "/die-cut-door-hangers" },
            {
              title: "Unique Packaging Inserts",
              link: "/unique-packaging-inserts",
            },
          ],
        },
        {
          subheading: "Eco-Friendly Options",
          items: [
            {
              title: "Recycled Paper Products",
              link: "/recycled-paper-products",
            },
            { title: "Soy-Based Inks", link: "/soy-based-inks" },
            {
              title: "Biodegradable Business Cards",
              link: "/biodegradable-business-cards",
            },
            {
              title: "Eco-Friendly Packaging",
              link: "/eco-friendly-packaging",
            },
            { title: "Plantable Paper", link: "/plantable-paper" },
          ],
        },
      ],
    },
    {
      heading: "SIGNS, BANNERS & POSTERS",
      submenus: [
        {
          subheading: "Vinyl Banners",
          items: [
            { title: "Custom Vinyl Banners", link: "/custom-vinyl-banners" },
            { title: "Large Format Printing", link: "/large-format-printing" },
            { title: "Double-Sided Banners", link: "/double-sided-banners" },
            { title: "Mesh Vinyl Banners", link: "/mesh-vinyl-banners" },
            { title: "Pole Banners", link: "/pole-banners" },
          ],
        },
        {
          subheading: "Yard Signs",
          items: [
            {
              title: "Corrugated Plastic Yard Signs",
              link: "/corrugated-plastic-yard-signs",
            },
            {
              title: "Custom Shape Yard Signs",
              link: "/custom-shape-yard-signs",
            },
            {
              title: "Double-Sided Yard Signs",
              link: "/double-sided-yard-signs",
            },
            { title: "UV-Coated Yard Signs", link: "/uv-coated-yard-signs" },
            {
              title: "Directional Yard Signs",
              link: "/directional-yard-signs",
            },
          ],
        },
        {
          subheading: "Retractable Banners",
          items: [
            {
              title: "Standard Retractable Banners",
              link: "/standard-retractable-banners",
            },
            {
              title: "Deluxe Retractable Banners",
              link: "/deluxe-retractable-banners",
            },
            {
              title: "Double-Sided Retractable Banners",
              link: "/double-sided-retractable-banners",
            },
            {
              title: "Wide-Base Retractable Banners",
              link: "/wide-base-retractable-banners",
            },
            {
              title: "Compact Retractable Banners",
              link: "/compact-retractable-banners",
            },
          ],
        },
        {
          subheading: "Posters",
          items: [
            {
              title: "Custom Printed Posters",
              link: "/custom-printed-posters",
            },
            { title: "Large Format Posters", link: "/large-format-posters" },
            { title: "Mounted Posters", link: "/mounted-posters" },
            { title: "Glossy & Matte Posters", link: "/glossy-matte-posters" },
            { title: "Event Posters", link: "/event-posters" },
          ],
        },
        {
          subheading: "Backlit Signs",
          items: [
            { title: "Backlit Film Printing", link: "/backlit-film-printing" },
            { title: "LED Backlit Signs", link: "/led-backlit-signs" },
            {
              title: "Custom Backlit Graphics",
              link: "/custom-backlit-graphics",
            },
            {
              title: "Duratrans Backlit Prints",
              link: "/duratrans-backlit-prints",
            },
            { title: "Edge-Lit Signs", link: "/edge-lit-signs" },
          ],
        },
      ],
    },
    {
      heading: "LABELS, STICKERS & PACKAGING",
      submenus: [
        {
          subheading: "Custom Labels",
          items: [
            { title: "Die-Cut Labels", link: "/die-cut-labels" },
            { title: "Roll Labels", link: "/roll-labels" },
            { title: "Sheet Labels", link: "/sheet-labels" },
            { title: "Waterproof Labels", link: "/waterproof-labels" },
            { title: "Foil Labels", link: "/foil-labels" },
          ],
        },
        {
          subheading: "Stickers",
          items: [
            { title: "Custom Stickers", link: "/custom-stickers" },
            { title: "Vinyl Stickers", link: "/vinyl-stickers" },
            { title: "Clear Stickers", link: "/clear-stickers" },
            { title: "Bumper Stickers", link: "/bumper-stickers" },
            { title: "Transfer Stickers", link: "/transfer-stickers" },
          ],
        },
        {
          subheading: "Packaging",
          items: [
            { title: "Custom Boxes", link: "/custom-boxes" },
            { title: "Product Packaging", link: "/product-packaging" },
            { title: "Shipping Boxes", link: "/shipping-boxes" },
            { title: "Retail Packaging", link: "/retail-packaging" },
            { title: "Custom Pouches", link: "/custom-pouches" },
          ],
        },
        {
          subheading: "Bottle Labels",
          items: [
            { title: "Wine Bottle Labels", link: "/wine-bottle-labels" },
            { title: "Beer Bottle Labels", link: "/beer-bottle-labels" },
            { title: "Water Bottle Labels", link: "/water-bottle-labels" },
            { title: "Juice Bottle Labels", link: "/juice-bottle-labels" },
            { title: "Bottle Neck Labels", link: "/bottle-neck-labels" },
          ],
        },
        {
          subheading: "Food Packaging",
          items: [
            { title: "Custom Food Packaging", link: "/custom-food-packaging" },
            { title: "Food-Grade Labels", link: "/food-grade-labels" },
            { title: "Snack Packaging", link: "/snack-packaging" },
            { title: "Bakery Boxes", link: "/bakery-boxes" },
            { title: "Beverage Packaging", link: "/beverage-packaging" },
          ],
        },
      ],
    },
    {
      heading: "HOME & PHOTO GIFTS",
      submenus: [
        {
          subheading: "Photo Prints",
          items: [
            { title: "Standard Prints", link: "/standard-prints" },
            { title: "Canvas Prints", link: "/canvas-prints" },
            { title: "Metal Prints", link: "/metal-prints" },
            { title: "Acrylic Prints", link: "/acrylic-prints" },
            { title: "Poster Prints", link: "/poster-prints" },
          ],
        },
        {
          subheading: "Personalized Gifts",
          items: [
            { title: "Custom Mugs", link: "/custom-mugs" },
            { title: "Photo Books", link: "/photo-books" },
            {
              title: "Personalized Calendars",
              link: "/personalized-calendars",
            },
            { title: "Custom Phone Cases", link: "/custom-phone-cases" },
            { title: "Engraved Gifts", link: "/engraved-gifts" },
          ],
        },
        {
          subheading: "Wall Art",
          items: [
            { title: "Framed Prints", link: "/framed-prints" },
            { title: "Art Posters", link: "/art-posters" },
            { title: "Gallery Wraps", link: "/gallery-wraps" },
            { title: "Wall Decals", link: "/wall-decals" },
            { title: "Metal Wall Art", link: "/metal-wall-art" },
          ],
        },
        {
          subheading: "Home Décor",
          items: [
            { title: "Custom Pillows", link: "/custom-pillows" },
            { title: "Personalized Blankets", link: "/personalized-blankets" },
            { title: "Photo Frames", link: "/photo-frames" },
            { title: "Decorative Magnets", link: "/decorative-magnets" },
            { title: "Custom Coasters", link: "/custom-coasters" },
          ],
        },
        {
          subheading: "Photo Albums",
          items: [
            { title: "Hardcover Albums", link: "/hardcover-albums" },
            { title: "Softcover Albums", link: "/softcover-albums" },
            { title: "Layflat Albums", link: "/layflat-albums" },
            { title: "Memory Books", link: "/memory-books" },
            { title: "Photo Journals", link: "/photo-journals" },
          ],
        },
        {
          subheading: "Special Occasion Gifts",
          items: [
            { title: "Anniversary Gifts", link: "/anniversary-gifts" },
            { title: "Birthday Gifts", link: "/birthday-gifts" },
            { title: "Graduation Gifts", link: "/graduation-gifts" },
            { title: "Wedding Gifts", link: "/wedding-gifts" },
            { title: "Holiday Gifts", link: "/holiday-gifts" },
          ],
        },
      ],
    },
    {
      heading: "WEDDING",
      submenus: [
        {
          subheading: "Invitations",
          items: [
            {
              title: "Custom Wedding Invitations",
              link: "/custom-wedding-invitations",
            },
            { title: "RSVP Cards", link: "/rsvp-cards" },
            { title: "Save the Date Cards", link: "/save-the-date-cards" },
            {
              title: "Bridal Shower Invitations",
              link: "/bridal-shower-invitations",
            },
            {
              title: "Rehearsal Dinner Invitations",
              link: "/rehearsal-dinner-invitations",
            },
          ],
        },
        {
          subheading: "Decorations",
          items: [
            { title: "Table Centerpieces", link: "/table-centerpieces" },
            { title: "Wedding Banners", link: "/wedding-banners" },
            { title: "Aisle Runners", link: "/aisle-runners" },
            { title: "Chair Covers", link: "/chair-covers" },
            { title: "Floral Arrangements", link: "/floral-arrangements" },
          ],
        },
        {
          subheading: "Favors",
          items: [
            { title: "Personalized Favors", link: "/personalized-favors" },
            { title: "Custom Candles", link: "/custom-candles" },
            { title: "Edible Favors", link: "/edible-favors" },
            { title: "Mini Bottles", link: "/mini-bottles" },
            { title: "Wedding Keepsakes", link: "/wedding-keepsakes" },
          ],
        },
        {
          subheading: "Photo & Video",
          items: [
            {
              title: "Engagement Photography",
              link: "/engagement-photography",
            },
            { title: "Wedding Photography", link: "/wedding-photography" },
            { title: "Videography Packages", link: "/videography-packages" },
            { title: "Photo Booth Rentals", link: "/photo-booth-rentals" },
            { title: "Custom Albums", link: "/custom-albums" },
          ],
        },
        {
          subheading: "Stationery",
          items: [
            { title: "Menu Cards", link: "/menu-cards" },
            { title: "Place Cards", link: "/place-cards" },
            { title: "Thank You Cards", link: "/thank-you-cards" },
            { title: "Seating Charts", link: "/seating-charts" },
            { title: "Programs", link: "/programs" },
          ],
        },
        {
          subheading: "Attire",
          items: [
            { title: "Bridal Gowns", link: "/bridal-gowns" },
            { title: "Bridesmaid Dresses", link: "/bridesmaid-dresses" },
            { title: "Groom Suits", link: "/groom-suits" },
            { title: "Flower Girl Dresses", link: "/flower-girl-dresses" },
            { title: "Ring Bearer Outfits", link: "/ring-bearer-outfits" },
          ],
        },
        {
          subheading: "Reception",
          items: [
            { title: "Custom Cake Toppers", link: "/custom-cake-toppers" },
            { title: "Wedding Cake Designs", link: "/wedding-cake-designs" },
            {
              title: "Personalized Table Numbers",
              link: "/personalized-table-numbers",
            },
            { title: "Guest Book", link: "/guest-book" },
            { title: "Wedding Signs", link: "/wedding-signs" },
          ],
        },
      ],
    },
    {
      heading: "CLOTHING & BAGS",
      submenus: [
        {
          subheading: "Apparel",
          items: [
            { title: "Custom T-Shirts", link: "/custom-t-shirts" },
            { title: "Personalized Hoodies", link: "/personalized-hoodies" },
            { title: "Polo Shirts", link: "/polo-shirts" },
            { title: "Tank Tops", link: "/tank-tops" },
            { title: "Sweatshirts", link: "/sweatshirts" },
          ],
        },
        {
          subheading: "Bags",
          items: [
            { title: "Tote Bags", link: "/tote-bags" },
            { title: "Backpacks", link: "/backpacks" },
            { title: "Duffel Bags", link: "/duffel-bags" },
            { title: "Messenger Bags", link: "/messenger-bags" },
            { title: "Drawstring Bags", link: "/drawstring-bags" },
          ],
        },
        {
          subheading: "Accessories",
          items: [
            { title: "Custom Hats", link: "/custom-hats" },
            { title: "Personalized Scarves", link: "/personalized-scarves" },
            { title: "Embroidered Beanies", link: "/embroidered-beanies" },
            { title: "Custom Socks", link: "/custom-socks" },
            { title: "Printed Gloves", link: "/printed-gloves" },
          ],
        },
        {
          subheading: "Promotional Clothing",
          items: [
            { title: "Branded Workwear", link: "/branded-workwear" },
            { title: "Event T-Shirts", link: "/event-t-shirts" },
            { title: "Custom Uniforms", link: "/custom-uniforms" },
            { title: "Promotional Jackets", link: "/promotional-jackets" },
            { title: "Custom Aprons", link: "/custom-aprons" },
          ],
        },
        {
          subheading: "Sportswear",
          items: [
            { title: "Custom Jerseys", link: "/custom-jerseys" },
            {
              title: "Personalized Sports Shorts",
              link: "/personalized-sports-shorts",
            },
            { title: "Training Tops", link: "/training-tops" },
            { title: "Sports Bags", link: "/sports-bags" },
            { title: "Performance Socks", link: "/performance-socks" },
          ],
        },
        {
          subheading: "Seasonal Clothing",
          items: [
            { title: "Winter Coats", link: "/winter-coats" },
            { title: "Summer Dresses", link: "/summer-dresses" },
            { title: "Spring Jackets", link: "/spring-jackets" },
            { title: "Autumn Sweaters", link: "/autumn-sweaters" },
            { title: "Custom Swimwear", link: "/custom-swimwear" },
          ],
        },
        {
          subheading: "Clothing",
          items: [
            { title: "Custom T-Shirts", link: "/custom-t-shirts" },
            { title: "Polo Shirts", link: "/polo-shirts" },
            { title: "Hoodies & Sweatshirts", link: "/hoodies-sweatshirts" },
            { title: "Long Sleeve Shirts", link: "/long-sleeve-shirts" },
            { title: "Tank Tops", link: "/tank-tops" },
          ],
        },
        {
          subheading: "Hats",
          items: [
            { title: "Custom Caps", link: "/custom-caps" },
            { title: "Beanies", link: "/beanies" },
            { title: "Snapbacks", link: "/snapbacks" },
            { title: "Bucket Hats", link: "/bucket-hats" },
            { title: "Visors", link: "/visors" },
          ],
        },
        {
          subheading: "Bags",
          items: [
            { title: "Tote Bags", link: "/tote-bags" },
            { title: "Backpacks", link: "/backpacks" },
            { title: "Duffel Bags", link: "/duffel-bags" },
            { title: "Messenger Bags", link: "/messenger-bags" },
            { title: "Drawstring Bags", link: "/drawstring-bags" },
          ],
        },
      ],
    },
    {
      heading: "DESIGN & LOGO",
      submenus: [
        {
          subheading: "Business Card Design",
          items: [
            { title: "Custom Business Cards", link: "/custom-business-cards" },
            {
              title: "Premium Business Cards",
              link: "/premium-business-cards",
            },
            {
              title: "Double-Sided Business Cards",
              link: "/double-sided-business-cards",
            },
            { title: "Specialty Finishes", link: "/specialty-finishes" },
            {
              title: "Business Card Templates",
              link: "/business-card-templates",
            },
          ],
        },
        {
          subheading: "Essential Logo Package",
          items: [
            { title: "Basic Logo Design", link: "/basic-logo-design" },
            { title: "Logo Variations", link: "/logo-variations" },
            { title: "Color Palette", link: "/color-palette" },
            { title: "Font Selection", link: "/font-selection" },
            { title: "Usage Guidelines", link: "/usage-guidelines" },
          ],
        },
        {
          subheading: "Flyer Design",
          items: [
            { title: "Custom Flyers", link: "/custom-flyers" },
            { title: "Event Flyers", link: "/event-flyers" },
            { title: "Promotional Flyers", link: "/promotional-flyers" },
            { title: "Tri-Fold Flyers", link: "/tri-fold-flyers" },
            { title: "Digital Flyer Designs", link: "/digital-flyer-designs" },
          ],
        },
        {
          subheading: "Logo & Brand Identity Pack",
          items: [
            { title: "Full Logo Design", link: "/full-logo-design" },
            { title: "Brand Guidelines", link: "/brand-guidelines" },
            { title: "Business Card Design", link: "/business-card-design" },
            { title: "Letterhead Design", link: "/letterhead-design" },
            { title: "Social Media Assets", link: "/social-media-assets" },
          ],
        },
        {
          subheading: "Website Design",
          items: [
            { title: "Custom Website Design", link: "/custom-website-design" },
            { title: "Responsive Design", link: "/responsive-design" },
            { title: "E-Commerce Websites", link: "/e-commerce-websites" },
            { title: "Landing Pages", link: "/landing-pages" },
            { title: "Website Redesigns", link: "/website-redesigns" },
          ],
        },
        {
          subheading: "Marketing Materials",
          items: [
            { title: "Brochures", link: "/brochures" },
            { title: "Posters", link: "/posters" },
            { title: "Banners", link: "/banners" },
            { title: "Direct Mail Pieces", link: "/direct-mail-pieces" },
            { title: "Presentation Folders", link: "/presentation-folders" },
          ],
        },
      ],
    },
  ];

  const openMenuOnHover = (index) => {
    // console.log(index);
    setHoveredMenu(index);
    setSubMenu(menuItems[index]?.submenu || []);
    // console.log(subMenu);
  };

  const closeMenuOnHover = () => {
    setHoveredMenu(null);
    setSubMenu([]);
  };

  // const item = item.length
  // console.log("cartitem",item);
  return (
    <>
      <nav className="bg-[#524BAD] z-[99999] sticky top-0 left-0 right-0 text-[#DFDFDF] pt-4  md:py-4">
        <div className="container flex flex-col mx-auto gap-y-3 ">
          <div className="flex items-center justify-between w-full px-3 pb-4 border-b-2 border-white md:px-0 border-opacity-60">
            <div className="relative items-center hidden lg:flex">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent ml-10 w-full text-white placeholder:text-[10px] placeholder:font-normal placeholder-[#F7ECDBCC] placeholder:text-opacity-45 focus:outline-none"
              />
            </div>

            {/* <p className='text-[#F9F4E8] font-normal text-sm sm:text-xl md:text-3xl gafata_font lg:text-4xl'>OSCAR PRINITNG</p> */}
            <div>
              <Link to="/">
                {" "}
                <img
                  className="cursor-pointer w-[70%] md:w-full"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="items-center justify-center justify-end hidden space-x-4 lg:flex">
              {email ? (
                <div className="flex items-center space-x-2">
                  <span>{`${email.split("@")[0]}`}</span>{" "}
                </div>
              ) : (
                <Link to="/login">
                  <FiUser />
                </Link>
              )}
              <Link to="/wishlist">
                <FiHeart />
              </Link>
              <Link to={"/cart"} className="relative">
                <CgShoppingBag />
                {cartItems.length > 0 && (
                  <div className="absolute w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[8px] font-medium -top-2.5 -right-3">
                    {cartItems.length}
                  </div>
                )}
              </Link>
              <LuFolderClosed />
              {showLogOut ? (
                <MdOutlineLogout onClick={logout} className="cursor-pointer" />
              ) : (
                ""
              )}
            </div>

            <div className="flex lg:hidden">
              {showmenu ? (
                <GiHamburgerMenu
                  onClick={() => setShowMenu(!showmenu)}
                  size={24}
                />
              ) : (
                <RxCross2 onClick={() => setShowMenu(!showmenu)} size={24} />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full px-20 ">
            <div
              className={`flex dm_sansFont  w-full text-center  lg:flex-row lg:items-center items-start  flex-col lg:max-h-auto lg:py-3 lg:pt-6 lg:justify-center text-xs sm:text-sm font-medium md:font-normal transition-all duration-300 px-6 md:px-0 ${
                showmenu
                  ? "max-h-0 overflow-hidden"
                  : "max-h-screen gap-y-3 py-4"
              }`}
            >
              {menu.map((item, index) => {
                return (
                  <div
                    key={index}
                    onMouseOver={() => openMenuOnHover(index)}
                    onMouseOut={closeMenuOnHover}
                    className="w-full text-center md:flex-grow md:w-auto"
                  >
                    <Link
                      to={item.link}
                      onClick={closeMenuOnHover}
                      className="inline-block px-1 pb-4 text-sm transition-all duration-300 ease-out hover:text-white"
                      style={{
                        borderBottom: "2px solid transparent", // Initially transparent border
                        transformOrigin: "center bottom", // Center the scale animation on the bottom
                        transition:
                          "border-color 300ms ease-out, transform 300ms ease-out",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderBottomColor = "#f97316"; // Change to orange on hover
                        e.currentTarget.style.transform = "scaleX(1.1)"; // Slightly scale the width on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderBottomColor = "transparent"; // Back to transparent on hover out
                        e.currentTarget.style.transform = "scaleX(1)"; // Reset scale on hover out
                      }}
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}

              {/* <Link to="/postcards-flyer" className="block hover:text-white">
                POSTCARDS & PRINT ADVERTISING
              </Link>
              <Link to="/sign-banner" className="block hover:text-white">
                SIGNS, BANNERS & POSTERS
              </Link>
              <Link to="/label-sticker" className="block hover:text-white">
                LABELS, STICKERS & PACKAGING
              </Link>
              <Link to="home-gifts" className="block hover:text-white">
                HOME & PHOTO GIFTS
              </Link>
              <Link to="/wedding" className="block hover:text-white">
                WEDDING
              </Link>
              <Link to="/clothing-bags" className="block hover:text-white">
                CLOTHING & BAGS
              </Link>
              <Link to="/design-logo" className="block hover:text-white">
                DESIGN & LOGO
              </Link> */}
            </div>
          </div>
          <div
            className="absolute w-full h-5 transparent"
            onMouseOver={() => openMenuOnHover(hoveredMenu)}
            onMouseOut={closeMenuOnHover}
          />
          <div
            className="absolute w-full mt-4"
            onMouseOver={() => openMenuOnHover(hoveredMenu)}
            onMouseOut={closeMenuOnHover}
          >
            {hoveredMenu !== null && (
              <div className="bg-[#605abb] text-white py-1  transition-all ease-in-out duration-500 ">
                <div className="p-8 flex flex-wrap  justify-start  gap-x-16 max-h-[435px]  lg-h-[350px] xl:h-[435px] w-full overflow-y-auto ">
                  {menuItems[hoveredMenu].submenus.map((submenu, index) => (
                    <div
                      key={index}
                      className="mb-6 transition-transform duration-300 ease-in-out delay-100 transform"
                    >
                      <h4 className="text-xl font-semibold">
                        {submenu.subheading}
                      </h4>
                      <ul className="text-sm mt-2 flex flex-col space-y-[6px]">
                        {submenu.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-base cursor-pointer "
                          >
                            <Link onClick={closeMenuOnHover} to={item.link}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
  cartitem: PropTypes.number, // Defines 'cartitem' as a number
};

export default Navbar;
