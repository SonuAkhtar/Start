import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <Newsletter />
      <div className="footer_container">
        <div className="left">
          <span className="logo">LOGO</span>
        </div>
        <div className="right">
          <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="copyright">Copyright 2023. All Rights Reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
