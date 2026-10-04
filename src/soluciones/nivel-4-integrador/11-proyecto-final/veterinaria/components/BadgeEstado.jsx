const colores = {
  pendiente: 'bg-amber-100 text-amber-800',
  atendido: 'bg-emerald-100 text-emerald-800',
  cancelado: 'bg-slate-200 text-slate-600',
}

function BadgeEstado({ estado }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${colores[estado]}`}>{estado}</span>
}

export default BadgeEstado
