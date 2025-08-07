// src/App.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasWrapper from "./components/CanvasWrapper";
import Sidebar from "./components/ui/Sidebar";
import GroupSelector from "./components/GroupSelector";
import BentoGrid from "./components/BentoGrid";
import InfoPanel from "./components/ui/InfoPanel";
import ModelViewer from "./components/ModelViewer";

export default function App() {

  const [metaData, setMetaData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  console.log("🧠 selectedGroup:", selectedGroup);
  console.log("🧠 selectedEntry:", selectedEntry); // ← HIER

  useEffect(() => {
    fetch("/meta.json")
      .then((res) => res.json())
      .then((data) => setMetaData(data))
      .catch((err) => console.error("❌ Fehler beim Laden von meta.json", err));
  }, []);

  useEffect(() => {
    if (!metaData.length) return;

    const seen = new Set();
    const duplicates = [];

    for (const entry of metaData) {
      if (seen.has(entry.id)) {
        duplicates.push(entry.id);
      } else {
        seen.add(entry.id);
      }
    }

    if (duplicates.length) {
      console.warn("❗ Doppelte IDs gefunden:", duplicates);
    } else {
      console.log("✅ Keine doppelten IDs.");
    }
  }, [metaData]);

  useEffect(() => {
    console.log("🧠 selectedGroup:", selectedGroup);
    console.log("🧠 selectedEntry:", selectedEntry);

    if (!metaData.length) return;

    const ids = new Set();
    const duplicates = [];

    metaData.forEach(entry => {
      if (ids.has(entry.id)) {
        duplicates.push(entry.id);
      } else {
        ids.add(entry.id);
      }
    });

    if (duplicates.length > 0) {
      console.warn("❗️ Doppelte IDs gefunden:", duplicates);
    } else {
      console.log("✅ Keine doppelten IDs.");
    }
  }, [selectedGroup, selectedEntry, metaData]);
  console.log("🧪 Modell-Daten:", selectedEntry?.model);

  return (
    <div className="flex w-screen h-screen bg-ui-bg text-white">
      <Sidebar>
        <GroupSelector
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />
        <BentoGrid
          metaData={metaData}
          selectedGroup={selectedGroup}
          onClickEntry={setSelectedEntry}
        />
      </Sidebar>

      <div className="flex-1 h-full relative">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <ModelViewer url="/models/muscles/FJ1383.glb" />
        </Canvas>

        
        <InfoPanel
          selectedEntry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      </div>
    </div>
  );
}