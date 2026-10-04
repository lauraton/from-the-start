/**
 * ⭐⭐ Tarjeta del clima
 *
 * Según la "temperatura", la tarjeta tiene que cambiar:
 *   - Menos de 10°  → emoji 🥶, texto "Hace frío",     fondo "#bfdbfe" (celeste)
 *   - De 10° a 24°  → emoji 🌤️, texto "Está lindo",     fondo "#bbf7d0" (verde)
 *   - 25° o más     → emoji 🥵, texto "Hace calor",     fondo "#fecaca" (rojo)
 *
 * Requisitos:
 *   1. Calculá emoji, texto y color ANTES del return (podés usar if/else ahí, ¡afuera del JSX sí se puede!).
 *   2. Aplicá el color con style={{ backgroundColor: color }}.
 *   3. Mostrá también la temperatura en Fahrenheit: F = C * 9 / 5 + 32 (redondeá con Math.round).
 *   4. Si "llueve" es true, mostrá "☔ Llevá paraguas" (con &&).
 *
 * Probá distintos valores de temperatura para comprobar los 3 casos.
 */

const temperatura = 30
const llueve = true

function Ejercicio3() {
  // TODO: calculá emoji, texto y color
  let emoji = '❓'
  let texto = '...'
  let color = 'white'

  return (
    <div className="max-w-xs rounded-2xl p-6 text-center shadow">
      <p className="text-6xl">{emoji}</p>
      <p className="mt-2 text-4xl font-bold">{temperatura}°C</p>
      {/* TODO: Fahrenheit */}
      <p className="mt-2 text-lg">{texto}</p>
      {/* TODO: paraguas */}
    </div>
  )
}

export default Ejercicio3
