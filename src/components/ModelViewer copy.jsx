// src/components/ModelViewer.jsx
import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Center, OrbitControls } from "@react-three/drei";

export default function ModelViewer({ url }) {
  // ⬇️ GLTF-Loader mit DRACO-Unterstützung
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); // WICHTIG: Pfad zu public/draco/
    loader.setDRACOLoader(dracoLoader);
  });
console.log("🔍 GLTF Scene loaded:", gltf.scene);
return (
  <>
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <primitive object={gltf.scene} scale={5} position={[0, 0, 0]} />
    <OrbitControls />
  </>
);
}
