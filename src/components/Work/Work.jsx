import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="work_container">
        <div className="left">
          <ul className="list">
            <li className="listItem" text="Web Design">
              Web Design
            </li>
            <li className="listItem" text="Development">
              Development
            </li>
            <li className="listItem" text="Illustration">
              Illustration
            </li>
            <li className="listItem" text="Product design">
              Product design
            </li>
            <li className="listItem" text="Social Media">
              Social Media
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default Work;
