// src/components/GroupSelector.jsx
import React from "react";

const groups = ["all", "muscles", "bones", "ligaments", "nerves", "organs"]; // kannst du später erweitern

export default function GroupSelector({ selectedGroup, onSelectGroup }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {groups.map((group) => (
        <button
          key={group}
          className={`px-3 py-1 rounded-full border 
            ${selectedGroup === group ? "bg-blue-600 text-white" : "bg-white/10 text-gray-300"} 
            hover:bg-blue-500 transition`}
          onClick={() => onSelectGroup(group)} // 🆕 Bei Klick Gruppe ändern
        >
          {group}
        </button>
      ))}
    </div>
  );
}
