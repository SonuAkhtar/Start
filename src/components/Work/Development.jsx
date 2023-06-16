import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reactlogo from "./Reactlogo";

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Reactlogo />
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Development;
