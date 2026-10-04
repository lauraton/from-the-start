const GENERO = 'Ciencia ficción'

const peliculas = [
  { id: 1, titulo: 'Interestelar', anio: 2014, genero: 'Ciencia ficción', rating: 8.7 },
  { id: 2, titulo: 'Coco', anio: 2017, genero: 'Animación', rating: 8.4 },
  { id: 3, titulo: 'Matrix', anio: 1999, genero: 'Ciencia ficción', rating: 8.7 },
  { id: 4, titulo: 'Toy Story', anio: 1995, genero: 'Animación', rating: 8.3 },
  { id: 5, titulo: 'Relatos salvajes', anio: 2014, genero: 'Comedia', rating: 8.1 },
  { id: 6, titulo: 'Dune', anio: 2021, genero: 'Ciencia ficción', rating: 8.0 },
  { id: 7, titulo: 'Intensamente', anio: 2015, genero: 'Animación', rating: 8.1 },
]

function Pelicula({ titulo, anio, genero, rating }) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="text-lg font-bold">{titulo}</h3>
      <p className="text-sm text-slate-500">
        {anio} · {genero}
      </p>
      <p className="mt-2">
        {'⭐'.repeat(Math.round(rating / 2))} <span className="text-sm">{rating}</span>
      </p>
    </article>
  )
}

function Ejercicio3() {
  const filtradas =
    GENERO === 'Todos' ? peliculas : peliculas.filter((p) => p.genero === GENERO)
  const resultado = [...filtradas].sort((a, b) => b.rating - a.rating)

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">🎬 Catálogo</h2>
      {resultado.length === 0 ? (
        <p className="text-lg">😢 No hay películas de ese género</p>
      ) : (
        <>
          <p className="mb-3 text-slate-500">
            Mostrando {resultado.length} películas de {GENERO}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resultado.map((p) => (
              <Pelicula key={p.id} {...p} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Ejercicio3
