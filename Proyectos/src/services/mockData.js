export const mockPaquetes = [
  {
    id: "G-1001",
    remitente: "Ana Pérez",
    destinatario: "Carlos Gómez",
    dimensiones: "30x20x15",
    estado: "En ruta",
    ubicacion: { lat: 4.651, lng: -74.083 },
    historial: [
      { ts: "2025-10-27 08:10", evento: "Creado" },
      { ts: "2025-10-27 10:25", evento: "En ruta" },
    ],
  },
  {
    id: "G-1002",
    remitente: "Logi SAS",
    destinatario: "María Ríos",
    dimensiones: "10x10x10",
    estado: "Entregado",
    ubicacion: { lat: 4.68, lng: -74.05 },
    historial: [
      { ts: "2025-10-26 09:00", evento: "Creado" },
      { ts: "2025-10-26 17:20", evento: "Entregado" },
    ],
  },
];

export const mockRepartidores = [
  { id: "R-01", nombre: "Luis", coord: { lat: 4.65, lng: -74.10 } },
  { id: "R-02", nombre: "Diana", coord: { lat: 4.67, lng: -74.06 } },
  { id: "R-03", nombre: "Mauro", coord: { lat: 4.62, lng: -74.08 } },
];
