import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import icons
import "./Footer.css"; // Make sure to use this CSS file
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-about" data-aos="fade-up">
            <img
              src={assets.logo}
              alt="INFIHUBZ Logo"
              className="footer-logo"
            />
            <p>
              Bringing homemade goodness to your table. Eat well, live well with
              INFIHUBZ...!
            </p>
            <br />
            <div className="footer-social" data-aos="fade-up">
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links" data-aos="fade-left">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/cart">Delivery</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-services" data-aos="fade-left">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#calendar">Delivery</a>
              </li>
              <li>
                <a href="#todo">Take Away</a>
              </li>
              <li>
                <a href="#notes">Hot Food</a>
              </li>
            </ul>
          </div>
          <div className="footer-resources" data-aos="fade-right">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact" data-aos="fade-right">
            <h3>Contact Us</h3>
            <p>Email: infihubz.web@gmail.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} INFIHUBZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
