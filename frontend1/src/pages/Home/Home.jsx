import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaTruck, FaUtensils, FaHotdog } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { assets } from "../../assets/assets";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero-section fade-in-element">
        <div className="hero-content">
          <h1>Delivery & Takeaway</h1>
          <p>
            Get your favorite meals delivered hot and fresh to your doorstep.
          </p>
          <button className="hero-button">
            <Link to="/login">Order Now</Link>
          </button>
        </div>
      </section>

      <section className="services-section fade-in-element">
        <h2>Our Services</h2>
        <p>
          Discover the variety of services we offer to make your food experience
          delightful.
        </p>
        <div className="services" id="service">
          <div className="service-item">
            <FaTruck className="service-icon" />
            <h3>Delivery</h3>
            <p>Fast and reliable food delivery to your doorstep.</p>
          </div>
          <div className="service-item">
            <FaUtensils className="service-icon" />
            <h3>Takeaway</h3>
            <p>Convenient pick-up options for on-the-go meals.</p>
          </div>
          <div className="service-item">
            <FaHotdog className="service-icon" />
            <h3>Hot Food</h3>
            <p>Enjoy freshly prepared hot meals anytime.</p>
          </div>
        </div>
      </section>

      <section className="about-section fade-in-element" id="about">
        <h2>About Infi Hubz</h2>
        <img src={assets.about} alt="About Infi Hubz" className="about-image" />
        <p>
          Infi Hubz is your go-to food delivery service, committed to bringing
          delicious meals right to your doorstep.
          <br /> Founded in 2020, we have quickly grown to become a favorite
          among food lovers.
          <br /> Our mission is to provide a seamless and delightful dining
          experience with a wide range of cuisines to choose from.
        </p>
      </section>

      <section className="get-in-touch fade-in-element" id="contact">
        <div className="get-in-touch-content">
          <h2>Get In Touch</h2>
          <p>
            We would like to hear from you. Reach out to Infihubz for any
            inquiries or support.
          </p>
        </div>
        <div className="contact-us-btn">
          <button>
            <Link to="/user-dashboard/contact-us">Contact Us</Link>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
