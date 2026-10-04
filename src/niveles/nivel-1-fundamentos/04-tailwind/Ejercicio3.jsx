/**
 * ⭐⭐⭐ Tabla de precios + bug de clases dinámicas
 *
 * PARTE A — El bug 🐛
 *   El componente "Plan" arma la clase del color así:  `bg-${color}-500`
 *   ¡Pero los botones salen SIN color! ¿Por qué? (pista: leé "No armes clases por partes" en el README).
 *   Ojo: los colores vienen en castellano ("gris", "violeta", "verde"), así que además hay que
 *   traducirlos. Arreglalo creando un objeto que mapee cada color a sus clases COMPLETAS:
 *     const estilos = { gris: 'bg-slate-500 hover:bg-slate-600', violeta: '...', verde: '...' }
 *
 * PARTE B — Diseño
 *   1. Las 3 tarjetas en fila desde md (grid md:grid-cols-3), una debajo de otra en móvil.
 *   2. El plan con destacado: true tiene un borde de 2px de su color, está un poco más grande
 *      (md:scale-105) y muestra arriba un badge "⭐ Más elegido".
 *   3. Cada característica lleva un ✓ adelante (usá map).
 *   4. El precio va grande (text-4xl font-bold) con "/mes" chiquito al lado.
 *   5. El botón ocupa todo el ancho y se oscurece con hover.
 */

const planes = [
  { id: 'basico', nombre: 'Básico', precio: 0, color: 'gris', caracteristicas: ['1 proyecto', 'Soporte por mail'] },
  { id: 'pro', nombre: 'Pro', precio: 9, color: 'violeta', destacado: true, caracteristicas: ['10 proyectos', 'Soporte 24/7', 'Dominio propio'] },
  { id: 'equipo', nombre: 'Equipo', precio: 29, color: 'verde', caracteristicas: ['Proyectos ilimitados', 'Soporte 24/7', 'Hasta 20 personas'] },
]

function Plan({ nombre, precio, color, caracteristicas }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p>${precio}/mes</p>
      <ul>{caracteristicas.join(', ')}</ul>
      {/* 🐛 esto no funciona */}
      <button className={`bg-${color}-500 mt-4 rounded-lg px-4 py-2 text-white`}>Elegir</button>
    </div>
  )
}

function Ejercicio3() {
  return (
    <div className="bg-slate-50 p-4">
      {planes.map((p) => (
        <Plan key={p.id} {...p} />
      ))}
    </div>
  )
}

export default Ejercicio3
