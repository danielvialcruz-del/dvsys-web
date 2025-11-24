// src/App.tsx  ←  REEMPLAZA TODO el contenido actual por esto
import React, { useState } from "react";
import {
  Inicio,
  Clientes,
  Proyectos,
  Proveedores,
  Cotizaciones,
  Presupuestos,
  NotasVenta,
} from "./paginas";

export default function App() {
  const [modulo, setModulo] = useState<"Inicio" | "Clientes" | "Proyectos" | "Proveedores" | "Cotizaciones" | "Presupuestos" | "NotasVenta">("Inicio");

  const modulos = {
    Inicio,
    Clientes,
    Proyectos,
    Proveedores,
    Cotizaciones,
    Presupuestos,
    NotasVenta,
  };

  const ModuloActual = modulos[modulo];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* BARRA LATERAL FIJA – exactamente como tu PyQt5 */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {Object.keys(modulos).map((nombre) => (
            <button
              key={nombre}
              onClick={() => setModulo(nombre as any)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                modulo === nombre
                  ? "bg-sky-600 font-semibold"
                  : "hover:bg-slate-700"
              }`}
            >
              {nombre === "NotasVenta" ? "Notas de Venta" : nombre}
            </button>
          ))}
        </nav>
      </div>

      {/* ZONA CENTRAL – aquí aparece el formulario completo */}
      <div className="flex-1 overflow-auto">
        <ModuloActual />
      </div>
    </div>
  );
}