/**
 * ⭐⭐ Cronómetro
 *
 *   1. Estados: "segundos" (número) y "corriendo" (booleano).
 *   2. Un useEffect que dependa de [corriendo]:
 *        - si corriendo es true → arrancar un setInterval que sume 1 a segundos cada 1000 ms
 *          (usá la forma funcional: setSegundos((s) => s + 1))
 *        - devolver una limpieza con clearInterval
 *   3. Botones: "▶ Iniciar" / "⏸ Pausar" (el mismo botón, cambia según corriendo) y "↺ Reiniciar".
 *   4. Mostrá el tiempo en formato mm:ss  (ej: 01:05).
 *      Pista: String(n).padStart(2, '0')
 *
 * Pregunta para pensar: ¿qué pasaría si NO limpiás el intervalo y tocás Iniciar/Pausar varias veces?
 */

function Ejercicio2() {
  // TODO

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-mono text-7xl font-bold">00:00</p>
      <div className="flex gap-3">
        <button className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-white">▶ Iniciar</button>
        <button className="rounded-lg bg-slate-200 px-5 py-2 font-semibold">↺ Reiniciar</button>
      </div>
    </div>
  )
}

export default Ejercicio2
