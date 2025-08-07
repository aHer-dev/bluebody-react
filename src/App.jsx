// src/App.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber"; // Stelle sicher, dass das importiert ist
import CanvasWrapper from "./components/CanvasWrapper"; // Wenn du das brauchst, ansonsten direkt Canvas nutzen
import ModelViewer from "./components/ModelViewer"; // Angenommen, das ist deine Modell-Komponente
import Sidebar from "./components/ui/Sidebar";
import GroupSelector from "./components/GroupSelector";
import BentoGrid from "./components/BentoGrid";
import InfoPanel from "./components/ui/InfoPanel";

export default function App() {
  const [metaData, setMetaData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    fetch("/meta.json")
      .then((res) => res.json())
      .then((data) => setMetaData(data))
      .catch((err) => console.error("❌ Fehler beim Laden von meta.json", err));
  }, []);

  // Deine Duplikats-Checks bleiben gleich...

  const modelUrl = selectedEntry?.model
    ? `/models/${selectedEntry.model.variants[selectedEntry.model.current].path}/${selectedEntry.model.variants[selectedEntry.model.current].filename}`
    : null; // Null, wenn nichts ausgewählt – zeigt dann leere Szene

  console.log("🧪 Modell-URL:", modelUrl);

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

      <div className="flex-1 relative">
        {/* Canvas IMMER rendern – hier direkt, oder via CanvasWrapper */}
        <Canvas
          style={{ width: "100%", height: "100%" }} // Sicherstellen, dass es den Container füllt
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {modelUrl && <ModelViewer url={modelUrl} />} {/* Nur Modell konditional */}
        </Canvas>
        <InfoPanel
          selectedEntry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      </div>
    </div>
  );
}