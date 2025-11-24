import React, { useState } from "react";
import Clientes from "./paginas/Clientes";

export default function App() {
  const [pagina, setPagina] = useState("clientes");

  const renderPagina = () => {
    if (pagina === "clientes") return <Clientes />;
    return <Clientes />; // Placeholder para otros
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* MENÚ LATERAL – funciona al 100 % */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="p-4 space-y-2">
          <button onClick={() => setPagina("clientes")} className="w-full text-left px-4 py-3 rounded-lg bg-sky-600">
            Clientes
          </button>
          {/* Agregamos más cuando estén listos */}
        </nav>
      </div>

      {/* PANEL CENTRAL */}
      <div className="flex-1 overflow-auto">
        {renderPagina()}
      </div>
    </div>
  );
}