import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa"; // Import the icon
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={assets.logo} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          
          <li>
            <a href="#about" >About Us</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
          <a href="#contact"> Contact Us</a>
          </li>
        </ul>
        <div className="navbar-user">
          {user ? (
            <>
              <span className="navbar-user-name">Hello, {user.userName}</span>
              <button onClick={handleLogout} className="navbar-logout">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="navbar-login">
              <FaUserAlt className="navbar-login-icon" /> {/* Use the icon */}
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
