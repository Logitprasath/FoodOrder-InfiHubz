import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa'; // Import icons
import './NavbarUser.css';

const NavbarUser = ({ user, cartItemCount }) => { // Add cartItemCount as a prop
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage and redirect to login
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar-user">
      <div className="navbar-user-container">
        <Link to="/user-dashboard" className="navbar-user-brand">InfiHubz.</Link>
        <ul className="navbar-user-menu">
          <li><Link to="explore-menu">Explore Menu</Link></li>
          <li><Link to="contact-us">Contact Us</Link></li>
        </ul>
        <div className=     "navbar-user-actions">
          <Link to="cart" className="navbar-cart">
            <FaShoppingCart className="navbar-cart-icon" />
            {cartItemCount > 0 && <span className="navbar-cart-badge">{cartItemCount}</span>} {/* Display item count */}
          </Link>
          {user ? (
            <>
              <span className="navbar-user-name">Hello, {user.userName}</span>
              <button onClick={handleLogout} className="navbar-logout">Logout</button>
            </>
          ) : (
            <Link to="/" className="navbar-login">
              <FaSignInAlt className="navbar-login-icon" />
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
