// src/App.tsx – solo estas líneas cambian
import Proyectos from "./paginas/Proyectos";  // ← nueva línea

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* MENÚ LATERAL */}
      <div className="w-64 bg-slate-800 text-white">
        {/* ... tu menú ... */}
        <button 
          onClick={() => {}} 
          className="w-full text-left px-4 py-3 rounded-lg bg-sky-600"
        >
          Proyectos  ← haz clic aquí
        </button>
      </div>

      {/* PANEL CENTRAL */}
      <div className="flex-1 overflow-auto">
        <Proyectos />   ← esto fuerza que siempre se muestre Proyectos
      </div>
    </div>
  );
}