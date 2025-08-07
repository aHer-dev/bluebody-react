
// JSON LISTEN WORKAROUND PRÜFEN !!! DOPPELTE EIONTRÄGE ?!
// src/components/BentoGrid.jsx
import React from "react";

export default function BentoGrid({ metaData, selectedGroup, onClickEntry }) {

    const filteredData = metaData.filter(entry =>
        entry.classification?.group === selectedGroup
    );

    if (!selectedGroup || !metaData.length) {
        return (
            <div className="text-sm text-white/50 mt-4">
                Bitte wähle eine Strukturgruppe.
            </div>
        );
    }
    console.log("🧩 Grid-Daten:", filteredData);

  return (
    <div className="grid grid-cols-1 gap-3 mt-4">

          {filteredData.map((entry, index) => (
              <button
                  key={`${entry.id}-${index}`}
                  onClick={() => {
                      console.log("✅ Klick auf:", entry);
                      onClickEntry(entry);
                  }}
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-xl text-left text-sm border border-white/10 transition"
              >
                  <div className="font-semibold text-brand-blue mb-1">
                      {entry.labels?.en || entry.id}
                  </div>
                  <div className="text-white/60 text-xs">
                      Gruppe: {entry.classification?.group || "–"}
                  </div>
                  <div className="text-white/30 text-xs">ID: {entry.id}</div>
              </button>
          ))}
    </div>
  );
}
