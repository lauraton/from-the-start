import { NavLink } from 'react-router'

const estilo = ({ isActive }) =>
  `rounded-lg px-3 py-1.5 font-semibold ${isActive ? 'bg-white text-teal-700' : 'hover:bg-teal-500'}`

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center gap-2 bg-teal-600 px-4 py-3 text-white">
      <span className="mr-auto text-xl font-extrabold">🐾 Huellitas</span>
      <NavLink to="/" end className={estilo}>
        Turnos
      </NavLink>
      <NavLink to="/nuevo" className={estilo}>
        + Nuevo turno
      </NavLink>
    </nav>
  )
}

export default Navbar
