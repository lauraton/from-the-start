/**
 * Tu primer componente
 *
 * Un componente es una FUNCIÓN que devuelve JSX (algo parecido a HTML).
 * Leé el código de este archivo con los comentarios. Después probá:
 *   1. Cambiá el texto del <h1> y guardá (Ctrl+S). Mirá cómo se actualiza al instante → eso es el HMR.
 *   2. Tocá el botón "Sumar" varias veces y DESPUÉS cambiá el texto del <h1> otra vez.
 *      ¿Viste que el número no volvió a 0? → el HMR preserva el estado.
 */

// No te preocupes por useState todavía, lo vemos en la lección 05 😉
import { useState } from 'react'

function Ejemplo() {
  const nombre = 'Laurato'
  const [numero, setNumero] = useState(0)

  return (
    <div className="space-y-4">
      {/* Las llaves {} meten JavaScript dentro del JSX */}
      <h1 className="text-3xl font-bold">
        ¡Hola, {nombre}! 👋. Sumá cuántas veces pensaste en él hoy
      </h1>

      <p className="text-slate-600">
        Este texto sale de <code className="rounded bg-slate-100 px-1">Ejemplo.jsx</code>.
        Modificalo en VSCode y guardá.
      </p>

      <button
        className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white hover:bg-sky-600"
        onClick={() => setNumero(numero + 1)}
      >
        Sumar: {numero}
      </button>
    </div>
  )
}

// Exportamos el componente para poder usarlo en otro archivo
export default Ejemplo
