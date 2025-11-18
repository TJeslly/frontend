# Frontend - Gestión de Paquetes

## Descripción General  
Este proyecto corresponde al **desarrollo del Front-end** del sistema de gestión de paquetes.  
El objetivo es **construir las interfaces de usuario interactivas y responsivas** para el **panel de administración** y la **página de rastreo**, utilizando **React**.  
En esta fase, se trabaja principalmente con **estructura, diseño y datos de prueba (mock data)**, antes de la integración con el back-end.

---

## Objetivo  
Diseñar y construir una aplicación web moderna con **React**, que permita visualizar, crear y simular el rastreo de paquetes, brindando una interfaz limpia, funcional y adaptable a distintos dispositivos.

---

## Tecnologías Utilizadas

- **Librería:** React  
- **Gestor de Estado (opcional):** React Context o Zustand  
- **Estilos:** Tailwind CSS, Material-UI o CSS Modules  
- **Mapas:** Leaflet o Mapbox  
- **Peticiones HTTP:** Axios  
- **Ruteo:** React Router DOM  

---

## Estructura del Proyecto

```
/frontend
│-- /src
│   │-- /components     # Componentes reutilizables (Button, Input, Card, Map)
│   │-- /pages          # Vistas principales (AdminDashboard, PaginaRastreo)
│   │-- /services       # Comunicación con la API
│   │-- /hooks          # Custom hooks (ej. usePackages)
│   │-- /assets         # Imágenes, íconos, SVGs
│   │-- App.jsx
│   │-- main.jsx
│-- package.json
│-- vite.config.js
│-- tailwind.config.js
│-- README.md
```

---

## Configuración del Entorno

### 1. Inicializar el proyecto
Crea el proyecto con **Vite**:
```bash
npm create vite@latest frontend -- --template react
```

### 2. Instalar dependencias
```bash
# Peticiones HTTP
npm install axios

# Mapas
npm install leaflet react-leaflet

# Enrutamiento
npm install react-router-dom

# Estilos (si usas Tailwind)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Desarrollo del Panel de Administración

### 1. PaqueteForm.jsx
Formulario para registrar paquetes:
- Campos: remitente, destinatario, dimensiones, estado.
- Manejo de estado con useState.
- Validaciones básicas (campos no vacíos).

### 2. PaquetesTable.jsx
Tabla con lista de paquetes:
- Columnas: N° Guía, Remitente, Destinatario, Estado, Acciones.
- Simulación de cambio de estado local (sin conexión a API).

### 3. MapaRepartidores.jsx
- Implementación con react-leaflet.
- Uso de mockRepartidores (datos de prueba con coordenadas).
- Renderizado de un <Marker> por cada repartidor.

### 4. AdminDashboard.jsx
- Página principal del panel administrativo.
- Combina los componentes anteriores (PaqueteForm, PaquetesTable, MapaRepartidores) en una sola interfaz.

---

## Desarrollo de la Página Pública de Rastreo

### 1. FormularioRastreo.jsx
- Campo de texto para ingresar el número de guía.
- Botón de “Buscar”.
- Uso de estado para controlar la búsqueda.

### 2. EstadoPaquete.jsx
- Muestra el estado actual del paquete (En ruta, Entregado, etc.).
- Representación visual mediante íconos o línea de progreso.

### 3. MapaRastreo.jsx
- Muestra la última ubicación del paquete con un marcador en el mapa.
- Usa datos simulados (mock data).

### 4. PaginaRastreo.jsx
- Página que integra todo el flujo.
- Inicialmente muestra solo el FormularioRastreo.
- Tras una búsqueda exitosa, muestra EstadoPaquete y MapaRastreo.

---

## Pruebas y Demostración Visual

### Requerimientos de entrega:
- Repositorio con el código fuente del Front-end (/frontend).
- Despliegue online en Vercel o Netlify.
- Video demostrativo (máx. 4 minutos) mostrando:
  1. Creación de un paquete mediante el formulario.
  2. Visualización de la tabla con datos de prueba.
  3. Mapa con los marcadores de los repartidores.
  4. Flujo completo de la página de rastreo pública.

**Video de demostración:** [Enlace al video de la aplicación](https://)

**Despliegue:** (https://frontendd-git-main-jess-projects-a743565c.vercel.app)
---

## Ejecución del Proyecto

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en:
```
http://localhost:5173
```

---

## Entregables

- Código fuente del front-end.  
- Proyecto desplegado en Vercel o Netlify.  
- Video demostrativo del funcionamiento.  

---

## Autor

**Desarrollado por:** Jeslly Tellez
**Fecha:** Noviembre 2025  
**Repositorio:** [https://github.com/tuusuario/tu-repo-frontend](https://github.com/tuusuario/tu-repo-frontend)
