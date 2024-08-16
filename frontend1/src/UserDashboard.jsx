import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ExploreMenuPage from "./components/ExploreMenu/ExploreMenu";
import ContactUs from "./pages/contactus/ContactUs";
import { UserProvider } from "./context/UserContext";
import NavbarUser from "./components/Navbar/NavbarUser";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const UserDashboard = () => {

  return (
    <>
      <div className="app">
        <NavbarUser/>
        {/* <Header/> */}
        <div className="new">
          <UserProvider>
            <Routes>
              <Route path="/" element={<Header/>}/>
              <Route path="cart" element={<Cart />} />
              <Route path="explore-menu" element={<ExploreMenuPage />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="order" element={<PlaceOrder />} />
            </Routes>
          </UserProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
