// src/components/GroupSelector.jsx
import React, { useEffect, useState } from "react";

export default function GroupSelector({ selectedGroup, onSelectGroup }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("/meta.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 meta.json geladen:", data.length, "Einträge");
        const groupSet = new Set();
        data.forEach(entry => {
          if (entry.classification?.group) {
            groupSet.add(entry.classification.group);
          }
        });
        setGroups(Array.from(groupSet).sort());
      })
      .catch(err => console.error("Fehler beim Laden der Gruppen:", err));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold mb-2 text-white/80">Strukturgruppe wählen:</h2>
      <div className="flex flex-wrap gap-2">
        {groups.map(group => (
          <button
            key={group}
            onClick={() => onSelectGroup(group)}
            className={`px-3 py-1 rounded text-sm transition
              ${selectedGroup === group
                ? 'bg-brand-blue text-black'
                : 'bg-white/10 hover:bg-white/20 text-white/80'}`}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
}
