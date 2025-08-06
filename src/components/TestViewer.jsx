// src/components/TestViewer.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/muscles/FJ1401.glb");
  return <primitive object={scene} />;
}

export default function TestViewer() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}
