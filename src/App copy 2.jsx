// App.jsx
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./components/ModelViewer";
import GroupSelector from "./components/GroupSelector";
import BentoGrid from "./components/BentoGrid";
import DetailPanel from "./components/panels/DetailPanel";

export default function App() {
  const [metaData, setMetaData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    fetch("/meta.json")
      .then((res) => res.json())
      .then((data) => setMetaData(data))
      .catch((err) => console.error("Fehler beim Laden von meta.json", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-ui-bg text-white">
      {/* Sidebar Panel */}
     <aside className="md:w-80 w-full max-h-screen overflow-y-auto bg-ui-panel p-4 backdrop-blur-sm border-r border-white/10">
  <h1 className="text-2xl font-bold mb-4 text-brand-blue">🧠 BlueBody 3D</h1>

  <GroupSelector selectedGroup={selectedGroup} onSelectGroup={setSelectedGroup} />

  {selectedGroup !== "all" && (
  <div className="max-h-[60vh] overflow-y-auto">
    <BentoGrid
      metaData={metaData}
      selectedGroup={selectedGroup}
      onClickEntry={setSelectedEntry}
    />
  </div>
)}

  <DetailPanel
    selectedEntry={selectedEntry}
    onClose={() => setSelectedEntry(null)}
    onAddToSet={(entry) => {
      console.log("🔹 Hinzugefügt:", entry);
    }}
  />
</aside>

      {/* 3D-Canvas Bereich */}
<main className="relative flex-1 bg-ui-bg border border-red-500">
  <div className="absolute inset-0 z-0 border border-blue-500">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      onCreated={() => console.log("🎥 Canvas erstellt")}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <ModelViewer url="/models/muscles/FJ1401.glb" />
    </Canvas>
  </div>
</main>
    </div>
  );
}
