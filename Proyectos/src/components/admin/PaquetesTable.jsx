import { usePackages } from "../../state/PackagesContext";

const ESTADOS = ["Creado", "En ruta", "Entregado"];

export default function PaquetesTable() {
  const { paquetes, cambiarEstado } = usePackages();

  return (
    <div className="p-4 rounded-2xl border bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Paquetes</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left border-b">
            <tr>
              <th className="p-2">N° Guía</th>
              <th className="p-2">Remitente</th>
              <th className="p-2">Destinatario</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paquetes.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.id}</td>
                <td className="p-2">{p.remitente}</td>
                <td className="p-2">{p.destinatario}</td>
                <td className="p-2">{p.estado}</td>
                <td className="p-2">
                  <select
                    className="border rounded-lg p-1"
                    value={p.estado}
                    onChange={(e) => cambiarEstado(p.id, e.target.value)}
                  >
                    {ESTADOS.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {paquetes.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={5}>
                  Sin paquetes aún. Crea uno en el formulario de arriba.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

