export default function EstadoPaquete({ paquete }) {
  if (!paquete) return null;

  // Colores según estado
  const color = {
    "Creado": "bg-gray-100 text-gray-700 border-gray-300",
    "En ruta": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Entregado": "bg-green-100 text-green-800 border-green-300",
  }[paquete.estado] || "bg-gray-100 text-gray-700 border-gray-300";

  return (
    <div className="p-4 rounded-2xl border bg-white shadow space-y-2">
      <h2 className="text-lg font-semibold">Estado del paquete</h2>

      <p><span className="font-medium">N° Guía:</span> {paquete.id}</p>
      <p><span className="font-medium">Remitente:</span> {paquete.remitente}</p>
      <p><span className="font-medium">Destinatario:</span> {paquete.destinatario}</p>

      <p>
        <span className="font-medium">Estado actual:</span>{" "}
        <span className={`px-2 py-1 rounded-full border text-sm ${color}`}>
          {paquete.estado}
        </span>
      </p>

      <div>
        <h3 className="font-medium mb-1">Historial</h3>
        <ul className="text-sm list-disc pl-5">
          {paquete.historial.map((h, i) => (
            <li key={i}>{h.ts} — {h.evento}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
