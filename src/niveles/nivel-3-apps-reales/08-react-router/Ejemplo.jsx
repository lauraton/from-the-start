/**
 * El ejemplo del apunte: BrowserRouter, Routes, Route y Link
 *
 *   • Las páginas están en la carpeta pages/ (abrilas).
 *   • Hacé click en los links y mirá cómo cambia la URL arriba en el navegador.
 *   • Probá el link "Link roto" → no coincide con ninguna ruta, así que no se muestra nada.
 *     (En el Ejercicio 1 lo vas a arreglar con una ruta 404.)
 */
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function Ejemplo() {
  return (
    <BrowserRouter>
      <ul className="mb-4 flex gap-4 font-semibold text-sky-600">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/no-existe" className="text-slate-400">Link roto</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ejemplo
