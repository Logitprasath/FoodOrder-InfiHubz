import React, { useState } from 'react';
import './Landing.css';

const Landing = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Nearfood Logo" />
          <span>Nearfood</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">sakegv</a></li>
          <li><a href="#">aekfsg</a></li>
          <li><a href="#">ksfma</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <div className="nav-auth">
          <a href="#" className="login-btn">Login</a>
        </div>
      </nav>
      
      <header>
        <div className="header-content">
          <h1>The Number <span>#One</span> Choice Your Hunger Solution</h1>
          <p>The number one restaurant you are looking for to quench your hunger or just want to taste delicious things.</p>
          <div className="header-buttons">
            <a href="#" className="order-btn">Order</a>
            <a href="#" className="how-to-order-btn">How to order</a>
          </div>
          <div className="chef">
            <img src="/chef.png" alt="Chef Arnold Pramono" />
            <div>
              <h3>Arnold Pramono</h3>
              <p>Chef</p>
              <p>This restaurant passed my quality test. There's no doubt about the taste. 100% recommended.</p>
            </div>
          </div>
        </div>
      </header>
      
      <section className="highlight">
        <h2>Today's Choice</h2>
        <h3>American Special Salad</h3>
        <div className="highlight-content">
          <img src="/salad.png" alt="American Special Salad" />
          <div className="highlight-options">
            <span>Extra Mayo - $0.5</span>
            <span>Sausage - $2</span>
            <span>Extra Mayo - $0.5</span>
          </div>
        </div>
        <button className="explore-menu-btn">Explore Menu</button>
      </section>

      <footer>
        <p>© 2024 Nearfood. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
