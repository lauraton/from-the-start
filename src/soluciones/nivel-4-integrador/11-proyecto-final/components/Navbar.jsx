import { NavLink } from 'react-router'
import { useFavoritos } from '../context/FavoritosContext'

const estilo = ({ isActive }) =>
  `rounded-full px-3 py-1 font-semibold transition ${isActive ? 'bg-white text-red-600' : 'hover:bg-red-500'}`

function Navbar() {
  const { favoritos } = useFavoritos()

  return (
    <nav className="flex items-center gap-2 bg-red-600 px-4 py-3 text-white">
      <span className="mr-auto text-xl font-extrabold">🔴 Pokédex</span>
      <NavLink to="/" end className={estilo}>
        Inicio
      </NavLink>
      <NavLink to="/favoritos" className={estilo}>
        Favoritos ({favoritos.length})
      </NavLink>
    </nav>
  )
}

export default Navbar
