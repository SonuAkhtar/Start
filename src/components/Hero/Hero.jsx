import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import MoonImg from "/Images/moon.png";
import "./hero.css";

const Hero = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  return (
    <section className="hero" id="hero">
      <Navbar />
      <div className="hero_container">
        <div className="left">
          <h1 className="title">Think. Make. Solve.</h1>
          <div className="weDo">
            <span className="line"></span>
            <h2 className="subtitle">What we do</h2>
          </div>
          <p className="desc">
            we enjoy creating delightful, human-centered digital experiences
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="right">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={`${mobile ? 1.5 : 2}`}>
              <MeshDistortMaterial
                color="#220737"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={MoonImg} alt="moon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
