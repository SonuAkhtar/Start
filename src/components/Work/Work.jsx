import React, { useState } from "react";
import "./work.css";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Illustration from "./Illustration";
import SocialMedia from "./SocialMedia";

const WorkType = [
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
  "Web Design",
];

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
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Product Design" ? (
            <ProductDesign />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : (
            <SocialMedia />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
