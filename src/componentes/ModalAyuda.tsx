// src/components/ModalAyuda.tsx


interface ModalAyudaProps {
  grupo: string
  item: string
  onClose: () => void
}

export default function ModalAyuda({ grupo, item, onClose }: ModalAyudaProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}   // cerrar al hacer clic fuera
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-96 max-w-full mx-4 border border-gray-300 relative"
        onClick={e => e.stopPropagation()}   // evitar cerrar al hacer clic dentro
      >
        {/* Barra de título estilo Windows (sutil) */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
          <span className="text-sm font-medium">Ayuda del sistema</span>
          <button
            onClick={onClose}
            className="w-8 h-8 hover:bg-white hover:bg-opacity-20 rounded flex items-center justify-center text-lg font-bold"
          >
            ×
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {item}
          </h3>
          <div className="text-gray-700 space-y-2">
            <p><strong>Módulo:</strong> {grupo}</p>
            <p className="mt-4 text-sm italic text-gray-500">
              Aquí irá la explicación detallada de esta función cuando la agreguemos.
            </p>
          </div>
        </div>

        {/* Pie (opcional) */}
        <div className="bg-gray-100 px-4 py-3 rounded-b-lg text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}