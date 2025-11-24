// src/componentes/ModalAyuda.tsx
import React from 'react'

interface ModalAyudaProps {
  grupo: string
  item: string
  onClose: () => void
}

export default function ModalAyuda({ grupo, item, onClose }: ModalAyudaProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-[560px] border border-gray-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BARRA TÍTULO WINDOWS 10/11 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Ayuda del sistema</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 hover:bg-white hover:bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold transition"
          >
            ×
          </button>
        </div>

        {/* CUERPO */}
        <div className="p-8 bg-gray-50">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">{item}</h3>
          <p className="text-lg text-gray-600 mb-6">
            <strong className="text-gray-800">Módulo →</strong> {grupo}
          </p>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Aquí aparecerá la explicación detallada de <strong>{item}</strong> cuando la carguemos desde la base de datos.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              Este contenido será único para cada opción del menú.
            </p>
          </div>
        </div>

        {/* PIE */}
        <div className="bg-gray-100 px-8 py-5 text-right border-t border-gray-300">
          <button
            onClick={onClose}
            className="px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition text-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}