function TarjetaPerfil({ nombre, rol, avatar, online = false }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
      <div className="relative">
        <span className="text-5xl">{avatar}</span>
        <span
          className={`absolute right-0 bottom-0 h-3 w-3 rounded-full ring-2 ring-white ${
            online ? 'bg-emerald-500' : 'bg-slate-300'
          }`}
        />
      </div>
      <div>
        <h3 className="font-bold">{nombre}</h3>
        <p className="text-sm text-slate-500">{rol}</p>
        <p className={`text-xs ${online ? 'text-emerald-600' : 'text-slate-400'}`}>
          {online ? 'En línea' : 'Desconectado'}
        </p>
      </div>
    </div>
  )
}

export default TarjetaPerfil
