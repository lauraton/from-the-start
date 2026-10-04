import { Link } from 'react-router'

function NoEncontrado() {
  return (
    <div className="py-10 text-center">
      <p className="text-6xl">❓</p>
      <h1 className="text-2xl font-bold">404 — Un Pokémon salvaje se llevó esta página</h1>
      <Link to="/" className="mt-2 inline-block text-red-600 underline">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NoEncontrado
