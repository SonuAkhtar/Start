/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 camera.gltf --transform
Author: Kenkento3D (https://sketchfab.com/kenkento.zapater)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/leica-m6-8bba2917f2634e91ab04b92ff20baa4b
Title: Leica M6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/camera-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.leica_black}
        position={[-2.498, 0.904, 0.512]}
        scale={0.504}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.leather}
        position={[-2.498, 0.904, 0.512]}
        scale={0.504}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.viewfinder}
        position={[-2.498, 0.904, 0.512]}
        scale={0.504}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["2nd_viewfinder"]}
        position={[-2.498, 0.904, 0.512]}
        scale={0.504}
      />
      <mesh geometry={nodes.Object_9.geometry} material={materials.summicron} />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.focus_ring}
      />
      <mesh geometry={nodes.Object_11.geometry} material={materials.f_ring} />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.front_element}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["flash.001"]}
        position={[-0.835, 0, 2.435]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh geometry={nodes.Object_16.geometry} material={materials.flash} />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.R_metal}
        position={[0.429, 2.167, -0.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.093, 0.018, 0.093]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.leica}
        position={[-0.845, 2.74, -0.045]}
        rotation={[-Math.PI / 2, -1.222, 0]}
        scale={[0.171, 0.017, 0.171]}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.material}
        position={[1.488, 2.033, 0.498]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.327, 1.199, 1.327]}
      />
    </group>
  );
}

useGLTF.preload("/camera-transformed.glb");
