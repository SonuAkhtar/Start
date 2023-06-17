import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar_container">
        <div className="links">
          <div className="nav_logo">LOGO</div>
          <ul className="list">
            <li className="listItem">
              <a href="#work">Works</a>
            </li>
            <li className="listItem">
              <a href="#contact">Contact</a>
            </li>{" "}
            <li className="listItem">
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <img
            src="../public/images/search.png"
            alt="search"
            className="icon"
          />
          <button className="">Contact Now</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
