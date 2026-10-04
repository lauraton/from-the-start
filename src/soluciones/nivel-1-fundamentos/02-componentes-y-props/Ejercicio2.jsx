import TarjetaPerfil from './components/TarjetaPerfil'

function Ejercicio2() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <TarjetaPerfil nombre="Sofía Pérez" rol="Frontend Dev" avatar="👩‍💻" online />
      <TarjetaPerfil nombre="Martín Gómez" rol="Diseñador UX" avatar="🧑‍🎨" />
      <TarjetaPerfil nombre="Lucía Díaz" rol="Backend Dev" avatar="👩‍🔧" online />
    </div>
  )
}

export default Ejercicio2
