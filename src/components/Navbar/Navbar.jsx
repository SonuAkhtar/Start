import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar_container">
        <div className="links">
          <img src="../public/images/logo.png" alt="logo" className="logo" />
          <ul className="list">
            <li className="listItem">Home</li>
            <li className="listItem">Studio</li>
            <li className="listItem">Works</li>
            <li className="listItem">Contact</li>
          </ul>
        </div>
        <div className="icons">
          <img
            src="../public/images/search.png"
            alt="search"
            className="icon"
          />
          <button className="">Hire Now</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
