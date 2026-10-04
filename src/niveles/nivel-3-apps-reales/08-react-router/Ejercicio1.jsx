/**
 * ⭐ Una página nueva + 404
 *
 *   1. Creá un componente ContactoPage (podés hacerlo en este archivo o en pages/ContactoPage.jsx)
 *      que muestre un título "📬 Contacto" y tu mail.
 *   2. Agregá la ruta "/contacto" y su <Link> en el menú.
 *   3. Creá un componente NotFound que diga "404 — Página no encontrada 🧐"
 *      y tenga un <Link> para volver al inicio.
 *   4. Agregá la ruta comodín path="*" que muestre NotFound.
 *   5. Probá el "Link roto": ahora tiene que aparecer tu 404.
 *
 * Importante: importá todo de 'react-router' (NO de 'react-router-dom').
 */
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

// TODO: ContactoPage y NotFound

function Ejercicio1() {
  return (
    <BrowserRouter>
      <ul className="mb-4 flex gap-4 font-semibold text-sky-600">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* TODO: link a contacto */}
        <li><Link to="/cualquier-cosa" className="text-slate-400">Link roto</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* TODO: rutas */}
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio1
