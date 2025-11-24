// src/App.tsx  ←  REEMPLAZA TODO este archivo
import React, { useState } from "react";
import Inicio from "./paginas/Inicio";
import Clientes from "./paginas/Clientes";
import Proyectos from "./paginas/Proyectos";
import Proveedores from "./paginas/Proveedores";
import Cotizaciones from "./paginas/Cotizaciones";
import Presupuestos from "./paginas/Presupuestos";
import NotasVenta from "./paginas/NotasVenta";

const paginas = { Inicio, Clientes, Proyectos, Proveedores, Cotizaciones, Presupuestos, NotasVenta };

export default function App() {
  const [actual, setActual] = useState("Clientes");   // ← empieza directo en Clientes

  const Pagina = paginas[actual] || Clientes;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* MENÚ LATERAL – exactamente el que ya tienes funcionando */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="p-4 space-y-2">
          {Object.keys(paginas).map((p) => (
            <button
              key={p}
              onClick={() => setActual(p)}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                actual === p ? "bg-sky-600" : "hover:bg-slate-700"
              }`}
            >
              {p === "NotasVenta" ? "Notas de Venta" : p}
            </button>
          ))}
        </nav>
      </div>

      {/* PANEL CENTRAL */}
      <div className="flex-1 overflow-auto">
        <Pagina />
      </div>
    </div>
  );
}