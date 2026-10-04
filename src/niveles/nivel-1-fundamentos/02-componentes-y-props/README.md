# 📦 Lección 2 — Componentes y Props

## ¿Qué es un componente?

Una **pieza reutilizable de la interfaz**: puede ser chiquita (un botón) o grande (un formulario entero).
Técnicamente es **una función de JavaScript que devuelve JSX**.

```jsx
// Con function
function Saludo() {
  return <h1>¡Hola, mundo!</h1>
}
export default Saludo
```

```jsx
// Con arrow function (más conciso)
const Saludo = () => {
  return <h1>¡Hola, mundo!</h1>
}
export default Saludo
```

### Reglas
- El nombre **empieza con Mayúscula** (`Saludo`, no `saludo`). Si no, React piensa que es una etiqueta HTML.
- Se usa como una etiqueta: `<Saludo />`.
- Un archivo por componente, en la carpeta `components/` (buena práctica).

### Export / import
```jsx
// components/Boton.jsx
export default function Boton() { ... }   // export por defecto (uno por archivo)
export function Icono() { ... }           // export con nombre (pueden ser varios)

// App.jsx
import Boton, { Icono } from './components/Boton'
```

---

## Props: los "parámetros" de un componente

Las **props** son la forma en que un componente **recibe datos de su padre**. Se pasan como atributos y se reciben como argumento de la función.

```jsx
function Button({ label, onClick }) {          // ← props desestructuradas (forma recomendada)
  return <button onClick={onClick}>{label}</button>
}

function App() {
  return <Button label="Saludar" onClick={() => alert('Hola')} />
}
```

Al hacer click se ejecuta la función que `App` le pasó como prop `onClick`.

> Sin desestructurar sería: `function Button(props) { return <button>{props.label}</button> }` — funciona igual, pero hoy se prefiere desestructurar.

### Cosas que conviene saber
| Concepto | Ejemplo |
|---|---|
| Textos van entre comillas | `<Tarjeta titulo="Hola" />` |
| Todo lo demás va entre llaves | `<Tarjeta edad={21} activo={true} tags={['a','b']} />` |
| Booleano abreviado | `<Tarjeta activo />` es lo mismo que `activo={true}` |
| Valores por defecto | `function Tarjeta({ color = 'azul' })` |
| Pasar funciones | `<Boton onClick={borrar} />` (sin paréntesis! `borrar()` la ejecutaría ya) |
| `children` | lo que va **entre** las etiquetas: `<Caja><p>hola</p></Caja>` |

### ⚠️ Dos ideas que SIEMPRE preguntan
1. **Los datos fluyen de padre a hijo** (flujo unidireccional). El hijo no le puede pasar props al padre; lo que sí puede es **llamar a una función** que el padre le pasó.
2. **Las props son de solo lectura.** Un componente nunca modifica sus props. Para datos que cambian se usa **state** (lección 5).

---

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Componente `Saludo` con props
- ⭐⭐ `Ejercicio2` — Tarjetas de perfil en un archivo aparte (import/export)
- ⭐⭐⭐ `Ejercicio3` — Sistema de botones y alertas reutilizables con `children` y variantes
