# 🌍 Lección 9 — useContext (estado global)

## El problema: *prop drilling*

Cuando un dato lo necesita un componente que está **muy abajo** en el árbol, hay que pasarlo por props **nivel por nivel**, aunque los del medio no lo usen:

```
App (tiene "usuario")
 └─ Layout        ← recibe usuario solo para pasarlo 😩
     └─ Sidebar   ← recibe usuario solo para pasarlo 😩
         └─ Avatar ← ¡el único que lo usa!
```

## La solución: Context

Un **contexto** es como un "canal" global: el **Provider** pone el dato arriba de todo, y **cualquier** componente de abajo lo lee con **`useContext`**, sin props intermedias.

### Los 3 pasos

| Paso | Código |
|---|---|
| 1. **Crear** el contexto | `const UserContext = createContext(null)` |
| 2. **Proveer** el valor (envolver) | `<UserContext value={{ user, setUser }}> ... </UserContext>` |
| 3. **Consumir** | `const { user } = useContext(UserContext)` |

## El ejemplo del apunte

`context/UserContext.jsx`
```jsx
import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState({ id: 1, name: 'John Doe' })

  return (
    <UserContext value={{ user, setUser }}>
      {children}
    </UserContext>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}
```

`App.jsx`
```jsx
import { UserProvider } from './context/UserContext'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <UserProvider>
      <MyComponent />
    </UserProvider>
  )
}
```

`components/MyComponent.jsx`
```jsx
import { useGlobalContext } from '../context/UserContext'

function MyComponent() {
  const { user, setUser } = useGlobalContext()

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => setUser({ id: 2, name: 'Jane Doe' })}>Cambiar usuario</button>
    </div>
  )
}
```

`MyComponent` accede a `user` y `setUser` **sin recibirlos como props**.

### 🆕 React 19: `<Context value>` vs `<Context.Provider value>`

```jsx
<UserContext value={...}>            // ✅ React 19: más corto
<UserContext.Provider value={...}>   // ✅ forma clásica: sigue funcionando (no está deprecada)
```

### Patrón profesional (el del apunte)
- Un archivo por contexto en `context/`.
- Exportar un **Provider** propio (`UserProvider`) que maneja el estado adentro.
- Exportar un **custom hook** (`useGlobalContext`, `useTheme`, `useCarrito`...) para no tener que importar `useContext` + el contexto en cada lado.

## ¿Cuándo usar Context?
Datos que necesita **media app**: usuario logueado, tema claro/oscuro, idioma, carrito de compras.
Para datos que usan 1 o 2 componentes cercanos → props normales.

> ⚠️ Un componente que use `useContext` **fuera** del Provider recibe el valor por defecto de `createContext(...)` (acá `null`) → error típico: *"Cannot destructure property 'user' of null"*. Solución: envolver con el Provider.

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Tema claro/oscuro con Context
- ⭐⭐ `Ejercicio2` — Refactor: eliminar el *prop drilling*
- ⭐⭐⭐ `Ejercicio3` — Carrito global (Provider con funciones)
