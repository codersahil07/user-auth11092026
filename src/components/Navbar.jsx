import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="main-navbar">
      <div className="container-fluid px-3 px-lg-5">
        <div className="nav-inner">
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`nav-links ${open ? "show" : ""}`}>
            <NavLink to="/dashboard" end onClick={closeMenu}>
              <i className="bi bi-grid-1x2"></i> HOME
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              <i className="bi bi-info-circle"></i> ABOUT US
            </NavLink>
            <NavLink to="/category" onClick={closeMenu}>
              <i className="bi bi-collection"></i> CATEGORY
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              <i className="bi bi-chat-dots"></i> CONTACT
            </NavLink>
          </div>

          <button className="nav-logout" onClick={onLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>LOGOUT</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;