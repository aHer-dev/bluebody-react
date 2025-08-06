// src/components/SetUI.jsx
import { useState, useEffect } from "react"; // ⬅️ useEffect hinzufügen

export default function SetUI() {
  // Zustand für die Benutzer-Sammlung
  const [setList, setSetList] = useState([]);

  // Zustand für die geladenen Metadaten aus meta.json
  const [metaData, setMetaData] = useState([]);

  // Lädt meta.json beim ersten Rendern der Komponente
  useEffect(() => {
    fetch("/meta.json") // ← ließt aus public/meta.json
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ meta.json geladen:", data); // ← Test
        setMetaData(data); // ← speichert die Daten im Zustand
      })
      .catch((err) =>
        console.error("❌ Fehler beim Laden von meta.json:", err)
      );
  }, []); // ← nur einmal beim Start ausführen

  const addRandomItem = () => {
    const label = "Beispielstruktur " + (setList.length + 1);
    setSetList([...setList, label]);
  };

  const removeItem = (index) => {
    const newList = [...setList];
    newList.splice(index, 1);
    setSetList(newList);
  };

  return (
    <div className="bg-panel/70 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 w-full max-w-md text-white">
      <h2 className="text-lg font-semibold mb-4 text-accent">Meine Sammlung</h2>
      <button
        onClick={addRandomItem}
        className="w-full bg-accent text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Struktur hinzufügen
      </button>

      <ul className="mt-4 space-y-2">
        {setList.map((item, index) => (
          <li
            key={index}
            className="bg-black/30 rounded-xl p-2 flex justify-between items-center"
          >
            <span>{item}</span>
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
