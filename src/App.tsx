import React, { useState } from "react";

function ClientesPlaceholder() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestión de Clientes</h1>
      <p>El formulario se carga aquí – prueba exitosa</p>
    </div>
  );
}

export default function App() {
  const [pagina, setPagina] = useState("clientes");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menú lateral – el que ya tienes */}
      <div className="w-64 bg-slate-800 text-white">
        <div className="p-6 text-center border-b border-slate-700">
          <h1 className="text-2xl font-bold">DV Sistema</h1>
        </div>
        <nav className="p-4 space-y-2">
          <button onClick={() => setPagina("clientes")} className="w-full text-left px-4 py-3 rounded-lg bg-sky-600">
            Clientes
          </button>
        </nav>
      </div>

      {/* Panel central */}
      <div className="flex-1 overflow-auto">
        {pagina === "clientes" ? <ClientesPlaceholder /> : <div>Selecciona un módulo</div>}
      </div>
    </div>
  );
}