import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [iconClick, setIconClick] = useState(false);
  const [menuClick, setMenuClick] = useState(false);

  return (
    <section className="navbar">
      <div className="navbar_container">
        <div className="links">
          <div className={`nav_logo ${iconClick ? "clicked" : ""}`}>LOGO</div>
          <ul className={`list ${menuClick ? "active" : ""}`}>
            <li className="listItem">
              <a href="#work">Works</a>
            </li>
            <li className="listItem">
              <a href="#contact">Contact</a>
            </li>
            <li className="listItem">
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              className={`${iconClick ? "clicked" : ""}`}
            />
            <i
              className={`fa-solid fa-magnifying-glass ${
                iconClick ? "clicked" : ""
              }`}
              onClick={() => setIconClick(!iconClick)}
            ></i>
          </div>
          <button className="">Contact Now</button>

          <div className="mobile_menu" onClick={() => setMenuClick(!menuClick)}>
            <span className={`burger ${menuClick ? "" : "active"}`}>
              <i className="fa-solid fa-bars"></i>
            </span>
            <div className={`close ${menuClick ? "active" : ""}`}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
