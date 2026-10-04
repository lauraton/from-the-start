import { useState } from 'react'
import { useTurnos } from '../context/TurnosContext'
import TarjetaTurno from '../components/TarjetaTurno'

const filtros = [
  { valor: 'todos', texto: 'Todos' },
  { valor: 'pendiente', texto: 'Pendientes' },
  { valor: 'atendido', texto: 'Atendidos' },
  { valor: 'cancelado', texto: 'Cancelados' },
]

function Listado() {
  const { turnos } = useTurnos()
  const [filtro, setFiltro] = useState('todos')

  const visibles = filtro === 'todos' ? turnos : turnos.filter((t) => t.estado === filtro)

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {filtros.map((f) => (
          <button
            key={f.valor}
            onClick={() => setFiltro(f.valor)}
            className={`rounded-full px-3 py-1 text-sm ${filtro === f.valor ? 'bg-teal-600 text-white' : 'bg-white'}`}
          >
            {f.texto}
          </button>
        ))}
      </div>

      {visibles.length === 0 ? (
        <p className="py-8 text-center">No hay turnos para mostrar 🐶</p>
      ) : (
        <>
          <p className="mb-2 text-sm text-slate-500">Mostrando {visibles.length} turnos</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {visibles.map((t) => (
              <TarjetaTurno key={t.id} {...t} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Listado
