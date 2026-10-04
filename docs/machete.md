# 🧾 Machete de React (todo en una página)

## Crear proyecto
```bash
npm create vite@latest        # nombre → React → JavaScript → Oxlint
cd mi-app && npm install && npm run dev
npm install react-router                     # rutas
npm install tailwindcss @tailwindcss/vite    # Tailwind v4
```

## Componente + props
```jsx
function Tarjeta({ titulo, children, color = 'azul' }) {
  return <div className="p-4">{titulo}{children}</div>
}
export default Tarjeta
// uso: <Tarjeta titulo="Hola">contenido</Tarjeta>
```

## JSX rápido
```jsx
<>                                     {/* fragment */}
<div className="..." style={{ color: 'red' }}>
<label htmlFor="x">  <img src={url} alt="" />
{cond ? <A /> : <B />}     {cond && <A />}     {n > 0 && <p>{n}</p>}
{lista.map((x) => <Item key={x.id} {...x} />)}
```

## useState
```jsx
const [valor, setValor] = useState(inicial)
setValor((v) => v + 1)                                  // depende del anterior
setLista([...lista, nuevo])                             // agregar
setLista(lista.filter((x) => x.id !== id))              // borrar
setLista(lista.map((x) => x.id === id ? { ...x, hecha: true } : x))  // editar
setObj({ ...obj, campo: 'nuevo' })                      // objeto
<input value={texto} onChange={(e) => setTexto(e.target.value)} />
<form onSubmit={(e) => { e.preventDefault(); ... }}>
```

## useEffect
```jsx
useEffect(() => { ... })            // cada render
useEffect(() => { ... }, [])        // al montar
useEffect(() => { ... }, [x])       // cuando cambia x
useEffect(() => {
  const id = setInterval(..., 1000)
  return () => clearInterval(id)    // limpieza = desmontaje
}, [])
```

## Fetch (patrón completo)
```jsx
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  const controller = new AbortController()
  async function cargar() {
    try {
      const res = await fetch(URL, { signal: controller.signal })
      if (!res.ok) throw new Error('Falló')
      setData(await res.json())
    } catch (err) {
      if (err.name !== 'AbortError') setError(err.message)
    } finally {
      // si se canceló (el componente se desmontó), no tocamos el estado
      if (!controller.signal.aborted) setLoading(false)
    }
  }
  cargar()
  return () => controller.abort()
}, [])

// POST
await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(datos),
})
```

## Custom hook
```jsx
function useToggle(inicial = false) {
  const [v, setV] = useState(inicial)
  return [v, () => setV((x) => !x)]
}
```

## Context
```jsx
const Ctx = createContext(null)
export function MiProvider({ children }) {
  const [dato, setDato] = useState(...)
  return <Ctx value={{ dato, setDato }}>{children}</Ctx>
}
export const useMiCtx = () => useContext(Ctx)
// App: <MiProvider><Todo /></MiProvider>
// Hijo: const { dato } = useMiCtx()
```

## React Router (`from 'react-router'`)
```jsx
<BrowserRouter>
  <nav>
    <Link to="/">Inicio</Link>
    <NavLink to="/x" className={({ isActive }) => isActive ? 'activo' : ''}>X</NavLink>
  </nav>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/item/:id" element={<Detalle />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

const { id } = useParams()        // string!
const navigate = useNavigate()    // navigate('/ruta') · navigate(-1)
```

## Tailwind v4
```css
/* index.css */
@import "tailwindcss";
```
```jsx
className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white shadow
           text-sm md:text-base lg:text-lg  hover:bg-sky-600  grid grid-cols-1 md:grid-cols-3"
```
❌ `` `bg-${color}-500` `` → ✅ objeto con clases completas.
