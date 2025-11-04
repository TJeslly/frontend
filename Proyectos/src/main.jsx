import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import { PackagesProvider } from "./state/PackagesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PackagesProvider>
        <App />
      </PackagesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import './leafletFix.js';
