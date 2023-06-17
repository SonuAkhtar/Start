import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reactlogo from "./Reactlogo";

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.5}>
          <Reactlogo />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={7} />
        </Stage>
      </Canvas>
      <span className="work_modal_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit
        nostrum optio numquam, eaque eos, alias!
      </span>
    </>
  );
};

export default Development;
