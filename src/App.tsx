import { useState } from 'react'
import MenuLateral from './componentes/MenuLateral'
import PortalAyuda from './componentes/PortalAyuda'
import { Outlet } from 'react-router-dom'

export default function App() {
  const [modalData, setModalData] = useState<{ grupo: string; item: string } | null>(null)

  const abrirAyuda = (grupo: string, item: string) => {
    setModalData({ grupo, item })
  }

  const cerrarAyuda = () => {
    setModalData(null)
  }

  return (
    <>
      <MenuLateral abrirAyuda={abrirAyuda} />
      <main className="ml-80 min-h-screen bg-gray-50 p-12">
        <Outlet />
      </main>
      {modalData && (
        <PortalAyuda
          grupo={modalData.grupo}
          item={modalData.item}
          onClose={cerrarAyuda}
        />
      )}
    </>
  )
}