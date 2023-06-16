import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="left"></div>
        <div className="right">
          <h1 className="title">Think outside the square space</h1>
          <div className="weDo">
            <img
              src="../../public/images/line.png"
              alt="line"
              className="line"
            />
            <h2 className="subtitle">Who we are</h2>
          </div>
          <p className="desc">
            a creative group of designers and developers with a passion for the
            arts.
          </p>
          <button className="btn">See our works</button>
        </div>
      </div>
    </section>
  );
};

export default About;
