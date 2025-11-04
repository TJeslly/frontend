import { useState } from "react";

export default function FormularioRastreo({ onBuscar }) {
  const [guia, setGuia] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!guia.trim()) return;
    onBuscar(guia.trim());
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={guia}
        onChange={(e) => setGuia(e.target.value)}
        placeholder="Ingresa N° de guía"
        className="border rounded-lg p-2 flex-1"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Buscar
      </button>
    </form>
  );
}
