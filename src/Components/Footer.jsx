// src/Footer.js
import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="flex flex-col">
          <div>
            <h2>Weekly Newsletter</h2>
          </div>
          <div>
            <p>
              There are many variations of passages of lorem ipsum available.
            </p>
          </div>
        </div>
        <div className="newsletter-subscribe">
          <input type="email" placeholder="Enter Your Mail" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>📞 (+94) 11 434 7575</p>
          <p>📍 42 Lily Ave, Colombo 00600</p>
        </div>
        <div className="footer-section latest-news">
          <h3>Latest News</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem. - 5
            Minutes Ago
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem. - 5
            Minutes Ago
          </p>
        </div>
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li>Support Forums</li>
            <li>Communication</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Rules & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section customer-images">
          <h3>Customer Service</h3>
          <div className="images">
            <img src="image1.jpg" alt="Service 1" />
            <img src="image2.jpg" alt="Service 2" />
            <img src="image3.jpg" alt="Service 3" />
            <img src="image4.jpg" alt="Service 4" />
            <img src="image5.jpg" alt="Service 5" />
            <img src="image6.jpg" alt="Service 6" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 All Rights Reserved. Site By Ranga®</p>
      </div>
    </footer>
  );
};

export default Footer;
