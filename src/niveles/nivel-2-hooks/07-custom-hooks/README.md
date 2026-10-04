# 🪝 Lección 7 — Custom Hooks

Un **custom hook** es una **función tuya** que usa otros hooks (`useState`, `useEffect`...) para **extraer y reutilizar lógica** entre componentes.

- Su nombre **siempre empieza con `use`** (convención obligatoria: así React y el linter saben que es un hook).
- Se guardan en la carpeta **`hooks/`**.
- Devuelven lo que quieras: un valor, un array `[valor, setter]` o un objeto `{ ... }`.

## El ejemplo del apunte

`hooks/useCounter.js`
```jsx
import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)

  return { count, increment, decrement }
}

export default useCounter
```

`components/Counter.jsx`
```jsx
import useCounter from '../hooks/useCounter'

function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
```

`Counter` usa `count`, `increment` y `decrement` **sin saber cómo están implementados**. Esa es la ventaja.

## ⚠️ Lo que más se confunde

> **Un custom hook comparte LÓGICA, no ESTADO.**

Si dos componentes usan `useCounter()`, **cada uno tiene su propio contador independiente**. Para compartir el *mismo* dato entre componentes se usa **Context** (lección 9) o levantar el estado.

## ¿Cuándo crear uno?
Cuando ves la **misma combinación de useState/useEffect** repetida en varios componentes. Ejemplos típicos:

| Hook | Qué hace |
|---|---|
| `useToggle` | `[abierto, alternar]` para menús, modales, modo oscuro |
| `useFetch(url)` | `{ data, cargando, error }` para cualquier API |
| `useLocalStorage(clave, inicial)` | como useState pero se guarda en el navegador |
| `useWindowSize()` | `{ ancho, alto }` de la ventana |

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — `useToggle`
- ⭐⭐ `Ejercicio2` — `useCounter` mejorado (mínimo, máximo, paso, reset)
- ⭐⭐⭐ `Ejercicio3` — `useFetch` reutilizable con dos APIs
- ⭐⭐⭐ `Ejercicio4` — `useLocalStorage`: notas que sobreviven al F5
