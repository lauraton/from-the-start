# ⚡ Lección 6 — useEffect

`useEffect` sirve para ejecutar **efectos secundarios**: cosas que pasan **después de que el componente se renderizó** y que "salen" de React:

- 🌐 pedir datos a un servidor (`fetch`)
- ⏱️ timers (`setInterval`, `setTimeout`)
- 🖱️ escuchar eventos del navegador (`window.addEventListener`)
- 📝 tocar el DOM a mano (`document.title = ...`)

## Sintaxis

```jsx
useEffect(() => {
  // 1. el efecto
  return () => {
    // 2. la limpieza (opcional)
  }
}, [dependencias]) // 3. cuándo se vuelve a ejecutar
```

## Las 3 formas del array de dependencias (¡LA pregunta de parcial!)

| Código | Se ejecuta... |
|---|---|
| `useEffect(fn)` *(sin array)* | después de **cada** render |
| `useEffect(fn, [])` *(array vacío)* | **una sola vez**, cuando el componente se monta |
| `useEffect(fn, [a, b])` | al montarse y **cada vez que cambie `a` o `b`** |

## La función de limpieza (cleanup)

Lo que **retorna** el efecto. React la ejecuta:
- cuando el componente **se desmonta** (desaparece de la pantalla), y
- **antes** de volver a ejecutar el efecto (si cambiaron las dependencias).

Sirve para **deshacer** lo que hizo el efecto: `clearInterval`, `removeEventListener`, cancelar un `fetch`.

```jsx
useEffect(() => {
  const id = setInterval(() => setSegundos((s) => s + 1), 1000)
  return () => clearInterval(id)   // sin esto, el timer sigue andando para siempre
}, [])
```

---

## Pedir datos: el patrón recomendado (del apunte)

```jsx
import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      const response = await fetch('https://api.github.com/users', {
        signal: controller.signal,
      })
      const data = await response.json()
      setUsers(data)
    }

    fetchUsers()

    return () => controller.abort()   // cancela la petición si el componente se desmonta
  }, [])                              // [] → una sola vez

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.login}</li>)}
    </ul>
  )
}
```

✅ **Buenas prácticas:**
- La función `async` va **adentro** del efecto. **Nunca** `useEffect(async () => ...)` (el efecto tiene que devolver una función de limpieza o nada, no una Promesa).
- Usá `AbortController` para cancelar peticiones pendientes.
- Manejá **loading** y **error** (lo vemos completo en la lección 10).

---

## Ciclo de vida: clases vs Hooks

Para quienes vienen de componentes de clase (también lo preguntan):

| Fase | Clase | Hoy (Hooks) |
|---|---|---|
| **Montaje** | `constructor` | valor inicial de `useState` |
| | `componentDidMount` | `useEffect(fn, [])` |
| **Actualización** | `shouldComponentUpdate` | `React.memo` o el React Compiler |
| | `componentDidUpdate` | `useEffect(fn, [dep])` |
| **Desmontaje** | `componentWillUnmount` | la función de **limpieza** del `useEffect` |

---

## 🐛 Errores comunes

1. **Loop infinito:** actualizar un estado dentro de un efecto **sin array de dependencias** → render → efecto → setState → render → ...
2. **Olvidar la limpieza** de un `setInterval` → se acumulan timers.
3. **"¡Mi efecto se ejecuta dos veces!"** → es `StrictMode` en **desarrollo**: monta, desmonta y vuelve a montar a propósito para ver si tu limpieza funciona bien. En producción pasa una sola vez. No es un bug.
4. Usar una variable en el efecto y **no ponerla** en las dependencias → el efecto queda con un valor viejo.
5. **`finally` de un pedido cancelado:** si usás `AbortController` + `finally { setCargando(false) }`, el pedido cancelado por StrictMode apaga el "cargando" antes de tiempo. Protegelo así:
   ```jsx
   } finally {
     if (!controller.signal.aborted) setCargando(false)
   }
   ```

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Título de la pestaña + montaje/desmontaje
- ⭐⭐ `Ejercicio2` — Cronómetro con setInterval y limpieza
- ⭐⭐ `Ejercicio3` — Personajes de Rick and Morty (fetch con loading y error)
- ⭐⭐⭐ `Ejercicio4` — Buscador de Pokémon (efecto que depende de una búsqueda)
