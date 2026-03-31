import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Blooming Flowers</h3>
          <p>Bringing joy with every petal and leaf.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/ourservices">Services</Link>
        </div>

        <div className="footer-social">
          <h4>Stay Connected</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="mailto:hello@bloomingflowers.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Blooming Flowers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;