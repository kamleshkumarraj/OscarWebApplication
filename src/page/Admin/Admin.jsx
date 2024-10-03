import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../component/Admin/Sidebar";
import Dashboard from "./dashboard/dashboard";
import Products from "./products/products";
import { useEffect } from "react";
import Header from "../../component/Admin/Header";
import Orders from "./orders/orders";
import Customers from "./customers/customers";
import Reviews from "./reviews/reviews";
import Setting from "./setting/setting";

const Admin = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Only navigate if the path is /admin to prevent infinite loops
    if (pathname === "/admin") {
      navigate("");
    }
  }, [pathname, navigate]); // Include necessary dependencies

  return (
    <div className="flex flex-col h-full">
      <Header /> {/* Header should be at the top */}
      <div className="flex ">
        <Sidebar />
        <div className="w-full ">
          {" "}
          {/* Main content area */}
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="setting" element={<Setting />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
