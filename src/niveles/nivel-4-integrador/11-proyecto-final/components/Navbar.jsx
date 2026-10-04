// TODO etapa 1: cambiar Link por NavLink con estilo para el link activo
// TODO etapa 6: mostrar la cantidad de favoritos → "Favoritos (3)"
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="flex items-center gap-4 bg-red-600 px-4 py-3 text-white">
      <span className="text-xl font-extrabold">🔴 Pokédex</span>
      <Link to="/">Inicio</Link>
      <Link to="/favoritos">Favoritos</Link>
    </nav>
  )
}

export default Navbar
