// src/components/CanvasWrapper.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./ModelViewer";

export default function CanvasWrapper({ modelUrl }) {
  if (!modelUrl) {
    console.warn("⚠️ Kein Modell geladen – modelUrl ist null.");
    return null;
  }

  console.log("📦 Modellpfad erhalten:", modelUrl);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <ModelViewer url={modelUrl} />
    </Canvas>
  );
}
