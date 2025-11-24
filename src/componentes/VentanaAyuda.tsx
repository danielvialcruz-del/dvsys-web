// src/componentes/VentanaAyuda.tsx


interface Props {
  grupo: string
  item: string
  onClose: () => void
}

export default function VentanaAyuda({ grupo, item, onClose }: Props) {
  return (
    // ESTE div es el portal que va directo al <body> y rompe cualquier contenedor
    <div className="fixed inset-0 z-[9999]">
      {/* Fondo oscuro que cubre toda la pantalla */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Ventana flotante REAL – fixed + translate */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="bg-white rounded-xl shadow-2xl border border-gray-300 w-[640px] max-w-[95vw] overflow-hidden"
          style={{ position: 'relative' }} // esto es clave
          onClick={e => e.stopPropagation()}
        >
          {/* BARRA AZUL WINDOWS */}
          <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] text-white px-7 py-5 flex justify-between items-center">
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
            <p className="text-xl text-gray-600 mb-8">
              <strong>Módulo:</strong> {grupo}
            </p>
            <hr className="border-gray-300 mb-8" />
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Aquí irá el contenido completo de ayuda para <strong>{item}</strong> cuando lo carguemos desde la base de datos.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 px-10 py-7 text-right border-t border-gray-300">
            <button 
              onClick={onClose}
              className="px-12 py-4 bg-[#0078d4] hover:bg-[#106ebe] text-white font-bold rounded-lg text-xl shadow-lg transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}