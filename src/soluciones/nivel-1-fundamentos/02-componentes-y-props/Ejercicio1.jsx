function Saludo({ nombre, emoji = '👋' }) {
  return (
    <p>
      ¡Hola, {nombre}! {emoji}
    </p>
  )
}

function Ejercicio1() {
  return (
    <div className="space-y-2 text-xl">
      <Saludo nombre="Ana" />
      <Saludo nombre="Bruno" />
      <Saludo nombre="Carla" emoji="🎉" />
    </div>
  )
}

export default Ejercicio1
