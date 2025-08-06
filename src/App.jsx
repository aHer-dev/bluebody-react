// Wir importieren unsere neue Komponente SetUI
import SetUI from "./components/SetUI";

// Hauptkomponente der App – hier binden wir SetUI in das Hauptlayout ein
function App() {
  return (
    <main className="grid place-items-center min-h-screen bg-background text-white p-4">
      <div className="space-y-8">
        {/* Titel */}
        <h1 className="text-3xl font-bold text-accent">BlueBody 3D</h1>

        {/* Hier erscheint die Sammlungskomponente */}
        <SetUI />
      </div>
    </main>
  );
}

// Export – notwendig, damit Vite/React diese Komponente lädt
export default App;
