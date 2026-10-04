/**
 * ⭐⭐ Navbar con NavLink + Layout con Outlet
 *
 * Vamos a armar un sitio de un restaurante con un layout compartido (navbar arriba, footer abajo).
 *
 *   1. Componente Layout: tiene <Navbar />, después un <main> con <Outlet /> adentro, y un <footer>.
 *   2. Navbar: usa NavLink (no Link) para "Inicio", "Menú" y "Reservas".
 *      El link activo tiene que verse distinto (ej: fondo naranja y texto blanco).
 *        className={({ isActive }) => isActive ? '...' : '...'}
 *      Ojo: para "/" agregá la prop "end", si no, siempre aparece activo.
 *   3. Rutas anidadas: la ruta "/" con element={<Layout />} y adentro:
 *        - <Route index element={<Inicio />} />
 *        - <Route path="menu" element={<Menu />} />
 *        - <Route path="reservas" element={<Reservas />} />
 *   4. Las 3 páginas ya están hechas abajo.
 *
 * Importá NavLink y Outlet desde 'react-router'.
 */
import { BrowserRouter, Routes, Route, Link } from 'react-router'

const Inicio = () => <h1 className="text-3xl font-bold">🍝 Bienvenidos a La Nonna</h1>
const Menu = () => (
  <ul className="space-y-1 text-lg">
    <li>🍕 Pizza napolitana — $9000</li>
    <li>🍝 Sorrentinos — $11000</li>
    <li>🍮 Flan con dulce de leche — $4500</li>
  </ul>
)
const Reservas = () => <p className="text-lg">📞 Reservas al 11-1234-5678</p>

// TODO: Navbar y Layout

function Ejercicio2() {
  return (
    <BrowserRouter>
      <nav className="mb-4 flex gap-3">
        <Link to="/">Inicio</Link>
        <Link to="/menu">Menú</Link>
        <Link to="/reservas">Reservas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio2
