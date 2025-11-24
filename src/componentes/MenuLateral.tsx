import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuLateralProps {
  abrirAyuda: (grupo: string, item: string) => void
}

export default function MenuLateral({ abrirAyuda }: MenuLateralProps) {
  const [abierto, setAbierto] = useState('Proyectos')

  const grupos = [
    { nombre: 'Proyectos',       items: ['Clientes','Proyectos','Proveedores','Cotizaciones','Presupuestos','Notas de Venta'] },
    { nombre: 'Finanzas',        items: ['Cuentas','Cartolas','Conciliación'] },
    { nombre: 'Recursos Humanos',items: ['Empleados','Contratos','Previsión','Feriados','Horarios Laborales','Remuneraciones'] }
  ]

  return (
    <>
      <aside className="fixed inset-y-0 left-0 w-80 bg-white border-r border-gray-300 flex flex-col z-40">
        <div style={{ height: '100px', borderBottom: '1px solid #ddd', position: 'relative' }}>
          <img src="/logo_dvsys.svg" alt="Daniel Vial Muebles" style={{ position: 'absolute', top: '-60px', left: '0px', width: '140px', height: '180px', objectFit: 'contain' }} />
          <div style={{ position: 'absolute', top: '-40px', left: '160px', fontSize: '26px', fontWeight: 'bold', color: '#666666' }}>
            Daniel Vial Muebles
          </div>
        </div>

        <nav className="flex-1 px-8 py-10 overflow-y-auto">
          {grupos.map(g => (
            <div key={g.nombre} style={{ marginBottom: '-10px' }}>
              <button
                onClick={() => setAbierto(abierto === g.nombre ? '' : g.nombre)}
                className="w-full flex items-center gap-6 text-black font-bold text-lg select-none"
                style={{ fontSize: '19px', padding: '6px 0', background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <span className="w-10 text-2xl text-center">
                  {abierto === g.nombre ? '−' : '+'}
                </span>
                {g.nombre}
              </button>

              {abierto === g.nombre && (
                <div style={{ marginLeft: '20px', marginTop: '12px' }}>
                  {g.items.map(item => (
                    <div key={item} className="flex items-center py-2 pr-12 relative">
                      <NavLink to="/" className="flex-1 text-black" style={{ fontSize: '15px' }}>
                        {item}
                      </NavLink>
                      <button
                        onClick={() => abrirAyuda(g.nombre, item)}
                        className="absolute right-0 text-gray-600 hover:text-black font-bold text-lg select-none"
                        style={{ background: 'transparent', border: 'none', width: '40px', textAlign: 'center', cursor: 'pointer' }}
                        aria-label="Ayuda sobre este módulo"
                      >
                        ?
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}