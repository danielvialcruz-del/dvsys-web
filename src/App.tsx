import React, { useState } from "react";
import Clientes from "./paginas/Clientes";

export default function App() {
  const [pagina, setPagina] = useState("clientes");

  return (
    <div className="flex h-screen bg-white">  // ← contenedor flex h-screen
      {/* MARCO LATERAL – ancho fijo, no se estira */}
      <div className="w-64 flex-shrink-0 bg-slate-800 text-white flex flex-col">  // ← w-64 flex-shrink-0
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setPagina("clientes")} 
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-700 bg-sky-600"  // ← hover limitado al botón
          >
            Clientes
          </button>
        </nav>
      </div>

      {/* MARCO CENTRAL – ocupa lo que queda, fondo gris claro */}
      <div className="flex-1 bg-gray-200 overflow-auto">  // ← bg-gray-200 para diferenciar
        {pagina === "clientes" ? <Clientes /> : <div>Selecciona un módulo</div>}
      </div>
    </div>
  );
}