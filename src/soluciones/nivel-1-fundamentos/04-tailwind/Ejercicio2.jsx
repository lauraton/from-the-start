const destinos = [
  { id: 1, nombre: 'Bariloche', pais: 'Argentina', emoji: '🏔️', fondo: 'bg-sky-100' },
  { id: 2, nombre: 'Cusco', pais: 'Perú', emoji: '🦙', fondo: 'bg-amber-100' },
  { id: 3, nombre: 'Florianópolis', pais: 'Brasil', emoji: '🏖️', fondo: 'bg-emerald-100' },
  { id: 4, nombre: 'Tokio', pais: 'Japón', emoji: '🗼', fondo: 'bg-rose-100' },
  { id: 5, nombre: 'Roma', pais: 'Italia', emoji: '🏛️', fondo: 'bg-orange-100' },
  { id: 6, nombre: 'Reikiavik', pais: 'Islandia', emoji: '🌌', fondo: 'bg-indigo-100' },
]

function Ejercicio2() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-extrabold md:text-4xl">Destinos 2026</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {destinos.map((d) => (
          <article
            key={d.id}
            className={`${d.fondo} cursor-pointer rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl`}
          >
            <p className="text-6xl">{d.emoji}</p>
            <h3 className="mt-3 text-xl font-bold">{d.nombre}</h3>
            <p className="text-slate-500">{d.pais}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Ejercicio2
