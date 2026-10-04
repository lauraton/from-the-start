/**
 * ⭐⭐ useCounter mejorado
 *
 * Creá un hook NUEVO en hooks/useContador.js (creá el archivo vos) con esta firma:
 *
 *     useContador({ inicial = 0, min = -Infinity, max = Infinity, paso = 1 } = {})
 *
 * Que devuelva: { valor, sumar, restar, reset, esMin, esMax }
 *   - sumar/restar respetan "paso" y NUNCA se pasan de min/max (Math.min / Math.max)
 *   - reset vuelve al valor inicial
 *   - esMin / esMax son booleanos (útiles para deshabilitar botones)
 *
 * Usalo en los dos componentes de abajo:
 *   - SelectorEntradas: de 1 a 6 entradas, paso 1, arranca en 1.
 *   - Volumen: de 0 a 100, paso 10, arranca en 50. Mostrá una barra con el porcentaje.
 * Deshabilitá los botones cuando se llega al límite.
 */

function SelectorEntradas() {
  // TODO: usar useContador
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-semibold">🎟️ Entradas</p>
      <div className="mt-2 flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-slate-200 disabled:opacity-30">−</button>
        <span className="text-2xl font-bold">1</span>
        <button className="h-8 w-8 rounded-full bg-slate-200 disabled:opacity-30">+</button>
      </div>
    </div>
  )
}

function Volumen() {
  // TODO: usar useContador
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-semibold">🔊 Volumen: 50%</p>
      <div className="my-2 h-3 rounded-full bg-slate-200">
        <div className="h-3 rounded-full bg-violet-500" style={{ width: '50%' }} />
      </div>
    </div>
  )
}

function Ejercicio2() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SelectorEntradas />
      <Volumen />
    </div>
  )
}

export default Ejercicio2
