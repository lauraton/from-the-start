import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Detalle from './pages/Detalle'
import Favoritos from './pages/Favoritos'
import NoEncontrado from './pages/NoEncontrado'
import { FavoritosProvider } from './context/FavoritosContext'

function Ejercicio1() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <div className="overflow-hidden rounded-2xl bg-slate-50">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/pokemon/:nombre" element={<Detalle />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="*" element={<NoEncontrado />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </FavoritosProvider>
  )
}

export default Ejercicio1
