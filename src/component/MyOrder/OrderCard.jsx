import { useNavigate } from "react-router-dom";
import orderimage from "../../assets/EmptyWishlist/order-image.svg";
import OrderDetails from "../OrderDetails.jsx/OrderDetails";

function OrderCard() {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="order-1"
        className="p-4 mx-2 bg-gradient-to-r from-gray-50 to-gray-200 rounded-xl shadow-md transform  transition-transform duration-300"
      >
        <div
          id="order-details"
          className="p-4 bg-white flex justify-between items-end rounded-lg flex-wrap gap-2 shadow-sm"
        >
          <div id="left" className="flex flex-col gap-1">
            <h1 className="font-poppins font-bold text-lg text-purple-700">
              Order no: #23241dmfeng3v
            </h1>
            <p className="font-roboto font-medium text-gray-500 text-sm">
              Order Date: <span className="text-gray-400">28/08/2020</span>
            </p>
            <p className="font-roboto font-medium text-gray-500 text-sm">
              Estimated Delivery: <span className="text-gray-400">22/03/2024</span>
            </p>
          </div>
          <div id="right" className="flex flex-col gap-1 text-right">
            <p className="font-roboto font-medium text-gray-500 text-sm">
              Status: <span className="text-green-600">Confirmed</span>
            </p>
            <p className="font-roboto font-medium text-gray-500 text-sm">
              Payment: <span className="text-gray-400">Cash on delivery</span>
            </p>
          </div>
        </div>

        <div
          id="order-image"
          className="flex items-center justify-between mt-4 flex-wrap gap-3"
        >
          <div id="img-section" className="flex gap-2 items-center">
            <div id="img" className="max-w-[120px]">
              <img
                className="w-full rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200"
                src={orderimage}
                alt="Order item"
              />
            </div>
            <div id="img-detail" className="flex flex-col gap-1">
              <p className="font-poppins font-semibold text-sm text-gray-800">
                Black Printed T-shirt
              </p>
              <p className="font-roboto font-medium text-gray-500 text-sm">
                Color: <span className="text-gray-400">Black</span>
              </p>
              <p className="font-roboto font-medium text-gray-500 text-sm">
                Quantity: <span className="text-gray-400">1</span>
              </p>
              <p className="font-roboto font-bold text-sm text-gray-700">
                Total: <span className="text-purple-600">$233</span>
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/orderDetails");
            }}
            id="btn"
            className="cursor-pointer bg-purple-500 hover:bg-purple-600 rounded-lg px-3 py-2 text-center transition-transform transform hover:scale-105"
          >
            <p className="font-poppins font-bold text-white text-sm">
              View Details
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
}

export default OrderCard;
