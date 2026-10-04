import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router'

const productos = [
  { id: 1, nombre: 'Teclado mecánico', precio: 85000, emoji: '⌨️', descripcion: 'Switches rojos, retroiluminado RGB.' },
  { id: 2, nombre: 'Mouse gamer', precio: 32000, emoji: '🖱️', descripcion: '16000 DPI, 7 botones programables.' },
  { id: 3, nombre: 'Monitor 27"', precio: 320000, emoji: '🖥️', descripcion: '144 Hz, panel IPS, 2K.' },
  { id: 4, nombre: 'Auriculares', precio: 54000, emoji: '🎧', descripcion: 'Con micrófono y sonido 7.1.' },
]

function Catalogo() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {productos.map((p) => (
        <Link
          key={p.id}
          to={`/producto/${p.id}`}
          className="rounded-xl border p-4 text-center transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-5xl">{p.emoji}</p>
          <p className="font-semibold">{p.nombre}</p>
          <p className="text-slate-500">${p.precio}</p>
        </Link>
      ))}
    </div>
  )
}

function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) return <p className="text-lg">Producto no encontrado 😕</p>

  return (
    <div className="max-w-md space-y-3 rounded-2xl border p-6">
      <button className="text-sm text-slate-500" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <p className="text-7xl">{producto.emoji}</p>
      <h2 className="text-2xl font-bold">{producto.nombre}</h2>
      <p className="text-slate-600">{producto.descripcion}</p>
      <p className="text-3xl font-bold">${producto.precio}</p>
      <button
        className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-white"
        onClick={() => navigate('/gracias')}
      >
        Comprar
      </button>
    </div>
  )
}

function Gracias() {
  return (
    <div className="text-center">
      <p className="text-3xl">¡Gracias por tu compra! 🎉</p>
      <Link to="/" className="mt-3 inline-block text-sky-600 underline">
        Seguir comprando
      </Link>
    </div>
  )
}

function Ejercicio3() {
  return (
    <BrowserRouter>
      <Link to="/" className="mb-4 inline-block text-xl font-bold">
        🛒 TechStore
      </Link>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio3
