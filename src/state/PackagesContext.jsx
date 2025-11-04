// src/state/PackagesContext.jsx
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { mockPaquetes } from "../services/mockData";

const STORAGE_KEY = "paquetes_guardados";
const PackagesContext = createContext();

export function PackagesProvider({ children }) {
  // Cargar desde localStorage si existe; si no, usar mock
  const [paquetes, setPaquetes] = useState(() => {
    const guardados = localStorage.getItem(STORAGE_KEY);
    return guardados ? JSON.parse(guardados) : mockPaquetes;
  });

  // Guardar cada cambio
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(paquetes));
  }, [paquetes]);

  const actions = useMemo(
    () => ({
      // ← nombre esperado por PaqueteForm.jsx
      crear(paquete) {
        setPaquetes((prev) => [{ ...paquete }, ...prev]);
      },

      // ← nombre esperado por PaquetesTable.jsx
      cambiarEstado(id, nuevoEstado) {
        setPaquetes((prev) =>
          prev.map((p) =>
            p.id === id
              ? {
                  ...p,
                  estado: nuevoEstado,
                  historial: [
                    ...p.historial,
                    {
                      ts: new Date().toISOString().slice(0, 16).replace("T", " "),
                      evento: nuevoEstado,
                    },
                  ],
                }
              : p
          )
        );
      },

      // ← usado por PaginaRastreo.jsx
      buscarPorGuia(guia) {
        return (
          paquetes.find((p) => p.id.toLowerCase() === guia.toLowerCase()) || null
        );
      },
    }),
    [paquetes]
  );

  return (
    <PackagesContext.Provider value={{ paquetes, ...actions }}>
      {children}
    </PackagesContext.Provider>
  );
}

export const usePackages = () => useContext(PackagesContext);
