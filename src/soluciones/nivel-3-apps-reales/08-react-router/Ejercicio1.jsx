import { BrowserRouter, Routes, Route, Link } from 'react-router'
import HomePage from '../../../niveles/nivel-3-apps-reales/08-react-router/pages/HomePage'
import AboutPage from '../../../niveles/nivel-3-apps-reales/08-react-router/pages/AboutPage'

function ContactoPage() {
  return (
    <div className="rounded-xl bg-emerald-50 p-6">
      <h1 className="text-3xl font-bold">📬 Contacto</h1>
      <p className="mt-2">Escribime a: yo@ejemplo.com</p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="rounded-xl bg-red-50 p-6 text-center">
      <h1 className="text-3xl font-bold">404 — Página no encontrada 🧐</h1>
      <Link to="/" className="mt-3 inline-block text-sky-600 underline">
        Volver al inicio
      </Link>
    </div>
  )
}

function Ejercicio1() {
  return (
    <BrowserRouter>
      <ul className="mb-4 flex gap-4 font-semibold text-sky-600">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/cualquier-cosa" className="text-slate-400">Link roto</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio1
