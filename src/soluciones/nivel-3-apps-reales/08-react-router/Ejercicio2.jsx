import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router'

const Inicio = () => <h1 className="text-3xl font-bold">🍝 Bienvenidos a La Nonna</h1>
const Menu = () => (
  <ul className="space-y-1 text-lg">
    <li>🍕 Pizza napolitana — $9000</li>
    <li>🍝 Sorrentinos — $11000</li>
    <li>🍮 Flan con dulce de leche — $4500</li>
  </ul>
)
const Reservas = () => <p className="text-lg">📞 Reservas al 11-1234-5678</p>

const estilo = ({ isActive }) =>
  `rounded-full px-4 py-1.5 font-semibold transition ${
    isActive ? 'bg-orange-500 text-white' : 'text-orange-700 hover:bg-orange-100'
  }`

function Navbar() {
  return (
    <nav className="flex gap-2 rounded-xl bg-orange-50 p-2">
      <NavLink to="/" end className={estilo}>
        Inicio
      </NavLink>
      <NavLink to="/menu" className={estilo}>
        Menú
      </NavLink>
      <NavLink to="/reservas" className={estilo}>
        Reservas
      </NavLink>
    </nav>
  )
}

function Layout() {
  return (
    <div className="flex min-h-[300px] flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="border-t pt-2 text-center text-sm text-slate-500">© La Nonna 2026</footer>
    </div>
  )
}

function Ejercicio2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservas" element={<Reservas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio2
