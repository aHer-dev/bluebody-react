import React from "react";

export default function BentoGrid({ metaData, selectedGroup, onClickEntry }) {
  // 🆕 Filter-Logik ausgelagert vor JSX
  const filtered =
    selectedGroup === "all"
      ? metaData
      : metaData.filter(
          (entry) => entry.classification?.group === selectedGroup
        );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filtered.map((entry, index) => (
        <div
          key={`${entry.id}-${entry.model?.filename || index}`} // Eindeutiger Key
          onClick={() => onClickEntry(entry)}
          className="bg-white/5 backdrop-blur-md 
                     border border-white/10 rounded-xl 
                     p-4 text-white shadow 
                     hover:scale-[1.02] transition-all 
                     cursor-pointer"
        >
          <h3 className="text-md font-semibold text-blue-400">
            {entry.labels?.en || "Unnamed"}
          </h3>
          <p className="text-sm text-gray-400 italic">
            Gruppe: {entry.classification?.group || "?"}
          </p>
          <p className="text-xs mt-2 text-gray-300 truncate">
            ID: {entry.id}
          </p>
        </div>
      ))}
    </div>
  );
}