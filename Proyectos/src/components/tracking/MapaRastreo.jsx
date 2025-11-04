import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapaRastreo({ paquete }) {
  if (!paquete) return null;

  const center = [paquete.ubicacion.lat, paquete.ubicacion.lng];

  return (
    <div className="p-4 rounded-2xl border bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Última ubicación</h2>
      <div className="h-72 rounded-xl overflow-hidden">
        <MapContainer center={center} zoom={13} className="h-full w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>{paquete.id} — {paquete.estado}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
