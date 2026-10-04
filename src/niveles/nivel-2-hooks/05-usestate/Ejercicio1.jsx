/**
 * ⭐ Contador con límites
 *
 *   1. Creá un estado "cantidad" que arranque en 0.
 *   2. Botón "−" resta 1, botón "+" suma 1, botón "Reiniciar" vuelve a 0.
 *      Usá la forma funcional del setter: setCantidad((c) => c + 1)
 *   3. No puede bajar de 0 ni pasar de 10: deshabilitá el botón que corresponda
 *      con la prop disabled={...}. (Ya tienen estilos para disabled.)
 *   4. El número se pone ROJO cuando llega a 10 y GRIS cuando es 0.
 *   5. Mostrá "¡Llegaste al máximo!" solo cuando está en 10.
 */

function Ejercicio1() {
  // TODO: estado

  const boton =
    'h-12 w-12 rounded-full bg-sky-500 text-2xl font-bold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-30'

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <button className={boton}>−</button>
        <span className="w-16 text-center text-5xl font-bold">0</span>
        <button className={boton}>+</button>
      </div>
      <button className="text-sm text-slate-500 underline">Reiniciar</button>
    </div>
  )
}

export default Ejercicio1
