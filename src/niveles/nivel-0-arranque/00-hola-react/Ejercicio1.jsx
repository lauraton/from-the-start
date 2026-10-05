/**
 * ⭐ Tarjeta de presentación
 *
 * Modificá este componente para que muestre TUS datos:
 *   1. Cambiá "Tu Nombre" por tu nombre.
 *   2. Cambiá la carrera / curso.
 *   3. Agregá un <p> nuevo con tu hobby favorito.
 *   4. Agregá un emoji que te represente al lado del nombre.
 *
 * Pista: cada vez que guardás (Ctrl+S) la vista de abajo se actualiza sola.
 * Regla de oro del JSX: un componente devuelve UN solo elemento padre (acá el <div>).
 */

function Ejercicio1() {
  return (
    <div className="max-w-sm rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-6 text-white shadow-xl">
      <h1 className="text-2xl font-bold">🥵 Laurato 🥵</h1>
      <p className="opacity-90">
        Estudiante de la Tecnicatura Superior en Desarrollo de Software Multiplataforma
      </p>
      <br />
      <h1>Hobby:</h1>
      <p>
        Mi hobby es mirarlo a los ojos y admirar su sonrisa mientras le cuento algún
        chismesito... de la persona que le gusta (así de migajero soy)
      </p>
    </div>
  )
}

export default Ejercicio1
