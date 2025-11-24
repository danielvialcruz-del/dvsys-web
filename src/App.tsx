import React from "react";
import Clientes from "./paginas/Clientes";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* MARCO LATERAL – ancho fijo, fondo oscuro */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded bg-sky-600 font-medium">
            Clientes
          </button>
          <button className="w-full text-left px-4 py-3 rounded hover:bg-slate-700">
            Proyectos
          </button>
          {/* ... otros botones */}
        </nav>
      </div>

      {/* MARCO CENTRAL – ocupa todo lo que queda */}
      <div className="flex-1 bg-gray-100 overflow-auto">
        <Clientes />
      </div>
    </div>
  );
}