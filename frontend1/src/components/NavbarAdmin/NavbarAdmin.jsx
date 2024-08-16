import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarAdmin.css";
import { assets } from "../../assets/assets";
import { FaSignOutAlt } from "react-icons/fa";

const NavbarAdmin = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    console.log("Admin logged out");

    navigate("/");
  };

  return (
    <nav className="anavbar-container">
      <div className="anavbar-logo">
        <img className="logo" src={assets.logo} alt="Logo" />
        <h1>Admin Panel</h1>
      </div>
      <div className="anavbar-actions">
        <button onClick={handleLogout} className="alogout">
          <FaSignOutAlt className="logout-icon" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
