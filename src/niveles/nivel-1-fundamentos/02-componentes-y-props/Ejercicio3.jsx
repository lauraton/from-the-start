/**
 * ⭐⭐⭐ Mini "librería" de componentes: Boton y Alerta
 *
 * PARTE 1 — Componente Boton({ variante, tamaño, onClick, children })
 *   - variante: "primario" (azul), "peligro" (rojo) o "secundario" (gris). Por defecto "primario".
 *   - tamaño: "chico" o "grande". Por defecto "chico".
 *   - El texto del botón viene por children:  <Boton variante="peligro">Borrar</Boton>
 *   Pista: armá un objeto  const colores = { primario: 'bg-sky-500 ...', peligro: '...', ... }
 *          y usalo así:    className={`${colores[variante]} ${tamaños[tamaño]}`}
 *
 * PARTE 2 — Componente Alerta({ tipo, titulo, children })
 *   - tipo: "info" (azul, ℹ️), "exito" (verde, ✅), "error" (rojo, ❌).
 *   - Muestra el ícono, el título en negrita y el children debajo.
 *
 * PARTE 3 — Usalos:
 *   - 3 botones (uno de cada variante), uno de ellos grande.
 *   - El botón "peligro" muestra un alert('¡Borrado!') al hacer click.
 *   - 3 alertas (una de cada tipo).
 */

// TODO: Boton

// TODO: Alerta

function Ejercicio3() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">{/* TODO: botones */}</div>
      <div className="space-y-3">{/* TODO: alertas */}</div>
    </div>
  )
}

export default Ejercicio3
