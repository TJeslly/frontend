import PaqueteForm from "../components/admin/PaqueteForm";
import PaquetesTable from "../components/admin/PaquetesTable";
import MapaRepartidores from "../components/admin/MapaRepartidores";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Panel de Administración</h1>
      <PaqueteForm />
      <PaquetesTable />
      <MapaRepartidores />
    </div>
  );
}
