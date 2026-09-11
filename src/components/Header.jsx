import React, { useState } from "react";

function Header({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="top-header">
      <div className="container-fluid px-3 px-lg-5">
        <div className="header-inner">
          <div className="brand-mark">
            <span className="brand-icon"><i className="bi bi-stars"></i></span>
            <div>
              <strong>Nova</strong><span>Admin</span>
            </div>
          </div>

          <div className="header-actions">
            <button className="icon-button" aria-label="Notifications">
              <i className="bi bi-bell"></i>
              <span className="notification-dot"></span>
            </button>

            <div className="profile-wrap">
              <button className="profile-button" onClick={() => setShowMenu(!showMenu)}>
                <span className="avatar">A</span>
                <span className="d-none d-sm-block text-start">
                  <small>Welcome,</small>
                  <strong>Admin</strong>
                </span>
                <i className="bi bi-chevron-down small"></i>
              </button>

              {showMenu && (
                <div className="profile-menu">
                  <div className="profile-menu-head">
                    <span className="avatar large">A</span>
                    <div>
                      <strong>Admin</strong>
                      <small>Administrator</small>
                    </div>
                  </div>
                  <button onClick={onLogout}>
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;