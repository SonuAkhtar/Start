import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";

const Illustration = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Camera />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={7} />
      </Stage>
    </Canvas>
  );
};

export default Illustration;
