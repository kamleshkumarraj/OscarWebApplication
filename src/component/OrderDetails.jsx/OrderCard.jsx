import { RxCross2 } from "react-icons/rx";
import orderImage from "../../assets/EmptyWishlist/order-card-image.svg";

function OrderCard() {
  return (
    <div
      id="order-card"
      className="flex justify-between p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      {/* Image and Product Details */}
      <div className="flex gap-4 items-center">
        <img
          src={orderImage}
          alt="order-image"
          className="w-16 h-16 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-between">
          <h1 className="font-dm-sans font-bold text-sm sm:text-base text-[#3C4242]">
            Lorem Ipsum
          </h1>
          <p className="font-dm-sans text-xs sm:text-sm text-gray-600">
            Color: <span className="text-gray-400">Black</span>
          </p>
        </div>
      </div>

      {/* Quantity, Price, and Remove Icon */}
      <div className="flex flex-col justify-center items-end space-y-2">
        <p className="font-dm-sans font-bold text-sm sm:text-base text-[#3C4242]">
          Qty: <span className="font-medium">1</span>
        </p>
        <p className="font-dm-sans text-xs sm:text-sm text-gray-500">$233.00</p>
      </div>
    </div>
  );
}

export default OrderCard;
