import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./components/ModelViewer";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ModelViewer url="/models/muscles/FJ1383.glb" />
      </Canvas>
    </div>
  );
}
