import React, { useState } from "react";

const Modal = ({ toggleModal, isModalOpen }) => {
  const [shape, setShape] = useState("standard");
  const [orientation, setOrientation] = useState("horizontal");
  const [quantity, setQuantity] = useState(100);
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-16 z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <div className="flex items-end justify-end">
              <button onClick={toggleModal} className="text-gray-500">
                X
              </button>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">
                Standard Business Cards
              </h2>
            </div>
            <p className="mb-4">Please Select All Required Options.</p>
            <div className="mb-6 mt-10">
              <h3 className="font-semibold mb-2">
                Shape <span className="text-gray-400">(Required)</span>
              </h3>
              <div className="flex gap-4">
                <button
                  className={`flex-1 border rounded-lg p-4 ${
                    shape === "standard" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setShape("standard")}
                >
                  <img
                    src="/path/to/standard-image.png"
                    alt="Standard"
                    className="mb-2"
                  />
                  <p>Standard</p>
                </button>
                <button
                  className={`flex-1 border rounded-lg p-4 ${
                    shape === "square" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setShape("square")}
                >
                  <img
                    src="/path/to/square-image.png"
                    alt="Square"
                    className="mb-2"
                  />
                  <p>Square</p>
                </button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">
                Orientation <span className="text-gray-400">(Required)</span>
              </h3>
              <div className="flex gap-4">
                <button
                  className={`border rounded-full px-12 py-2 ${
                    orientation === "horizontal"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setOrientation("horizontal")}
                >
                  Horizontal
                </button>
                <button
                  className={`border rounded-full px-12 py-2 ${
                    orientation === "vertical"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setOrientation("vertical")}
                >
                  Vertical
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="font-semibold mb-2 block" htmlFor="quantity">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border rounded-lg p-2"
              >
                <option value={100}>100 ($0.15 / Unit)</option>
                <option value={200}>200 ($0.14 / Unit)</option>
                <option value={300}>300 ($0.13 / Unit)</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">100 Starting At $14.99</p>
              <div className="mt-4">
                <button className="bg-black w-full text-white px-6 py-2 rounded-full">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
