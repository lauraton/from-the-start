/**
 * map(), key, filter y listas de componentes
 *
 * Abrí la consola (F12) y borrá la prop "key" del primer <li>: vas a ver la advertencia de React.
 * Después volvé a ponerla.
 */

const tareas = [
  { id: 'a1', texto: 'Estudiar useState', hecha: true },
  { id: 'b2', texto: 'Hacer los ejercicios de listas', hecha: false },
  { id: 'c3', texto: 'Repasar React Router', hecha: false },
]

function Tarea({ texto, hecha }) {
  return (
    <li className={`rounded-lg border px-3 py-2 ${hecha ? 'bg-emerald-50 line-through' : ''}`}>
      {hecha ? '✅' : '⬜'} {texto}
    </li>
  )
}

function Ejemplo() {
  const numbers = [1, 2, 3, 4, 5]
  const pendientes = tareas.filter((t) => !t.hecha)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div>
        <h3 className="mb-2 font-bold">1. El ejemplo del apunte</h3>
        <ul className="list-disc pl-6">
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-2 font-bold">2. Array de objetos → componentes</h3>
        <ul className="space-y-2">
          {tareas.map((tarea) => (
            // la key va en el componente, que es lo de más afuera
            <Tarea key={tarea.id} texto={tarea.texto} hecha={tarea.hecha} />
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-2 font-bold">3. filter + map</h3>
        <p className="mb-2 text-sm text-slate-500">Pendientes: {pendientes.length}</p>
        <ul className="space-y-2">
          {pendientes.map((t) => (
            <Tarea key={t.id} {...t} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Ejemplo
