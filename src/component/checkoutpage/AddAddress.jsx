import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import order from "../../assets/oscar_image/order.png";
import Sidebar from "./Sidebar";
import Loader from "../Loader";

const AddAddress = () => {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    streetAddress: "",
    aptSuiteUnit: "",
    city: "",
    state: "",
    phone: "",
    postalCode: "",
    deliveryInstruction: "",
    defaultShipping: false,
    defaultBilling: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className=" p-4 md:p-10 xl:p-20">
      <div className="flex items-center gap-2 lg:px-8 py-4 mb-8">
        <span>Home</span>
        <MdArrowForwardIos size={10} />
        <span>My Account</span> <MdArrowForwardIos size={10} />
        <span className="font-semibold">Delivery Address</span>
      </div>
      <div className="flex flex-col md:flex-row lg:px-8 gap-10">
        <Sidebar />
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">My Info</h2>
          <h2 className="text-2xl font-semibold mb-8">Add Address</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Country / Region*
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country / Region"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Street Address*
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Apt, suite, unit
                </label>
                <input
                  type="text"
                  name="aptSuiteUnit"
                  value={formData.aptSuiteUnit}
                  onChange={handleChange}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Town / City"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  State*
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="bg-gray-100 text-gray-700 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">State</option>
                  <option value="State 1">State 1</option>
                  <option value="State 2">State 2</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Postal Code*
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Delivery Instruction
              </label>
              <textarea
                name="deliveryInstruction"
                value={formData.deliveryInstruction}
                onChange={handleChange}
                placeholder="Delivery Instruction"
                cols={10}
                rows={5}
                className="bg-gray-100 mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="defaultShipping"
                  checked={formData.defaultShipping}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700">
                  Set as default shipping address
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="defaultBilling"
                  checked={formData.defaultBilling}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700">
                  Set as default billing address
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-100 font-medium text-gray-500 px-6 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
