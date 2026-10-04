/**
 * ⭐ Tema claro / oscuro con Context
 *
 *   1. Completá context/ThemeContext.jsx (las instrucciones están ahí).
 *   2. Envolvé todo Ejercicio1 con <ThemeProvider>.
 *   3. Header: usa useTheme() y su botón llama a alternarTema.
 *      El botón dice "🌙 Oscuro" o "☀️ Claro" según el tema.
 *   4. Tarjeta y Pagina: usan useTheme() para elegir sus clases:
 *        claro  → bg-white text-slate-800
 *        oscuro → bg-slate-800 text-white   (y la Pagina bg-slate-900)
 *
 * Fijate que NINGUNO de estos componentes recibe props del tema. 🙌
 */
import { ThemeProvider, useTheme } from './context/ThemeContext'

function Header() {
  return (
    <header className="flex items-center justify-between rounded-xl p-3">
      <span className="font-bold">🎨 Mi sitio</span>
      <button className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800">🌙 Oscuro</button>
    </header>
  )
}

function Tarjeta({ titulo }) {
  return <div className="rounded-xl bg-white p-4 shadow">{titulo}</div>
}

function Pagina() {
  return (
    <div className="space-y-4 rounded-2xl bg-slate-100 p-4 transition-colors">
      <Header />
      <div className="grid grid-cols-3 gap-3">
        <Tarjeta titulo="📦 Uno" />
        <Tarjeta titulo="🎁 Dos" />
        <Tarjeta titulo="🧸 Tres" />
      </div>
    </div>
  )
}

function Ejercicio1() {
  return <Pagina />
}

export default Ejercicio1
