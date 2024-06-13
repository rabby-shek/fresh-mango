import React from "react";
import BrandLogo from "../../assets/images/fresh-mango-logo.png";
const Header = () => {
  return (
    <header className="header section-padding">
      <div className="brand-logo-container">
        <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-element">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-button-container">
        <button className="header-purchase-btn">Purchase Now</button>
      </div>
    </header>
  );
};

export default Header;
