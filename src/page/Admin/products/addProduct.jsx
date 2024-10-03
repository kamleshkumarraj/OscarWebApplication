import { useRef, useState } from "react";

import images from "../../../assets/admin/products/images.svg";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Color 1", code: "#a3bef8" },
    { name: "Color 2", code: "#ffd58a" },
    { name: "Color 3", code: "#83b18b" },
    { name: "Color 4", code: "#4078ff" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };
  return (
    <div>
      <div className="bg-white w-full h-full border border-gray-200 rounded-md">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center p-4 px-12">
            <div>
              <h2 className="text-2xl font-medium ">Add Product</h2>
            </div>
          </div>
          <hr />
          <div className=" w-8/12 ">
            <div className="p-12 py-16 mt-4">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-9">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="title">Title</label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="stock">Stock Status</label>
                    <input
                      id="stock"
                      name="stock"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="price">Price</label>
                    <input
                      id="price"
                      name="price"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>{" "}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="quantity">Availble Quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="category">Category</label>
                    <input
                      id="category"
                      name="category"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="image">Images</label>
                    <div className="relative">
                      <input
                        id="image"
                        name="image"
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        className="border w-full border-gray-300 rounded-md px-4 py-3"
                      />
                      <button
                        type="button"
                        onClick={handleClick}
                        className="w-full flex items-center justify-start border border-gray-300 rounded-md px-4 py-3 bg-white"
                      >
                        <img src={images} alt="Upload" className="w-6 h-6" />
                        <span className="ml-2">Choose product images</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="sluf">Slug</label>
                    <input
                      id="slug"
                      name="slug"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-wrap mt-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative w-16 h-16 m-2">
                        <img
                          src={image}
                          alt={`Selected ${index}`}
                          className="w-full h-full  object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute w-6 -top-2 -right-2   bg-red-600 text-white rounded-full"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="sku">SKU</label>
                    <input
                      id="sku"
                      name="sku"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label>Colors</label>
                    <div className="flex flex-wrap space-x-4">
                      {colors.map((color) => (
                        <label
                          key={color.code}
                          className="relative inline-flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            name="color"
                            value={color.code}
                          />
                          <div
                            className="w-10 h-10 rounded-full peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-[#524bad] border border-gray-300"
                            style={{ backgroundColor: color.code }}
                          ></div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="desc">Description</label>
                    <textarea
                      id="desc"
                      name="desc"
                      className="border border-gray-300 rounded-md px-4 py-3 resize-none"
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label>Sizes</label>
                    <div className="flex flex-wrap space-x-4">
                      {sizes.map((size) => (
                        <label
                          key={size}
                          className="relative inline-flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="sizes"
                            className="sr-only peer"
                            value={size}
                          />
                          <div className="w-16 h-10 py-5 flex items-center justify-center bg-white border border-gray-300 rounded-md peer-checked:bg-[#524bad] peer-checked:text-white">
                            {size}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#0e1422] text-white px-4 py-3 rounded-md"
                    >
                      Save Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
