function Ejercicio1() {
  return (
    <div className="max-w-xs rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌱</span>
        <div>
          <h2 className="text-xl font-bold">Plan Verde</h2>
          <p className="text-slate-500">Ideal para empezar</p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-emerald-500 p-2 font-bold text-white transition hover:bg-emerald-600">
        Elegir plan
      </button>
    </div>
  )
}

export default Ejercicio1
