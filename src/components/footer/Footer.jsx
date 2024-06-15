import React from "react";
import EmailImg from "../../assets/images/footer-email.png";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section id="contact">
      <footer className="footer section-padding">
        <div className="footer-top">
          <div className="footer-top-text drop-shadow">
            <img src={EmailImg} alt="email" />
            <p>
              Sign Up to Get Updates & <br /> News About Us.
            </p>
          </div>
          <div className="footer-input-container">
            <input type="text" name="" id="" placeholder="Email Address" />
            <button className="drop-shadow">Subscribe</button>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer-bottom"></div>
        <div className="copy-right">
          Copyright © {year} MD Rabby Shek Suvo. All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
