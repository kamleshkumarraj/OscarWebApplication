import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contextAPI/CartContext"; // Ensure the path is correct
import Shipping from "./Shipping";
import Payment from "./Payment";
import { MdArrowForwardIos } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loader from "../Loader";
const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51NaHdVSB16uFZUayNRrRfzCPdSasF5hrJd1ASzgXa7BI8bG9QLTa0k9PCF1l4gkpvx859gHKeUNyQnaZrYawxbJj003G27ZRyZ"
  );
  const { cartItems, cartTotal } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    appartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const subtotal = cartTotal.subtotal.toFixed(2);
  const total = cartTotal.total.toFixed(2);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(customerInfo);
    // Create data payload for Stripe API
    const payload = {
      items: cartItems.map((item) => ({
        title: item.label,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: total,
      customer: {
        ...customerInfo,
      },
    };
    console.log(payload);

    try {
      const response = await fetch(
        "http://devenvs.hopto.org/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("Payment intent created:", data);
      // Handle Stripe payment process here (redirect, etc.)
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  return (
    <div className="container mx-auto xl:px-16 p-4 xl:mt-16 mt-8">
      <div className="flex items-center 2xl:gap-5 xl-gap-4 gap-3 xl:p-8 md:p-6">
        <span>Home</span>
        <MdArrowForwardIos size={10} />
        <span>My Account</span> <MdArrowForwardIos size={10} />
        <span className="font-semibold">Check Out</span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full lg:w-2/3 md:p-8 px-2 py-8">
          <div className="flex gap-2">
            <div className="w-2 h-7 bg-[#8A33FD] rounded-xl"></div>
            <h1 className="text-2xl font-semibold mb-4">Check Out</h1>
          </div>
          <div className="space-y-8 mb-4">
            <h1 className="text-lg font-semibold">Billing Details</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-1" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={customerInfo.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={customerInfo.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-1" htmlFor="country">
                    Country / Region*
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={customerInfo.country}
                    onChange={handleInputChange}
                    placeholder="Country / Region*"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={customerInfo.company}
                    onChange={handleInputChange}
                    placeholder="Company (optional)"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block mb-1" htmlFor="address">
                    Street Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    placeholder="House number and street name"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="apt">
                    Apt, suite, unit
                  </label>
                  <input
                    type="text"
                    id="apt"
                    value={customerInfo.appartment}
                    onChange={handleInputChange}
                    placeholder="apartment, suite, unit, etc. (optional)"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block mb-1" htmlFor="city">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    placeholder="Town / City"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="state">
                    State*
                  </label>
                  <select
                    id="state"
                    value={customerInfo.state}
                    onChange={handleInputChange}
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1" htmlFor="postalCode">
                    Postal Code*
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={customerInfo.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <label className="block mb-1" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full py-3 bg-[#F6F6F6] rounded px-4"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-3 bg-[#8A33FD] text-white rounded-lg"
              >
                Continue to payment
              </button>
            </form>
          </div>
          <Shipping />
          <Elements stripe={stripePromise}>
            <Payment
              cartItems={cartItems}
              total={total}
              customerInfo={customerInfo}
            />
          </Elements>
        </div>
        <div className="w-full lg:w-1/3 md:p-4 lg:mt-0">
          <div className="px-5 rounded-lg border md:py-10 py-5 mt-8">
            <h2 className="xl:text-2xl text-lg font-semibold mb-2">
              Order Summary
            </h2>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col md:gap-4 gap-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center md:gap-4 gap-2">
                  <img src={item.img} alt={item.title} className="size-12" />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="font-semibold">{item.label}</span>
                      <p className="font-semibold">
                        {item.colorTag}{" "}
                        <span className="font-normal">{item.color}</span>
                      </p>
                    </div>
                    <div>
                      <span>
                        {item.price} x {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-300"></div>
              <div className="flex justify-between font-semibold">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">${total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
