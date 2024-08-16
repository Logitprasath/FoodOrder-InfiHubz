// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (/*{ setShowLogin }*/) => {
  return (
    <div className='header'>
      <div className="header-contents">
       
        <h2>Order your <br />favorite food here</h2>
        <p>
          Discover an exquisite selection of dishes curated from the best local chefs. 
          Whether you're craving a comforting classic or something new and exciting, 
          we have something to satisfy every taste. Experience the joy of home-cooked 
          meals delivered straight to your door.
        </p>
        <button>
          <Link to='explore-menu'>View Menu</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
