# 📋 Lección 3 — Renderizado de listas

Para mostrar muchos elementos a partir de un **array**, usamos el método **`map()`** de JavaScript: recorre el array y por cada ítem devuelve un pedacito de JSX.

```jsx
function App() {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  )
}
```

## 🔑 La prop `key`

- Ayuda a React a **identificar de forma única** cada elemento durante la **reconciliación** (cuando compara el Virtual DOM viejo con el nuevo).
- Si no la ponés → **advertencia en la consola**: `Each child in a list should have a unique "key" prop`.
- Usá un **identificador estable**, como un `id`.
- **Evitá usar el índice** (`index`) como key si la lista puede cambiar de orden, agregar o borrar elementos: React puede confundir qué elemento es cuál.
- La `key` va en el elemento **de más afuera** que devuelve el `map` (si devolvés `<Tarjeta />`, la key va en `<Tarjeta key={...} />`).

## Listas de objetos → componentes

```jsx
const alumnos = [
  { id: 1, nombre: 'Ana', nota: 9 },
  { id: 2, nombre: 'Leo', nota: 5 },
]

{alumnos.map((alumno) => (
  <TarjetaAlumno key={alumno.id} nombre={alumno.nombre} nota={alumno.nota} />
))}

// atajo: pasar todas las propiedades con spread
{alumnos.map((a) => <TarjetaAlumno key={a.id} {...a} />)}
```

## Combos muy usados

```jsx
// Filtrar y después mostrar
alumnos.filter((a) => a.nota >= 6).map((a) => <li key={a.id}>{a.nombre}</li>)

// Ordenar SIN modificar el original (sort modifica el array, por eso copiamos)
const ordenados = [...alumnos].sort((a, b) => b.nota - a.nota)
// o, más moderno:
const ordenados2 = alumnos.toSorted((a, b) => b.nota - a.nota)

// Sumar / promediar
const promedio = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length

// Lista vacía
{lista.length === 0 ? <p>No hay elementos</p> : <ul>...</ul>}
```

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Lista de compras
- ⭐⭐ `Ejercicio2` — Tabla de notas con filter y promedio
- ⭐⭐⭐ `Ejercicio3` — Catálogo de películas: filtrar, ordenar y lista vacía
