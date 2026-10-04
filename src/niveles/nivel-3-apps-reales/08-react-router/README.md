# 🧭 Lección 8 — React Router

**React Router** es la librería estándar para tener **varias páginas** en una app React. Muestra un componente u otro según la **URL**, sin recargar la página (eso es lo que hace a la app una **SPA**).

## ⚠️ Cambio de paquete (importante)

Desde la **v7** (y consolidado en la **v8**, la actual) **ya no existe `react-router-dom`**. Todo se instala e importa desde **`react-router`**:

```bash
npm install react-router
```
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router'   // ✅
import { BrowserRouter } from 'react-router-dom'                    // ❌ viejo
```

## Los 4 componentes principales

| Componente | Para qué |
|---|---|
| `BrowserRouter` | Envuelve **toda** la app. Habilita el ruteo usando la API de History del navegador. |
| `Routes` | Agrupa todas las rutas. |
| `Route` | Una ruta: `path` (la URL) + `element` (el componente a mostrar). |
| `Link` | Un enlace que navega **sin recargar**. Se usa en vez de `<a href>`. |

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

- `BrowserRouter` envuelve todo y crea el **contexto de ruteo**.
- Los `Link` arman la navegación (fuera de `Routes`, así se ven siempre).
- Dentro de `Routes`, cada `Route` decide qué se muestra según el path activo.
- Las páginas van en la carpeta **`pages/`**.

> ❓ **¿Por qué `Link` y no `<a href>`?** Porque `<a>` recarga toda la página (perdés el estado y es más lento). `Link` solo cambia la URL y React muestra el componente nuevo.

---

## Más herramientas que suelen aparecer

### Ruta 404 (cualquier otra cosa)
```jsx
<Route path="*" element={<NotFound />} />
```

### `NavLink`: un Link que sabe si está activo
```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-sky-600' : ''}>
  About
</NavLink>
```

### Rutas dinámicas + `useParams`
```jsx
<Route path="/productos/:id" element={<DetalleProducto />} />

function DetalleProducto() {
  const { id } = useParams()     // si la URL es /productos/7 → id = "7" (¡es un string!)
}
```

### `useNavigate`: navegar desde código
```jsx
const navigate = useNavigate()
navigate('/gracias')   // ir a una ruta
navigate(-1)           // volver atrás
```

### Rutas anidadas + `Outlet` (layout compartido)
```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />           {/* index = la ruta "/" exacta */}
  <Route path="about" element={<About />} />
</Route>

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />   {/* acá se dibuja la ruta hija activa */}
      <Footer />
    </>
  )
}
```

---

## Los 3 modos de React Router 8

| Modo | Cómo | Para qué |
|---|---|---|
| **Declarativo** | `<BrowserRouter>` + `<Routes>` | El de este curso. Ideal para empezar. |
| **De datos** | `createBrowserRouter` | Agrega `loader`/`action` por ruta (carga de datos). |
| **Framework** | `npx create-react-router@latest` | Ruteo por archivos, parecido a Remix/Next.js. |

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Agregar una página y una ruta 404
- ⭐⭐ `Ejercicio2` — Navbar con `NavLink` + layout con `Outlet`
- ⭐⭐⭐ `Ejercicio3` — Tienda con rutas dinámicas (`useParams`, `useNavigate`)

> 💡 En la app del curso, mirá la barra de direcciones: cuando navegás en estos ejercicios, la URL cambia de verdad.
