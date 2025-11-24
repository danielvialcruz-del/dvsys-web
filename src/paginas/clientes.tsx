import React from "react";

export default function Clientes() {
  return (
    <div className="p-8" style={{ transform: "scale(0.75)", transformOrigin: "top left", width: "133.33%" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-lg font-bold mb-6">Gestión de Clientes</h1>

        <div className="flex gap-6 mb-6">
          <button className="px-8 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-400 flex items-center gap-3">
            Nuevo
          </button>
          <button className="px-8 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-400 flex items-center gap-3">
            Guardar
          </button>
          <button className="px-8 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-400 flex items-center gap-3">
            Eliminar
          </button>
        </div>

        <div className="bg-white border border-gray-400 p-6 mb-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-8">
              <label className="w-32 font-medium">Alias:</label>
              <input className="flex-1 border border-gray-400 px-3 py-1" />
            </div>
            <div className="flex items-center gap-8">
              <label className="w-32 font-medium">Razón Social:</label>
              <input className="flex-1 border border-gray-400 px-3 py-1" />
            </div>
            <div className="flex items-center gap-8">
              <label className="w-32 font-medium">RUT:</label>
              <input className="flex-1 border border-gray-400 px-3 py-1" />
            </div>
          </div>
        </div>

        <div className="border border-gray-400">
          <table className="w-full">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="px-6 py-2 text-left font-medium">Alias</th>
                <th className="px-6 py-2 text-left font-medium">Razón Social</th>
                <th className="px-6 py-2 text-left font-medium">RUT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              <tr className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-2">MUEBLES SUR</td>
                <td className="px-6 py-2">Muebles del Sur Ltda.</td>
                <td className="px-6 py-2">76.543.210-5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}