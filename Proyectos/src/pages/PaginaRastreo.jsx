import { useState } from "react";
import EstadoPaquete from "../components/tracking/EstadoPaquete";
import MapaRastreo from "../components/tracking/MapaRastreo";
import { usePackages } from "../state/PackagesContext";

export default function PaginaRastreo() {
  const { buscarPorGuia } = usePackages();
  const [numeroGuia, setNumeroGuia] = useState("");
  const [resultado, setResultado] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const buscar = (e) => {
    e?.preventDefault?.();
    const p = buscarPorGuia(numeroGuia.trim());
    setResultado(p || null);
    setNotFound(!p);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Rastreo de Paquete</h1>

      <form onSubmit={buscar} className="flex gap-3">
        <input
          type="text"
          placeholder="Ingrese el N° de guía"
          value={numeroGuia}
          onChange={(e) => setNumeroGuia(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Buscar
        </button>
      </form>

      {notFound && <p className="text-red-600">No se encontró el número de guía.</p>}

      {resultado && (
        <div className="space-y-4">
          <EstadoPaquete paquete={resultado} />
          <MapaRastreo paquete={resultado} />
        </div>
      )}
    </div>
  );
}
