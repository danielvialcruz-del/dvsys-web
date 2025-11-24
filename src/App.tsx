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
import "./styles/menu-lateral.css";   // si no existe este archivo, no pasa nada

export default function App() {
  const [paginaActual, setPaginaActual] = useState(0);

  const modulos = [
    { nombre: "Inicio",          componente: <Inicio /> },
    { nombre: "Clientes",        componente: <Clientes /> },
    { nombre: "Proyectos",       componente: <Proyectos /> },
    { nombre: "Proveedores",     componente: <Proveedores /> },
    { nombre: "Cotizaciones",    componente: <Cotizaciones /> },
    { nombre: "Presupuestos",    componente: <Presupuestos /> },
    { nombre: "Notas de Venta",  componente: <NotasVenta /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Menú lateral */}
      <div className="w-72 bg-slate-800 text-white p-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-10 text-center">DV Sistema</h1>
        <nav className="space-y-1">
          {modulos.map((mod, i) => (
            <button
              key={i}
              onClick={() => setPaginaActual(i)}
              className={`w-full text-left px-5 py-4 rounded-lg text-lg transition-all
                ${paginaActual === i 
                  ? "bg-sky-600 font-semibold shadow-lg" 
                  : "hover:bg-slate-700"
                }`}
            >
              {mod.nombre}
            </button>
          ))}
        </nav>
      </div>

      {/* Área principal */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {modulos[paginaActual].componente}
        </div>
      </div>
    </div>
  );
}