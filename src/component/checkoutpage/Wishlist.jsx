import { MdArrowForwardIos } from "react-icons/md";
import image from "../../assets/wishlist-img.svg";
import { CgCross } from "react-icons/cg";
import { GiCrossedSlashes } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../checkoutpage/Sidebar";
import Loader from "../Loader";

function Wishlist() {
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
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Blue Flower Print Crop Top",
      color: "Yellow",
      quantity: 1,
      price: 500,
    },
    {
      id: 2,
      name: "Red Polka Dot Dress",
      color: "Red",
      quantity: 1,
      price: 300,
    },
    {
      id: 3,
      name: "Red Polka Dot Dress",
      color: "Red",
      quantity: 1,
      price: 300,
    },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    setWishlistItems(
      wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id)
    );

    toast.success("Product added to cart successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col md:flex-row lg:px-8 gap-10">
      {/* Sidebar Section */}
      <div className="w-full md:w-[55%] mt-32">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="w-full md:w-[55%] mt-32">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold mb-2 px-4">Wishlist</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Wishlist Items Section */}
          <div className="mb-2 flex flex-col">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex md:flex-row flex-col sm:gap-0 gap-[20px] items-center justify-between border-b py-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <button
                  className="px-4 py-1 text-[#000000d8] hover:text-red-600"
                  onClick={() =>
                    setWishlistItems(
                      wishlistItems.filter(
                        (wishlistItem) => wishlistItem.id !== item.id
                      )
                    )
                  }
                >
                  <RxCross1 />
                </button>
                <img
                  src={image}
                  alt="product"
                  className="w-[120px] transform transition duration-300 hover:scale-105"
                />
                <div className="flex-grow px-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-center sm:text-left text-sm text-gray-600">
                    Color: {item.color}
                  </p>
                  <p className="text-center sm:text-left text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div
                  id="last"
                  className="flex flex-col md:flex-row gap-[20px] md:gap-[60px] items-center"
                >
                  <p className="lg:text-[29px] sm:text-[25px] text-[20px] font-[700]">
                    ${item.price}
                  </p>
                  <div
                    id="btn"
                    className="relative group px-[20px] py-[10px] rounded-[10px] bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 cursor-pointer transform transition duration-300 hover:scale-105 shadow-lg"
                    onClick={() => handleAddToCart(item)}
                  >
                    <p className="font-[DM Sans] text-white text-[18px] text-center font-[500]">
                      Add to cart
                    </p>
                    <MdArrowForwardIos className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-white text-[24px] opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Wishlist;
