// src/App.tsx
import React, { useState } from "react";
import Clientes from "./paginas/Clientes";
// Importa los otros módulos cuando los tengamos
// import Inicio from "./paginas/Inicio";
// import Proyectos from "./paginas/Proyectos";
// etc.

export default function App() {
  const [pagina, setPagina] = useState("Clientes"); // Empieza en Clientes

  const renderPagina = () => {
    if (pagina === "Clientes") return <Clientes />;
    return <Clientes />; // Placeholder hasta que tengamos los otros
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menú lateral simple – el que ya tienes */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="p-4 space-y-2">
          <button onClick={() => setPagina("Clientes")} className="w-full text-left px-4 py-3 rounded-lg bg-sky-600">
            Clientes
          </button>
          {/* Agregamos los otros cuando estén listos */}
        </nav>
      </div>

      {/* Panel central */}
      <div className="flex-1 overflow-auto">
        {renderPagina()}
      </div>
    </div>
  );
}