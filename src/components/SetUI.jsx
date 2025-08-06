// Wir importieren das React-Feature "useState" für lokalen Zustand
import { useState } from "react";

// Hauptfunktion: SetUI ist eine React-Komponente (mit Großbuchstaben)
export default function SetUI() {
  // Wir initialisieren den Zustand: setList ist ein Array von "Strukturen" (noch leer)
  const [setList, setSetList] = useState([]);

  // Diese Funktion wird aufgerufen, wenn du auf "Struktur hinzufügen" klickst
  const addRandomItem = () => {
    const label = "Beispielstruktur " + (setList.length + 1); // Generiert einen Namen
    setSetList([...setList, label]); // Fügt den Namen zur Liste hinzu (per Spread-Operator)
  };

  // Diese Funktion wird aufgerufen, wenn du auf "Entfernen" klickst
  const removeItem = (index) => {
    const newList = [...setList]; // Kopiere die aktuelle Liste
    newList.splice(index, 1);     // Entferne das Item an der Position index
    setSetList(newList);          // Aktualisiere die Liste im Zustand
  };

  // JSX: Das, was in der App angezeigt wird
  return (
    <div className="bg-panel/70 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 w-full max-w-md text-white">
      {/* Überschrift */}
      <h2 className="text-lg font-semibold mb-4 text-accent">Meine Sammlung</h2>

      {/* Button zum Hinzufügen von Strukturen */}
      <button
        onClick={addRandomItem}
        className="w-full bg-accent text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Struktur hinzufügen
      </button>

      {/* Liste der hinzugefügten Strukturen */}
      <ul className="mt-4 space-y-2">
        {setList.map((item, index) => (
          <li
            key={index}
            className="bg-black/30 rounded-xl p-2 flex justify-between items-center"
          >
            <span>{item}</span>

            {/* Entfernen-Button */}
            <button
              onClick={() => removeItem(index)}
              className="text-sm text-secondary hover:text-orange-300"
            >
              Entfernen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
