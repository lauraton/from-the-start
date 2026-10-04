import { Link, useParams } from 'react-router'
import { useTurnos } from '../context/TurnosContext'
import BadgeEstado from '../components/BadgeEstado'

function DetalleTurno() {
  const { id } = useParams()
  const { turnos, cambiarEstado } = useTurnos()
  const turno = turnos.find((t) => t.id === Number(id))

  if (!turno) return <p className="py-8 text-center">Turno no encontrado 🔍</p>

  return (
    <div className="mx-auto max-w-md space-y-2 rounded-2xl bg-white p-6 shadow">
      <Link to="/" className="text-sm text-slate-500">
        ← Volver
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{turno.mascota}</h1>
        <BadgeEstado estado={turno.estado} />
      </div>
      <p>🐾 {turno.especie}</p>
      <p>👤 {turno.duenio}</p>
      <p>📅 {turno.fecha}</p>
      <p className="rounded-lg bg-slate-50 p-3">📝 {turno.motivo}</p>

      {turno.estado === 'pendiente' && (
        <div className="flex gap-2 pt-2">
          <button
            className="flex-1 rounded-lg bg-emerald-500 py-2 font-semibold text-white"
            onClick={() => cambiarEstado(turno.id, 'atendido')}
          >
            ✅ Marcar atendido
          </button>
          <button
            className="flex-1 rounded-lg bg-slate-200 py-2 font-semibold"
            onClick={() => cambiarEstado(turno.id, 'cancelado')}
          >
            ❌ Cancelar turno
          </button>
        </div>
      )}
    </div>
  )
}

export default DetalleTurno
