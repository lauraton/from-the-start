import { ThemeProvider, useTheme } from './context/ThemeContext'

function Header() {
  const { tema, alternarTema } = useTheme()
  return (
    <header className="flex items-center justify-between rounded-xl p-3">
      <span className="font-bold">🎨 Mi sitio</span>
      <button className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-800" onClick={alternarTema}>
        {tema === 'claro' ? '🌙 Oscuro' : '☀️ Claro'}
      </button>
    </header>
  )
}

function Tarjeta({ titulo }) {
  const { tema } = useTheme()
  return (
    <div className={`rounded-xl p-4 shadow ${tema === 'claro' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
      {titulo}
    </div>
  )
}

function Pagina() {
  const { tema } = useTheme()
  return (
    <div
      className={`space-y-4 rounded-2xl p-4 transition-colors ${
        tema === 'claro' ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-white'
      }`}
    >
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
  return (
    <ThemeProvider>
      <Pagina />
    </ThemeProvider>
  )
}

export default Ejercicio1
