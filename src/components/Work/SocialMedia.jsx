import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Camera />
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default SocialMedia;
