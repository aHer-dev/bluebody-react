// InfoPanel.jsx
import React from "react";

export default function InfoPanel({ selectedEntry, onClose }) {
    if (!selectedEntry) return null;

    const {
        id,
        labels,
        classification,
        info = {},
    } = selectedEntry;

    return (
        <div className="absolute top-0 right-0 z-20 w-80 max-h-screen overflow-y-auto p-4 bg-ui-panel text-white rounded-bl-xl backdrop-blur-md shadow-glow">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-brand-blue">
                    {labels?.en || id}
                </h2>
                <button onClick={onClose} className="text-sm text-white/50 hover:text-white">✖</button>
            </div>

            {/* Details */}
            <div className="text-sm space-y-2">
                {classification?.group && <p><strong>Gruppe:</strong> {classification.group}</p>}
                {classification?.subgroup && classification.subgroup !== "none" && <p><strong>Subgruppe:</strong> {classification.subgroup}</p>}
                {classification?.side && classification.side !== "none" && <p><strong>Seite:</strong> {classification.side}</p>}
                {info.origin && <p><strong>Ursprung:</strong> {info.origin}</p>}
                {info.insertion && <p><strong>Ansatz:</strong> {info.insertion}</p>}
                {info.function && <p><strong>Funktion:</strong> {info.function}</p>}
            </div>

            {/* Placeholder für spätere Edit-Funktionen */}
            <div className="mt-6 text-sm opacity-40">
                🎨 Farbauswahl, Transparenz & Sammlung folgen hier...
            </div>
        </div>
    );
}
