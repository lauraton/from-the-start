/**
 * ⭐⭐⭐ Catálogo de películas
 *
 *   1. Creá un componente <Pelicula /> que reciba titulo, anio, genero y rating, y los muestre en una tarjeta.
 *      Mostrá el rating como estrellas: '⭐'.repeat(Math.round(rating / 2))
 *   2. Filtrá las películas según la constante GENERO (si es 'Todos', mostrá todas).
 *   3. Ordená el resultado por rating de MAYOR a MENOR, sin modificar el array original.
 *   4. Mostrá un título: "Mostrando X películas de [GENERO]".
 *   5. Si no hay ninguna película de ese género, mostrá "😢 No hay películas de ese género"
 *      en vez de la grilla.
 *
 * Probá cambiar GENERO a: 'Todos', 'Ciencia ficción', 'Animación' y 'Terror' (este último no tiene ninguna).
 * (En la lección de useState vas a poder cambiar el filtro con botones. ¡Paciencia!)
 */

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

// TODO: componente Pelicula

function Ejercicio3() {
  // TODO: filtrar y ordenar
  const resultado = peliculas

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">🎬 Catálogo</h2>
      {/* TODO: título, grilla o mensaje vacío */}
    </div>
  )
}

export default Ejercicio3
