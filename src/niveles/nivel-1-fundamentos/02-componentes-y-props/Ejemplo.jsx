/**
 * Componentes, props, children y funciones como props
 *
 * Mirá cómo:
 *   • Button recibe "label" y "onClick" desestructurados (como en el apunte).
 *   • Avatar tiene un valor por defecto para "tamaño".
 *   • Caja vive en otro archivo (components/Caja.jsx) y se importa.
 *   • Caja usa "children": todo lo que ponemos entre <Caja> y </Caja>.
 */
import Caja from './components/Caja'

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white">
      {label}
    </button>
  )
}

// Arrow function + valor por defecto
const Avatar = ({ emoji, tamaño = 'text-4xl' }) => <span className={tamaño}>{emoji}</span>

function Ejemplo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Caja titulo="1. Prop con función">
        <Button label="Saludar" onClick={() => alert('Hola')} />
      </Caja>

      <Caja titulo="2. Valores por defecto" color="bg-amber-50">
        <Avatar emoji="🐱" />
        <Avatar emoji="🐶" tamaño="text-7xl" />
      </Caja>

      <Caja titulo="3. Reutilizar = usar varias veces" color="bg-emerald-50">
        <div className="flex gap-2">
          <Button label="Uno" onClick={() => alert(1)} />
          <Button label="Dos" onClick={() => alert(2)} />
          <Button label="Tres" onClick={() => alert(3)} />
        </div>
      </Caja>

      <Caja titulo="4. children" color="bg-violet-50">
        <p>Este párrafo es el "children" de Caja.</p>
        <p>¡Puede ser cualquier cosa!</p>
      </Caja>
    </div>
  )
}

export default Ejemplo
