import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";

import { UserProvider } from "./context/UserContext";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import Login from "./components/LoginPopup/Login";
import Signup from "./components/LoginPopup/Signup";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const App = () => {
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="app">
        {/* <Navbar  /> */}
        <div className="new">
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup/>}/>
              {/* <Route path="/cart" element={<Cart />} /> */}
              {/* <Route path="/order" element={<PlaceOrder />} /> */}
              {/* <Route path="/explore-menu" element={<ExploreMenuPage />} /> */}
              {/* <Route path="/contact-us" element={<ContactUs />} /> */}
              <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
              <Route path="/user-dashboard/*" element={<UserDashboard />} />
            </Routes>
          </UserProvider>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
