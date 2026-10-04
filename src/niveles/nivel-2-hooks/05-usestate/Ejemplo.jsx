/**
 * useState en 4 situaciones
 *
 *   1. El contador del apunte.
 *   2. El bug del batching: compará "+3 (mal)" con "+3 (bien)".
 *   3. Un input controlado.
 *   4. Un array en el estado (agregar sin mutar).
 */
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className="text-3xl font-bold">Contador: {count}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button className="rounded bg-sky-500 px-3 py-1 text-white" onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button
          className="rounded bg-red-400 px-3 py-1 text-white"
          onClick={() => {
            setCount(count + 1)
            setCount(count + 1)
            setCount(count + 1)
          }}
        >
          +3 (mal)
        </button>
        <button
          className="rounded bg-emerald-500 px-3 py-1 text-white"
          onClick={() => {
            setCount((c) => c + 1)
            setCount((c) => c + 1)
            setCount((c) => c + 1)
          }}
        >
          +3 (bien)
        </button>
      </div>
    </div>
  )
}

function InputControlado() {
  const [nombre, setNombre] = useState('')
  return (
    <div>
      <input
        className="rounded border px-2 py-1"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p className="mt-2">Hola, {nombre || 'desconocido/a'} 👋 ({nombre.length} letras)</p>
    </div>
  )
}

function ListaDeAnimales() {
  const [animales, setAnimales] = useState(['🐶', '🐱'])
  const opciones = ['🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯']

  function agregar() {
    const random = opciones[Math.floor(Math.random() * opciones.length)]
    setAnimales([...animales, random]) // nuevo array, no push
  }

  return (
    <div>
      <p className="text-3xl">{animales.join(' ')}</p>
      <div className="mt-2 flex gap-2">
        <button className="rounded bg-violet-500 px-3 py-1 text-white" onClick={agregar}>
          Agregar animal
        </button>
        <button className="rounded bg-slate-200 px-3 py-1" onClick={() => setAnimales(animales.slice(0, -1))}>
          Quitar último
        </button>
      </div>
    </div>
  )
}

function Ejemplo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded-xl bg-slate-50 p-4"><Counter /></section>
      <section className="rounded-xl bg-slate-50 p-4"><InputControlado /></section>
      <section className="rounded-xl bg-slate-50 p-4 md:col-span-2"><ListaDeAnimales /></section>
    </div>
  )
}

export default Ejemplo
