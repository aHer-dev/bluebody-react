// src/components/ui/Sidebar.jsx
import React from "react";

export default function Sidebar({ children }) {
  return (
    <aside className="w-80 max-h-screen overflow-y-auto bg-ui-panel text-white p-4 border-r border-white/10 backdrop-blur-sm z-10">
      <h1 className="text-2xl font-bold mb-4 text-brand-blue">🧠 BlueBody 3D</h1>
      {children}
    </aside>
  );
}
