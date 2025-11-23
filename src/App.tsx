import { useState } from 'react';
import MenuLateral from './componentes/MenuLateral';
import ModalAyuda from './componentes/ModalAyuda';
import { Outlet } from 'react-router-dom';

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tituloAyuda, setTituloAyuda] = useState('');
  const [claveNota, setClaveNota] = useState('');

  const abrirAyuda = (modulo: string, boton: string) => {
    const clave = `${modulo.toLowerCase().replace(/ /g, '_')}_${boton.toLowerCase().replace(/ /g, '_')}`;
    setClaveNota(clave);
    setTituloAyuda(`${modulo} → ${boton}`);
    setModalAbierto(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <MenuLateral abrirAyuda={abrirAyuda} />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
      <ModalAyuda
        abierto={modalAbierto}
        alCerrar={() => setModalAbierto(false)}
        titulo={tituloAyuda}
        clave={claveNota}
      />
    </div>
  );
}

export default App;