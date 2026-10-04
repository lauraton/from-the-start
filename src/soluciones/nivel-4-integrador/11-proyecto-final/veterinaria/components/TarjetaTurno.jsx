import { Link } from 'react-router'
import BadgeEstado from './BadgeEstado'

const emojis = { Perro: '🐶', Gato: '🐱', Otro: '🐾' }

function TarjetaTurno({ id, mascota, especie, duenio, fecha, estado }) {
  return (
    <Link to={`/turno/${id}`} className="block rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <span className="text-4xl">{emojis[especie]}</span>
        <BadgeEstado estado={estado} />
      </div>
      <h3 className="mt-2 text-lg font-bold">{mascota}</h3>
      <p className="text-sm text-slate-500">Dueño/a: {duenio}</p>
      <p className="text-sm">📅 {fecha}</p>
    </Link>
  )
}

export default TarjetaTurno
