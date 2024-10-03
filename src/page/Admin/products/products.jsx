import search from "../../../assets/admin/products/search.svg";
import prodImage from "../../../assets/admin/products/prodimage.svg";
import AddProduct from "./addProduct";
import filter from "../../../assets/admin/filter.svg";

import { useState } from "react";

const Products = () => {
  let [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const products = [
    {
      id: 1,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
    {
      id: 2,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
    {
      id: 3,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
    {
      id: 4,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
    {
      id: 5,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
    {
      id: 6,
      image: prodImage,
      name: "Lorem ipsum dolor",
      sku: "20 Mar, 2023",
      price: "$75.00",
      stock: "Processing",
      categories: "Processing",
      action: "Processing",
    },
  ];

  return (
    <div className="bg-[#f6f6f6] w-full h-full">
      <div className="w-full h-full p-16">
        {!showAddProduct ? (
          <div className="bg-white w-full h-full border border-gray-200 rounded-md">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center p-4 px-12">
                <div>
                  <h2 className="text-2xl font-medium">Products</h2>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddProduct}
                    className="bg-[#0e1422] text-white rounded-md px-9 active:bg-[#cdcaca] active:text-[#0e1422] border-2 active:border-gray-100 py-2"
                  >
                    Add Product
                  </button>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-gray-200 px-6 py-3 rounded-md"
                      placeholder="     Search"
                    />
                    <div className="absolute top-2 left-2">
                      <img src={search} alt="" className="size-8" />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full">
                <table className="w-full">
                  <thead className="w-full border-b-[1px]">
                    <tr>
                      <td className="p-3 px-7 w-[5%] text-center">
                        <img src={filter} alt="" />
                      </td>
                      <td className="p-3 text-center">Name</td>
                      <td className="p-3 text-center">SKU</td>
                      <td className="p-3 text-center">Price</td>
                      <td className="p-3 text-center">Stock</td>
                      <td className="p-3 text-center">Categories</td>
                      <td className="p-3 text-center">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100">
                        <td className="p-3 text-center">
                          <img src={product.image} className="size-24" alt="" />
                        </td>
                        <td className="p-3 text-center">{product.name}</td>
                        <td className="p-3 text-center">{product.sku}</td>
                        <td className="p-3 text-center">{product.price}</td>
                        <td className="p-3 text-center">{product.stock}</td>
                        <td className="p-3 text-center">
                          {product.categories}
                        </td>
                        <td className="p-3 text-center">{product.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <AddProduct />
        )}
      </div>
    </div>
  );
};

export default Products;
