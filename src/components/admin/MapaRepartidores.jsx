import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { mockRepartidores } from "../../services/mockData";

export default function MapaRepartidores() {
  const center = [4.65, -74.08];

  return (
    <div className="p-4 rounded-2xl border bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Repartidores</h2>
      <div className="h-80 rounded-xl overflow-hidden">
        <MapContainer center={center} zoom={12} className="h-full w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mockRepartidores.map((r) => (
            <Marker key={r.id} position={[r.coord.lat, r.coord.lng]}>
              <Popup>{r.nombre} ({r.id})</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
