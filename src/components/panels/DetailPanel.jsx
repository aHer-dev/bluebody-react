// src/components/panels/DetailPanel.jsx
import React from "react";
import clsx from "clsx"; // optional, für Klassenlogik

export default function DetailPanel({ selectedEntry, onClose, onAddToSet }) {
  // Wenn kein Eintrag ausgewählt → nichts anzeigen
  if (!selectedEntry) return null;

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-full w-[300px] md:w-[400px] bg-black/80 text-white z-50 shadow-xl border-l border-white/10 transition-transform duration-300",
        "backdrop-blur-lg",
        selectedEntry ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-blue-400">
            {selectedEntry.labels?.en || "Unnamed"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {/* Inhalt */}
        <div className="flex-1 overflow-y-auto space-y-2 text-sm">
          <p>
            <span className="text-gray-400">ID:</span> {selectedEntry.id}
          </p>
          <p>
            <span className="text-gray-400">Group:</span>{" "}
            {selectedEntry.classification?.group || "—"}
          </p>
          <p>
            <span className="text-gray-400">System:</span>{" "}
            {selectedEntry.classification?.system || "—"}
          </p>
          <p>
            <span className="text-gray-400">Region:</span>{" "}
            {selectedEntry.classification?.region || "—"}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => onAddToSet(selectedEntry)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Zum Set hinzufügen
        </button>
      </div>
    </div>
  );
}
