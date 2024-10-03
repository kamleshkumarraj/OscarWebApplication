import React, { useEffect, useState } from "react";
import { useCart } from "../../contextAPI/CartContext";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Loader from "../Loader";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { subtotal, tax, total } = cartTotal;
  console.log(cartItems);
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
    <div>
      <div className="mb-8 p-10 bg-gray-200">
        <h1 className="text-3xl font-bold mb-2">Cart</h1>
        <nav className="text-gray-600 text-sm flex gap-2 items-center">
          <Link to="#" className="hover:underline">
            Ecommerce
          </Link>
          <MdArrowForwardIos size={10} />
          <span className="text-black font-semibold">Cart</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row justify-between md:px-10 px-5">
        {/* Cart Items Section */}
        <div className="flex flex-col w-full lg:w-3/5">
          <h2 className="text-lg font-semibold mb-4">Your cart</h2>
          <div className="w-full border"></div>

          {cartItems.map(
            ({ id, label, color, size, price, quantity, image }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-4"
              >
                <img src={image} alt="product" className="w-[57px] h-[81px]" />
                <div className="flex-grow px-4">
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-gray-600">
                    Color: {color} | Size: {size}
                  </p>
                </div>
                <p className="text-lg font-bold">
                  ${(price * quantity).toFixed(2)}
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(id, -1)}
                    className="px-2 py-1 border"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="w-12 text-center border"
                    readOnly
                  />
                  <button
                    onClick={() => updateQuantity(id, 1)}
                    className="px-2 py-1 border"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  className="px-2 py-1 text-red-500 hover:underline"
                >
                  X
                </button>
              </div>
            )
          )}
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/4 border p-6 mt-8 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Shipping</p>
            <p className="text-gray-800">Free</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Tax</p>
            <p className="text-gray-800">${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <Link to={"/checkout"}>
            <button className="w-full py-3 bg-black text-white font-semibold mb-4 rounded-[8px]">
              Checkout
            </button>
          </Link>

          <Link
            to="#"
            className="text-center text-blue-500 hover:underline flex justify-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
