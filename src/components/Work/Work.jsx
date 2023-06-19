import React, { useState } from "react";
import "./work.css";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Illustration from "./Illustration";
import SocialMedia from "./SocialMedia";

const WorkType = ["Development", "Illustration", "UI/UX Design", "Mobile App"];

const Work = () => {
  const [work, setWork] = useState("Development");

  return (
    <section className="work" id="work">
      <div className="work_container">
        <div className="left">
          <ul className="list">
            {WorkType.map((work) => (
              <li
                key={work}
                className="listItem"
                text={work}
                onClick={() => setWork(work)}
              >
                {work}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          {work === "Mobile App" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "UI/UX Design" ? (
            <ProductDesign />
          ) : (
            <Illustration />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
