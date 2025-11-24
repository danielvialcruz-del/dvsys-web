import React from "react";
import Clientes from "./paginas/Clientes";

export default function App() {
  return (
    <div className="flex h-screen bg-white">
      {/* MENÚ LATERAL – el que ya tienes y te gusta */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-sky-600 font-medium">
            Clientes
          </button>
        </nav>
      </div>

      {/* PANEL CENTRAL – aquí va tu formulario */}
      <div className="flex-1 overflow-auto">
        <Clientes />
      </div>
    </div>
  );
}