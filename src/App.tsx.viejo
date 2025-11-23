import { Routes, Route, Link } from 'react-router-dom'
import { Inicio, Clientes, Proveedores, Productos, Ventas, Reportes } from './paginas'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-10">
            <h1 className="text-2xl font-bold">DVsys</h1>
            <Link to="/" className="hover:bg-indigo-600 px-4 py-2 rounded">Inicio</Link>
            <Link to="/clientes" className="hover:bg-indigo-600 px-4 py-2 rounded">Clientes</Link>
            <Link to="/proveedores" className="hover:bg-indigo-600 px-4 py-2 rounded">Proveedores</Link>
            <Link to="/productos" className="hover:bg-indigo-600 px-4 py-2 rounded">Productos</Link>
            <Link to="/ventas" className="hover:bg-indigo-600 px-4 py-2 rounded">Ventas</Link>
            <Link to="/reportes" className="hover:bg-indigo-600 px-4 py-2 rounded">Reportes</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App