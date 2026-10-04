// TODO etapa 3:
//  - Recibe { nombre, id }
//  - Es un <Link> a `/pokemon/${nombre}`
//  - Muestra la imagen: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png
//  - Muestra #id y el nombre (className="capitalize")
// TODO etapa 6: un ❤️ si es favorito

function PokemonCard({ nombre }) {
  return <div className="rounded-xl bg-white p-3 text-center shadow-sm">{nombre}</div>
}

export default PokemonCard
