import React, { useState } from "react";
import frame1 from "../../assets/oscar_image/frame1.png";
import frame2 from "../../assets/oscar_image/frame2.png";
import frame3 from "../../assets/oscar_image/frame3.png";
import frame4 from "../../assets/oscar_image/frame4.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PaymentLoader from "../PaymentLoader";

const Payment = ({ cartItems, total, customerInfo }) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [showPayNowLoader, setShowPayNowLoader] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(cartItems);
    console.log(total);
    console.log(customerInfo);

    setShowPayNowLoader(true);
    if (!stripe || !elements) {
      setShowPayNowLoader(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setShowPayNowLoader(false);
      return;
    }

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
      paymentMethod: {
        id: paymentMethod.id,
        type: paymentMethod.card.brand,
        last4: paymentMethod.card.last4,
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

      if (!response.ok) {
        console.error("Server responded with:", response.statusText);
        setShowPayNowLoader(false);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.clientSecret) {
        setShowPayNowLoader(false);
        setClientSecret(data.clientSecret);
        console.log("Payment intent created:", data);
        console.log(clientSecret);

        // Confirm the payment with Stripe
        const { error: confirmError, paymentIntent } =
          await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: customerInfo.firstName + " " + customerInfo.lastName,
                email: customerInfo.email,
                address: {
                  line1: customerInfo.address,
                  line2: customerInfo.address,
                  city: customerInfo.city,
                  state: customerInfo.state,
                  postal_code: customerInfo.address.postalCode,
                  country: "IN",
                },
              },
            },
          });

        if (confirmError) {
          console.error("Error confirming payment:", confirmError);
        } else {
          console.log("Payment successful:", paymentIntent);

          // Redirect or handle success (e.g., show success page)
        }
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
      setShowPayNowLoader(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
        <p className="text-gray-600 mb-4">
          All transactions are secure and encrypted.
        </p>
        <div className="bg-[#F6F6F6] rounded-lg p-8">
          <div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              <div>
                <label
                  htmlFor="creditCard"
                  className="cursor-pointer font-semibold"
                >
                  Credit Card
                </label>
                <p className="text-gray-600">
                  We accept all major credit cards.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-6 ml-6">
              <img src={frame1} className="2xl:w-[80px] w-[60px]" alt="GPay" />
              <img src={frame2} className="2xl:w-[80px] w-[60px]" alt="Visa" />
              <img
                src={frame3}
                className="2xl:w-[80px] w-[60px]"
                alt="PayPal"
              />
              <img
                src={frame4}
                className="2xl:w-[80px] w-[60px]"
                alt="PayPass"
              />
            </div>
            {/* {paymentMethod === "creditCard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-6 md:mx-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="p-4 border border-black bg-transparent rounded"
                />
                <input
                  type="text"
                  placeholder="Name of card"
                  className="p-4 border border-black bg-transparent rounded"
                />
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  className="p-4 border border-black bg-transparent rounded"
                />
                <div className="w-full border p-2 flex items-center border-black bg-transparent rounded">
                  <input
                    type="password"
                    placeholder="Security Code"
                    className="w-full px-2 bg-transparent outline-none"
                  />
                  <span>
                    <MdOutlineRemoveRedEye size={20} />
                  </span>
                </div>
              </div>
            )} */}
            {paymentMethod === "creditCard" && (
              <form onSubmit={handleSubmit} className="mt-4">
                <CardElement className="py-3 my-4 border rounded" />
                <button
                  type="submit"
                  className=" px-4 py-3 bg-[#8A33FD] text-white rounded-lg"
                  disabled={!stripe}
                >
                  {showPayNowLoader ? <PaymentLoader /> : <div>Pay Now</div>}
                </button>
              </form>
            )}
            <div className="border-t border-gray-300 my-6 w-full"></div>
          </div>
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              checked={paymentMethod === "cashOnDelivery"}
              onChange={() => setPaymentMethod("cashOnDelivery")}
              className="mr-2"
            />
            <label
              htmlFor="cashOnDelivery"
              className="cursor-pointer font-semibold"
            >
              Cash on delivery
            </label>
            <p className="text-gray-600 ml-6">Pay with cash upon delivery.</p>
          </div>
          <div className="border-t border-gray-300 my-6 w-full"></div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="mr-2"
            />
            <label htmlFor="paypal" className="cursor-pointer font-semibold">
              PayPal
            </label>
          </div>
        </div>
      </div>
      <div>
        {/*   <button className="bg-purple-600 text-white px-4 py-3 rounded mt-8">
          <Link to={"/successfull-order"}>Pay Now</Link>
        </button> */}
      </div>
    </div>
  );
};
Payment.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    country: PropTypes.string,

    // Add other fields you have in customerInfo
  }).isRequired,
};

export default Payment;

/* import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // You can now send paymentMethod.id to your backend for processing
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <CardElement className="py-3 my-4 border rounded" />
        <button
          type="submit"
          className="px-4 py-3 bg-[#8A33FD] text-white rounded-lg"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
 */
