import React, { useState } from "react";
import "../style/header.css";
import logo from "../images/cred-logo.webp";
const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  //   if hamberger is open then close else vice-versa
  const toggleMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-nav-bar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
