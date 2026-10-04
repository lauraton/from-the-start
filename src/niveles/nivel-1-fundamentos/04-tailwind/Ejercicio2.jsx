/**
 * ⭐⭐ Galería responsive
 *
 * Con el array "destinos", armá una galería de tarjetas (usá map) que cumpla:
 *   1. Grilla: 1 columna en móvil, 2 desde md, 3 desde lg. Separación gap-4.
 *   2. Cada tarjeta: fondo de color (la propiedad "fondo" ya trae la clase completa), emoji grande,
 *      nombre en negrita y país en texto más claro. Bordes redondeados y padding.
 *   3. Al pasar el mouse: la tarjeta crece un poquito (hover:scale-105) y tiene sombra (hover:shadow-xl).
 *      No te olvides de "transition" para que sea suave.
 *   4. El título "Destinos 2026" tiene que ser text-2xl en móvil y text-4xl desde md.
 *
 * Achicá y agrandá la ventana del navegador para comprobar el responsive.
 */

const destinos = [
  { id: 1, nombre: 'Bariloche', pais: 'Argentina', emoji: '🏔️', fondo: 'bg-sky-100' },
  { id: 2, nombre: 'Cusco', pais: 'Perú', emoji: '🦙', fondo: 'bg-amber-100' },
  { id: 3, nombre: 'Florianópolis', pais: 'Brasil', emoji: '🏖️', fondo: 'bg-emerald-100' },
  { id: 4, nombre: 'Tokio', pais: 'Japón', emoji: '🗼', fondo: 'bg-rose-100' },
  { id: 5, nombre: 'Roma', pais: 'Italia', emoji: '🏛️', fondo: 'bg-orange-100' },
  { id: 6, nombre: 'Reikiavik', pais: 'Islandia', emoji: '🌌', fondo: 'bg-indigo-100' },
]

function Ejercicio2() {
  return (
    <div>
      <h2>Destinos 2026</h2>
      {/* TODO: grilla de tarjetas */}
    </div>
  )
}

export default Ejercicio2
