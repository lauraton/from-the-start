# 🔢 Lección 5 — useState

## Primero: ¿qué son los Hooks?

Funciones especiales de React (introducidas en **React 16.8, 2019**) que permiten a los **componentes funcionales** tener estado, efectos y otras cosas que antes solo tenían los componentes de **clase**. Hoy casi todo React se escribe con funciones + Hooks.

**Reglas de los Hooks** (las preguntan):
1. Siempre empiezan con `use` (`useState`, `useEffect`, `useCounter`...).
2. Se llaman **en el nivel superior** del componente: nunca adentro de un `if`, un `for` o una función anidada.
3. Solo se usan dentro de **componentes** o de **custom hooks**.

### Dependencias (concepto general)
Las dependencias son **valores que determinan si un Hook se vuelve a ejecutar**.
- `useState` → usa el estado actual como dependencia **implícita**.
- `useEffect`, `useMemo`, `useCallback` → reciben un **array de dependencias explícito**.
- `useRef` → no depende de nada: su referencia es **estable** entre renders.
- Los custom hooks combinan los anteriores.

> 🆕 Con el **React Compiler** casi no hace falta declarar dependencias de `useMemo`/`useCallback` a mano, pero entenderlas sigue siendo clave para leer código existente.

---

## useState: estado local

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  //     ↑valor  ↑función para cambiarlo   ↑valor inicial

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}
```

**¿Qué pasa al hacer click?** `setCount` guarda el nuevo valor → React **vuelve a ejecutar la función del componente** (re-render) → la pantalla muestra el número nuevo.

### ¿Por qué no sirve una variable común?
```jsx
let count = 0
<button onClick={() => count++}>   // ❌ cambia la variable, pero React NO se entera y no re-renderiza
```

### ✅ Buena práctica: forma funcional del setter
Cuando el nuevo valor **depende del anterior**:
```jsx
setCount((c) => c + 1)   // ✅ siempre usa el valor más reciente
setCount(count + 1)      // ⚠️ puede fallar con varias actualizaciones seguidas (batching)
```
Ejemplo del bug:
```jsx
function sumarTres() {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)   // ¡suma 1, no 3! Las tres leen el mismo "count"
}
function sumarTresBien() {
  setCount((c) => c + 1)
  setCount((c) => c + 1)
  setCount((c) => c + 1) // suma 3 ✅
}
```

---

## Estado con objetos y arrays: ¡NUNCA mutar!

React detecta cambios comparando **referencias**. Si modificás el mismo objeto/array, React cree que no cambió nada.

```jsx
// ❌ MAL
tareas.push(nueva); setTareas(tareas)
usuario.nombre = 'Ana'; setUsuario(usuario)

// ✅ BIEN: crear uno nuevo
setTareas([...tareas, nueva])                                   // agregar
setTareas(tareas.filter((t) => t.id !== id))                    // borrar
setTareas(tareas.map((t) => t.id === id ? { ...t, hecha: !t.hecha } : t))  // modificar uno
setUsuario({ ...usuario, nombre: 'Ana' })                       // modificar objeto
```

---

## Inputs controlados (formularios)

El `value` del input sale del **estado**, y `onChange` actualiza el estado.

```jsx
const [nombre, setNombre] = useState('')

<input value={nombre} onChange={(e) => setNombre(e.target.value)} />
<p>Hola {nombre}</p>
```

Formularios: usá `onSubmit` en el `<form>` y `e.preventDefault()` para que la página no se recargue.

```jsx
function handleSubmit(e) {
  e.preventDefault()
  // ...
}
<form onSubmit={handleSubmit}>...</form>
```

---

## Props vs State

| Props | State |
|---|---|
| Vienen **del padre** | Son **del propio componente** |
| Solo lectura | Cambian con el setter |
| Como los parámetros de una función | Como la "memoria" del componente |

**"Levantar el estado" (lifting state up):** si dos componentes hermanos necesitan el mismo dato, el estado se pone en el **padre común**, y se pasa a los hijos el valor (prop) y la función para cambiarlo (prop `onAlgo`).

---

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Contador con límites
- ⭐⭐ `Ejercicio2` — Formulario controlado con validación
- ⭐⭐⭐ `Ejercicio3` — Lista de tareas (agregar, tachar, borrar, filtrar)
- ⭐⭐⭐ `Ejercicio4` — Carrito de compras (levantar el estado)
