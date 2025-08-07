// src/components/ModelViewer.jsx
import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "@react-three/drei";

export default function ModelViewer({ url }) {
  console.log("📦 URL erhalten:", url); // MUSS erscheinen in der Konsole

  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  console.log("✅ Modell geladen:", gltf);
    
  useEffect(() => {
        console.log("📥 Lade Modell aus:", url);
    }, [url]);
    
  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} />
    </>
  );
}
