import React from "react";
import "./hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero_container">
        <div className="left">
          <h1 className="title">Think. Make. Solve.</h1>
          <div className="weDo">
            <img
              src="../../public/images/line.png"
              alt="line"
              className="line"
            />
            <h2 className="subtitle">What we do</h2>
          </div>
          <p className="desc">
            we enjoy creating delightful, human-centered digital experiences
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="right">
          <img src="../../public/images/moon.png" alt="moon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
