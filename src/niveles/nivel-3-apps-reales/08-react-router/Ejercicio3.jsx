/**
 * ⭐⭐⭐ Tienda con rutas dinámicas
 *
 *   1. Ruta "/" → Catalogo: muestra todos los productos. Cada uno es un <Link> a "/producto/ID".
 *   2. Ruta "/producto/:id" → Detalle:
 *        - Leé el id con useParams(). ¡Ojo! viene como STRING → convertilo con Number(id).
 *        - Buscá el producto con productos.find(...).
 *        - Si no existe → "Producto no encontrado".
 *        - Mostrá emoji, nombre, precio y descripción.
 *        - Botón "← Volver" que use useNavigate() y navigate(-1).
 *        - Botón "Comprar" que navegue a "/gracias".
 *   3. Ruta "/gracias" → "¡Gracias por tu compra! 🎉" con un Link al catálogo.
 *   4. Probá escribir a mano en la barra de direcciones: /producto/2 y /producto/99
 */
import { BrowserRouter, Routes, Route, Link } from 'react-router'

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
        <div key={p.id} className="rounded-xl border p-4 text-center">
          <p className="text-5xl">{p.emoji}</p>
          <p className="font-semibold">{p.nombre}</p>
          {/* TODO: convertir en Link a /producto/ID */}
        </div>
      ))}
    </div>
  )
}

// TODO: Detalle y Gracias

function Ejercicio3() {
  return (
    <BrowserRouter>
      <Link to="/" className="mb-4 inline-block text-xl font-bold">
        🛒 TechStore
      </Link>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        {/* TODO */}
      </Routes>
    </BrowserRouter>
  )
}

export default Ejercicio3
