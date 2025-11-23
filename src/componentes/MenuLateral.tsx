import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface MenuLateralProps {
  abrirAyuda: (modulo: string, boton: string) => void;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ abrirAyuda }) => {
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>('Proyectos');

  const secciones = [
    { titulo: 'Proyectos', items: ['Clientes', 'Proyectos', 'Proveedores', 'Cotizaciones', 'Presupuestos', 'Notas de Venta'] },
    { titulo: 'Finanzas', items: ['Cuentas', 'Cartolas', 'Conciliación'] },
    { titulo: 'Recursos Humanos', items: ['Empleados', 'Contratos', 'Previsión', 'Feriados', 'Horarios Laborales', 'Remuneraciones'] }
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-300 flex flex-col">
      {/* Cabecera con logo y título */}
      <div className="h-24 border-b border-gray-300 flex items-center px-6 gap-4">
        <img src="/logo_dv.svg" alt="Daniel Vial Muebles" className="h-16" />
        <span className="text-2xl font-semibold text-black">Daniel Vial Muebles</span>
      </div>

      {/* Acordeón con mucho aire y todo en negro */}
      <nav className="flex-1 py-6 px-4">
        {secciones.map(sec => (
          <div key={sec.titulo} className="mb-4">
            {/* Título de sección con +/− a la izquierda */}
            <button
              onClick={() => setSeccionAbierta(seccionAbierta === sec.titulo ? null : sec.titulo)}
              className="w-full flex items-center gap-3 px-4 py-3 text-black font-medium hover:bg-gray-100 rounded"
            >
              <span className="text-xl w-5">
                {seccionAbierta === sec.titulo ? '−' : '+'}
              </span>
              <span>{sec.titulo}</span>
            </button>

            {/* Items de la sección */}
            {seccionAbierta === sec.titulo && (
              <div className="mt-2">
                {sec.items.map(item => (
                  <div
                    key={item}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-black"
                  >
                    <NavLink
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="flex-1 text-left"
                    >
                      {item}
                    </NavLink>
                    <button
                      onClick={() => abrirAyuda(sec.titulo, item)}
                      className="w-8 text-center text-black font-bold"
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
  );
};

export default MenuLateral;