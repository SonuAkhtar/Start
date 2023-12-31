import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Iphone from "./Iphone";

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.5}>
          <Iphone />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={7} />
        </Stage>
      </Canvas>
      <span className="work_modal_desc">
        We design products with a strong focus on both world class design and
        performance ensuring your product success in market.
      </span>
    </>
  );
};

export default ProductDesign;
