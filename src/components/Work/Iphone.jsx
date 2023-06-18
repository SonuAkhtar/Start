/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 iphone.gltf --transform
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-12-pro-05dfc991665e45c68c8b7062136c0c6e
Title: iPhone 12 Pro
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/iphone-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
        material={materials.BodyFrame}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
        material={materials.MicrophoneSpeaker}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
        material={materials.GrayGlossy2}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
        material={materials.Antenna}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.iPhone12_Pro_Body_0.geometry}
        material={materials.Body}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_PacificBlue_0.geometry}
        material={materials.PacificBlue}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_GrayGlossy_0.geometry}
        material={materials.GrayGlossy}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_FrontCamera_0.geometry}
        material={materials.FrontCamera}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_Blackmatte_0.geometry}
        material={materials.Blackmatte}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_Cameralens_0.geometry}
        material={materials.Cameralens}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Camera1_Glass_0.geometry}
        material={materials.Glass}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Flash_Flash2_0.geometry}
        material={materials.Flash2}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Flash_Flash_0.geometry}
        material={materials.Flash}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Bezel_bezel_0.geometry}
        material={materials.bezel}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.FrontCamera001_bezel001_0.geometry}
        material={materials["bezel.001"]}
        position={[0, -2.588, 2.348]}
        scale={100}
      />
      <mesh
        geometry={nodes.Screen_Wallpaper_0.geometry}
        material={materials.Wallpaper}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
      <mesh
        geometry={nodes.Apple_Logo_Logo_0.geometry}
        material={materials.Logo}
        position={[0, -2.588, 2.419]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/iphone-transformed.glb");