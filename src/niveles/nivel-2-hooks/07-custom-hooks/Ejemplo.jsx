/**
 * useCounter: lógica reutilizable, estado independiente
 *
 *   • El hook está en hooks/useCounter.js (abrilo).
 *   • Hay DOS <Counter /> que usan el mismo hook. Tocá los botones:
 *     cada uno tiene su propio número → un custom hook comparte la LÓGICA, no el ESTADO.
 *   • El tercero usa el hook con valor inicial 100.
 */
import useCounter from './hooks/useCounter'

function Counter({ titulo, inicial }) {
  const { count, increment, decrement } = useCounter(inicial)

  return (
    <div className="rounded-xl bg-slate-50 p-4 text-center">
      <p className="text-sm text-slate-500">{titulo}</p>
      <p className="text-4xl font-bold">{count}</p>
      <div className="mt-2 flex justify-center gap-2">
        <button className="rounded bg-sky-500 px-3 py-1 text-white" onClick={increment}>
          Increment
        </button>
        <button className="rounded bg-slate-200 px-3 py-1" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

function Ejemplo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Counter titulo="Contador A" />
      <Counter titulo="Contador B" />
      <Counter titulo="Contador C (arranca en 100)" inicial={100} />
    </div>
  )
}

export default Ejemplo
