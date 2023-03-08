import React from "react";
import "../style/footer.css";
import logo from "../images/cred-logo.webp";

function Footer() {
  return (
    <div className="footer">
      <div className="upper-footer max-width absolute-center">
        <img src={logo} className="header-logo " alt="zomato" />
      </div>
      <div className="social max-width">
        <a href="http://linkedin.com/in/aryavirmalik07" className="social-icon">
          <i class="fa-brands fa-linkedin cred-icon"></i>
        </a>
        <a href="mailto:aryavirmalik20@gmail.com" className="social-icon">
          <i class="fa-sharp fa-regular fa-envelope cred-icon"></i>
        </a>
        <a href="https://github.com/AryavirMalik07" className="social-icon">
          <i class="fa-brands fa-github cred-icon"></i>
        </a>
      </div>
      <div className="footer-line absolute-center">
        Made by Aryavir Malikjdj
      </div>
    </div>
  );
}

export default Footer;
