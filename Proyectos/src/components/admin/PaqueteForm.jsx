// src/components/admin/PaqueteForm.jsx
import { useState } from "react";
import { usePackages } from "../../state/PackagesContext";

const initial = { id: "", remitente: "", destinatario: "", dimensiones: "" };

export default function PaqueteForm() {
  const { crear } = usePackages();
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.remitente || !form.destinatario) {
      setError("Completa N° Guía, Remitente y Destinatario.");
      return;
    }
    crear({
      ...form,
      estado: "Creado",
      ubicacion: { lat: 4.65, lng: -74.08 },
      historial: [
        {
          ts: new Date().toISOString().slice(0, 16).replace("T", " "),
          evento: "Creado",
        },
      ],
    });
    setForm(initial);
    setError("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 p-4 rounded-2xl border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="id" value={form.id} onChange={onChange} placeholder="N° Guía" className="border p-2 rounded-lg" />
        <input name="dimensiones" value={form.dimensiones} onChange={onChange} placeholder="Dimensiones (LxAxH)" className="border p-2 rounded-lg" />
        <input name="remitente" value={form.remitente} onChange={onChange} placeholder="Remitente" className="border p-2 rounded-lg" />
        <input name="destinatario" value={form.destinatario} onChange={onChange} placeholder="Destinatario" className="border p-2 rounded-lg" />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Guardar</button>
    </form>
  );
}
