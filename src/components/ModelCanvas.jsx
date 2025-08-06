// src/components/ModelCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelViewer from "./ModelViewer";

export default function ModelCanvas({ modelPath }) {
  return (
    <div className="w-full h-[500px] border border-white/10 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <ModelViewer modelPath={modelPath} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
