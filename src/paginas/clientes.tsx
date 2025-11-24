import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://dvsys-api-1.onrender.com/clientes";

interface Cliente {
  id: number;
  alias: string;
  razon_social: string | null;
  rut: string | null;
}

export default function Clientes() {
  const [lista, setLista] = useState<Cliente[]>([]);
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  const [alias, setAlias] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [rut, setRut] = useState("");
  const [cargando, setCargando] = useState(false);

  // Cargar todos los clientes
  const cargar = async () => {
    const res = await axios.get<Cliente[]>(URL);
    setLista(res.data);
  };

  useEffect(() => {
    cargar();
  }, []);

  // Botón Nuevo
  const nuevo = () => {
    setIdSeleccionado(null);
    setAlias("");
    setRazonSocial("");
    setRut("");
  };

  // Botón Guardar
  const guardar = async () => {
    if (!alias.trim()) {
      alert("El campo Alias es obligatorio");
      return;
    }
    setCargando(true);
    try {
      if (idSeleccionado === null) {
        await axios.post(URL, { alias: alias.trim(), razon_social: razonSocial.trim() || null, rut: rut.trim() || null });
        alert("Cliente creado correctamente");
      } else {
        await axios.put(`${URL}/${idSeleccionado}`, { alias: alias.trim(), razon_social: razonSocial.trim() || null, rut: rut.trim() || null });
        alert("Cliente actualizado correctamente");
      }
      cargar();
      nuevo();
    } catch (e: any) {
      const msg = e.response?.data?.message || "";
      if (msg.includes("alias")) alert("Ya existe un cliente con ese Alias");
      else alert("Error al guardar: " + msg);
    } finally {
      setCargando(false);
    }
  };

  // Botón Eliminar
  const eliminar = async () => {
    if (!idSeleccionado) {
      alert("Selecciona un cliente para eliminar");
      return;
    }
    const cliente = lista.find(c => c.id === idSeleccionado);
    if (!confirm(`¿Eliminar al cliente "${cliente?.alias}"?`)) return;

    await axios.delete(`${URL}/${idSeleccionado}`);
    alert("Cliente eliminado");
    cargar();
    nuevo();
  };

  // Seleccionar fila
  const seleccionar = (c: Cliente) => {
    setIdSeleccionado(c.id);
    setAlias(c.alias);
    setRazonSocial(c.razon_social || "");
    setRut(c.rut || "");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Gestión de Clientes</h1>

      {/* Botones */}
      <div className="flex gap-4 mb-6">
        <button onClick={nuevo} className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700">Nuevo</button>
        <button onClick={guardar} disabled={cargando} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Guardar</button>
        <button onClick={eliminar} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Eliminar</button>
      </div>

      {/* Formulario */}
      <div className="bg-white p-6 rounded shadow mb-6 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-medium mb-1">Alias *</label>
            <input value={alias} onChange={e => setAlias(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Razón Social</label>
            <input value={razonSocial} onChange={e => setRazonSocial(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">RUT</label>
            <input value={rut} onChange={e => setRut(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Alias</th>
              <th className="px-4 py-3 text-left">Razón Social</th>
              <th className="px-4 py-3 text-left">RUT</th>
            </tr>
          </thead>
          <tbody>
            {lista.map(c => (
              <tr
                key={c.id}
                onClick={() => seleccionar(c)}
                className={`cursor-pointer hover:bg-gray-50 ${idSeleccionado === c.id ? "bg-blue-50" : ""}`}
              >
                <td className="px-4 py-3 border-t">{c.alias}</td>
                <td className="px-4 py-3 border-t">{c.razon_social || ""}</td>
                <td className="px-4 py-3 border-t">{c.rut || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}