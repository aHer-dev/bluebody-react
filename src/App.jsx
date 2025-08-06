import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./components/ModelViewer";

export default function App() {
  return (
    <div
      className="bg-ui-bg text-white"
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        onCreated={() => console.log("🎥 Canvas erstellt")}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ModelViewer url="/models/test/FJ1383.glb" />
      </Canvas>
    </div>
  );
}
