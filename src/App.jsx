// import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/homeLayout";
import Footer from "./component/Footer";
import Login from "./page/loginpage/Login";
import SignUp from "./page/signUp/Signup";
import SignIn from "./page/signIn/SignIn";
import ResetPassword from "./page/restPassword/resetPassword";
import Navbar from "./component/Navbar";
import Admin from "./page/Admin/Admin";
import Checkout from "./component/checkoutpage/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PostCard from "./component/postcardsflyer/PostCard";
import Sign from "./component/signbanner&poster/Sign";
import Labels from "./component/label,sticker&packaging/Labels";
import Wedding from "./component/Wedding/Wedding";
import MyWishlist from "./component/checkoutpage/MyWishlist";
import Business from "./page/businessLayout";
import HomeAndGiftBanner from "./component/HomeAndGifts/Banner";
// import Contactdetails from "./component/checkoutpage/Contactdetails";
import CartCard from "./component/marketingmaterial/CartCard";

import HomeAndGift from "./page/HomeAndGift/homeAndGift";

import BusinessCardTemplates from "./component/browsedesign/BusinessCardTemplates";
import Traditional from "./component/browsedesign/Traditional";
import Premium from "./component/browsedesign/Premium";
import Deluxe from "./component/browsedesign/Deluxe";
import DesignAndLogo from "./page/DesignAndLogo";
import ClothingAndBags from "./page/ClothingAndBags";
import Modal from "./component/browsedesign/Modal";
import { useState } from "react";
import Cart from "./component/checkoutpage/Cart";
import Successfulorder from "./component/checkoutpage/Successfulorder";
import AccountDetail from "./component/checkoutpage/MyAccount";
import Orders from "./page/Admin/orders/orders";
import CheckoutWishList from "./component/checkoutpage/Sidebar";
import AddressCard from "./component/AddressCard";
import AddAddress from "./component/checkoutpage/AddAddress";
import Error404 from "./component/checkoutpage/Error404";

import PackagingSolution from "./component/browsedesign/PackagingSolution";
import MyAccount from "./page/MyAccount/myAccount";
import Wishlist from "./component/checkoutpage/Wishlist";
import Order from "./component/MyOrder/Order";
import OrderDetails from "./component/OrderDetails.jsx/OrderDetails";

import Create_newpassword from "./page/signUp/Create_newpassword";
import { AuthProvider } from "./contextAPI/AuthContext";
import Card from "./component/bussinessCardEditor/Card";
import CanvaApp from '../OscarCanvaEditor-master/frontend/src/App'

function App() {
  const location = useLocation();
  const showNavbar =
    !location.pathname.startsWith("/admin") ||
    location.pathname === "/admin/login";

  return (
    <>
      <AuthProvider>
        {/* <Navbar cartitem="3" /> */}
        {/* {showNavbar && <Navbar cartitem={3} />} */}

        <ToastContainer />
        {showNavbar && <Navbar cartitem={3} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlists" element={<Wishlist />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<MyWishlist />} />
          <Route path="/business-card" element={<Business />} />
          <Route path="/editor" element={<Card />} />
          <Route path="/postcards-flyer" element={<PostCard />} />
          <Route path="/sign-banner" element={<Sign />} />
          <Route path="/label-sticker" element={<Labels />} />
          <Route path="/home-gifts" element={<HomeAndGift />} />

          <Route path="/wedding" element={<Wedding />} />
          <Route path="/canva-editor" element={<CanvaApp />} />
          <Route path="/clothing-bags" element={<ClothingAndBags />} />
          <Route path="/design-logo" element={<DesignAndLogo />} />
          <Route path="/test" element={<HomeAndGiftBanner />} />

          <Route path="/traditional-card" element={<Traditional />} />
          <Route path="/premium-card" element={<Premium />} />
          <Route path="/delux-card" element={<Deluxe />} />

          <Route path="/myAccount/*" element={<MyAccount />} />
          <Route path="/myOrders" element={<Order />} />
          <Route path="/orderDetails" element={<OrderDetails />} />

          <Route path="/business-browse" element={<BusinessCardTemplates />} />

          <Route path="/successfull-order" element={<Successfulorder />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/wish-list" element={<CheckoutWishList />} />
          <Route path="/address" element={<AddAddress />} />
          <Route path="/details" element={<PackagingSolution />} />
          <Route path="/create-new-password" element={<Create_newpassword />} />
          <Route path="*" element={<Error404 />} />

          {/* <Route
          path="/upload-design"
          element={}
        /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
