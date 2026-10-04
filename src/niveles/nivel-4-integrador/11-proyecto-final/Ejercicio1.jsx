/**
 * ⭐⭐⭐ Proyecto final guiado: Pokédex
 *
 * Abrí el README.md de esta carpeta: tiene las 6 etapas con checklist.
 * Este archivo es el "App" del proyecto: el BrowserRouter, las rutas y (en la etapa 6) el Provider.
 *
 * Archivos que vas a tocar:
 *   components/Navbar.jsx · components/PokemonCard.jsx
 *   hooks/useFetch.js · context/FavoritosContext.jsx
 *   pages/Inicio.jsx · pages/Detalle.jsx · pages/Favoritos.jsx · pages/NoEncontrado.jsx
 *
 * Ya funciona (con páginas vacías). Andá completando etapa por etapa y mirando el resultado acá abajo.
 */
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Detalle from './pages/Detalle'
import Favoritos from './pages/Favoritos'
// import NoEncontrado from './pages/NoEncontrado'
// import { FavoritosProvider } from './context/FavoritosContext'

function Ejercicio1() {
  return (
    // TODO etapa 6: envolver con <FavoritosProvider>
    <BrowserRouter>
      <div className="overflow-hidden rounded-2xl bg-slate-50">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pokemon/:nombre" element={<Detalle />} />
            <Route path="/favoritos" element={<Favoritos />} />
            {/* TODO etapa 1: ruta 404 */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Ejercicio1
