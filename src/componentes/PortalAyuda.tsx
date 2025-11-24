// src/componentes/PortalAyuda.tsx

import { createPortal } from 'react-dom'

interface Props {
  grupo: string
  item: string
  onClose: () => void
}

export default function PortalAyuda({ grupo, item, onClose }: Props) {
  const portalContainer = document.getElementById('portal-root')!

  return createPortal(
    <>
      {/* Fondo oscuro que cubre toda la pantalla */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[9998]" 
        onClick={onClose}
      />

      {/* VENTANA FLOTANTE REAL – siempre centrada y encima de todo */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div 
          className="bg-white rounded-xl shadow-2xl w-[680px] max-w-[95vw] border border-gray-300 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* BARRA AZUL WINDOWS */}
          <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] text-white px-8 py-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Ayuda del sistema</h2>
            <button 
              onClick={onClose}
              className="w-12 h-12 hover:bg-white hover:bg-opacity-20 rounded-full text-3xl font-thin leading-none"
            >
              ×
            </button>
          </div>

          <div className="p-10">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{item}</h3>
            <p className="text-xl text-gray-600 mb-8"><strong>Módulo:</strong> {grupo}</p>
            <hr className="border-gray-300 mb-8" />
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aquí irá el contenido completo de ayuda para <strong>{item}</strong> cuando lo carguemos desde la base de datos.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 px-10 py-8 text-right border-t border-gray-300">
            <button 
              onClick={onClose}
              className="px-14 py-4 bg-[#0078d4] hover:bg-[#106ebe] text-white font-bold rounded-lg text-xl shadow-lg transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>,
    portalContainer
  )
}