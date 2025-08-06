// die funktionierte beim Debugging App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./components/ModelViewer";

export default function App() {
  console.log("✅ App-Komponente wurde gerendert");
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#222" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ModelViewer url="/models/test/FJ1383.glb" />
      </Canvas>
    </div>
  );
}

 