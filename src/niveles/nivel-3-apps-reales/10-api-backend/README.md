# 🔌 Lección 10 — Integración con un backend y consumo de una API

## 🖥️ Antes de empezar: prendé el mini backend

Este curso trae un servidor de práctica en `servidor/server.js`. Abrí **una segunda terminal** en VSCode (`Ctrl+Shift+ñ` o el botón **+** de la terminal) y corré:

```bash
npm run api
```

Queda escuchando en **http://localhost:3000/api/users**. Abrí esa URL en el navegador: vas a ver el JSON. 👀
Dejá esa terminal abierta y seguí usando la otra para `npm run dev`.

---

## ¿Qué hay que resolver para conectar React con un backend?

1. **Comunicación HTTP**: los métodos.
2. **Endpoints**: las URLs de la API.
3. **Conexión**: `fetch` (nativo) o `axios` (librería), normalmente dentro de un `useEffect`.
4. **Procesar la respuesta**: actualizar el estado.

### Métodos HTTP (CRUD)

| Método | Para | Ejemplo con nuestra API |
|---|---|---|
| **GET** | Leer | `GET /api/users` · `GET /api/users/2` |
| **POST** | Crear | `POST /api/users` con body `{ name, email }` |
| **PUT** | Modificar | `PUT /api/users/2` con body `{ rol: 'admin' }` |
| **DELETE** | Borrar | `DELETE /api/users/2` |

### Códigos de estado que vas a ver
`200` OK · `201` Creado · `204` Sin contenido (borrado OK) · `400` Datos inválidos · `404` No encontrado · `500` Error del servidor

> `response.ok` es `true` si el código está entre 200 y 299.
> ⚠️ `fetch` **no** tira error con un 404 o 500: solo con errores de red. Por eso hay que chequear `response.ok` a mano.

---

## GET con loading y error (el ejemplo del apunte)

```jsx
import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('http://localhost:3000/api/users')
        if (!response.ok) throw new Error('No se pudo obtener la lista de usuarios')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
```

**Tres estados:** `users` (los datos), `loading` (¿está cargando?), `error` (¿falló?).
**try / catch / finally:** `try` intenta, `catch` atrapa errores de red o del servidor, `finally` se ejecuta **siempre** → garantiza que `loading` se apague.

---

## POST, PUT y DELETE

Se hacen normalmente **en respuesta a un evento** (enviar un form, click en borrar), **no** en un `useEffect`.

```jsx
// POST: crear
const res = await fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Linus', email: 'linus@ejemplo.com' }),
})
const nuevo = await res.json()
setUsers([...users, nuevo])          // actualizo la pantalla sin volver a pedir todo

// PUT: modificar
await fetch(`http://localhost:3000/api/users/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ rol: 'admin' }),
})

// DELETE: borrar
await fetch(`http://localhost:3000/api/users/${id}`, { method: 'DELETE' })
setUsers(users.filter((u) => u.id !== id))
```

- `method`: el verbo HTTP (si no lo ponés, es GET).
- `headers`: avisamos que mandamos JSON.
- `body`: los datos **convertidos a texto** con `JSON.stringify`.

## Con axios (alternativa)
```bash
npm install axios
```
```jsx
import axios from 'axios'
const { data } = await axios.get('http://localhost:3000/api/users')     // ya parsea el JSON
await axios.post('http://localhost:3000/api/users', { name, email })    // ya hace el stringify
// y tira error solo con 404/500, sin chequear response.ok
```

## ¿Qué es CORS?
El navegador bloquea pedidos de un origen (`localhost:5173`, tu front) a otro (`localhost:3000`, el back) **salvo que el servidor lo permita** con el header `Access-Control-Allow-Origin`. Nuestro servidor ya lo tiene. Si ves *"blocked by CORS policy"*, el problema está en el **backend**.

> 💡 En proyectos reales se suele delegar todo esto (cache, reintentos, invalidación) a **TanStack Query** o **SWR**.

## 🏋️ Ejercicios (¡con `npm run api` corriendo!)
- ⭐⭐ `Ejercicio1` — GET con loading, error y botón "Recargar"
- ⭐⭐⭐ `Ejercicio2` — POST: formulario para crear usuarios
- ⭐⭐⭐ `Ejercicio3` — CRUD completo: editar (PUT) y borrar (DELETE)
