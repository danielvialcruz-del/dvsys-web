import React, { useState, useEffect } from 'react';

interface ModalAyudaProps {
  abierto: boolean;
  alCerrar: () => void;
  titulo: string;
  clave: string;
}

const ModalAyuda: React.FC<ModalAyudaProps> = ({ abierto, alCerrar, titulo, clave }) => {
  const [nota, setNota] = useState('');

  // Cargar nota guardada al abrir el modal
  useEffect(() => {
    if (abierto && clave) {
      const guardada = localStorage.getItem(`ayuda_${clave}`);
      setNota(guardada || '');
    }
  }, [abierto, clave]);

  const guardarNota = () => {
    if (nota.trim()) {
      localStorage.setItem(`ayuda_${clave}`, nota.trim());
    } else {
      localStorage.removeItem(`ayuda_${clave}`);
    }
    alCerrar();
  };

  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto">
        {/* Cabecera */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Ayuda: {titulo}
          </h3>
          <button
            onClick={alCerrar}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Cuerpo */}
        <div className="p-6">
          <textarea
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="Escribe aquí tus notas de ayuda personalizadas..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            spellCheck={false}
          />
        </div>

        {/* Pie */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={alCerrar}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={guardarNota}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            Guardar nota
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAyuda;