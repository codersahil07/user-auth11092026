import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <Link to="/dashboard" className="footer-brand">
              <span className="brand-icon"><i className="bi bi-stars"></i></span>
              <strong>Nova<span>Admin</span></strong>
            </Link>
            <p className="footer-description">
              A refined workspace designed to help teams monitor, manage and
              grow with confidence.
            </p>
            <div className="socials">
              <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Quick Links</h6>
            <Link to="/dashboard">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/category">Categeory</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Support</h6>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#help">Help Center</a>
            <a href="#security">Security</a>
          </div>

          <div className="col-lg-3">
            <h6>Stay Connected</h6>
            <p className="footer-small">Get product news and platform updates.</p>
            <div className="footer-email">
              <input type="email" placeholder="Your email" aria-label="Your email" />
              <button aria-label="Subscribe"><i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NovaAdmin. All Rights Reserved.</span>
          <span>Built for modern teams.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;