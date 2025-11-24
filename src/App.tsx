// src/App.tsx  ←  REEMPLAZA TODO con esto
import React from "react";
import Clientes from "./paginas/Clientes";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* MARCO LATERAL – oscuro */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-sky-600 font-semibold">
            Clientes
          </button>
          {/* más botones aquí cuando los tengas */}
        </nav>
      </div>

      {/* PANEL CENTRAL – gris claro para diferenciar */}
      <div className="flex-1 bg-gray-200 overflow-auto">
        <Clientes />
      </div>
    </div>
  );
}