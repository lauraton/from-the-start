/**
 * ⭐⭐ Tarjetas de perfil (componente en otro archivo)
 *
 *   1. Abrí components/TarjetaPerfil.jsx (en esta misma carpeta) y completá el componente.
 *      Props: nombre, rol, avatar (emoji) y online (booleano, por defecto false).
 *   2. La tarjeta muestra el avatar grande, el nombre en negrita y el rol en gris.
 *   3. Si está online: un puntito verde y el texto "En línea". Si no: puntito gris y "Desconectado".
 *   4. Acá en Ejercicio2, importala y mostrá 3 tarjetas en una grilla.
 *      Al menos una tiene que estar online (pasá la prop "online" abreviada, sin ={true}).
 */

// TODO: importá TarjetaPerfil desde './components/TarjetaPerfil'

function Ejercicio2() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* TODO: 3 tarjetas */}
    </div>
  )
}

export default Ejercicio2
