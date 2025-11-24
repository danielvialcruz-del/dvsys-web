import React from "react";

export default function Clientes() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-8">Gestión de Clientes</h1>

      <div className="flex gap-8 mb-8">
        <button className="px-10 py-3 bg-gray-200 border-2 border-gray-600 hover:bg-gray-300">
          Nuevo
        </button>
        <button className="px-10 py-3 bg-gray-200 border-2 border-gray-600 hover:bg-gray-300">
          Guardar
        </button>
        <button className="px-10 py-3 bg-gray-200 border-2 border-gray-600 hover:bg-gray-300">
          Eliminar
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-4xl">
        <div>
          <label className="block font-semibold mb-2">Alias:</label>
          <input className="w-full border-2 border-gray-600 px-4 py-2" />
        </div>
        <div>
          <label className="block font-semibold mb-2">Razón Social:</label>
          <input className="w-full border-2 border-gray-600 px-4 py-2" />
        </div>
        <div>
          <label className="block font-semibold mb-2">RUT:</label>
          <input className="w-full border-2 border-gray-600 px-4 py-2" />
        </div>
      </div>

      <div className="mt-12 border-2 border-gray-600">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">Alias</th>
              <th className="px-6 py-3 text-left">Razón Social</th>
              <th className="px-6 py-3 text-left">RUT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-3 border-t">MUEBLES SUR</td>
              <td className="px-6 py-3 border-t">Muebles del Sur Ltda.</td>
              <td className="px-6 py-3 border-t">76.543.210-5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}