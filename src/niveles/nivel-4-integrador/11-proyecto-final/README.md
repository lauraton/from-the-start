# 🏆 Nivel 4 — Integrador

Acá se junta **todo**: componentes, props, listas, Tailwind, useState, useEffect, custom hooks, React Router y Context.

| Archivo | Qué es |
|---|---|
| `Ejercicio1.jsx` | ⭐⭐⭐ **Pokédex** — proyecto guiado por etapas (este README) |
| `Ejercicio2.jsx` | ⭐⭐⭐ **Simulacro de parcial** — Veterinaria. Consigna estilo examen, sin guía paso a paso. ⏱️ Tomate 2 horas. |

---

# 🔴 Proyecto Pokédex (Ejercicio 1)

## Lo que vas a construir

- `/` → **Inicio**: grilla con los 151 Pokémon originales + buscador.
- `/pokemon/:nombre` → **Detalle**: imagen, tipos, stats y botón de favorito.
- `/favoritos` → **Favoritos**: los que marcaste con ❤️.
- `*` → **404**.
- Una **Navbar** con `NavLink` y un contador de favoritos.

## Estructura (ya está creada, con archivos "esqueleto")

```
11-proyecto-final/
├── Ejercicio1.jsx              ← el "App": BrowserRouter + Routes + Provider
├── components/
│   ├── Navbar.jsx
│   └── PokemonCard.jsx
├── context/
│   └── FavoritosContext.jsx
├── hooks/
│   └── useFetch.js
└── pages/
    ├── Inicio.jsx
    ├── Detalle.jsx
    ├── Favoritos.jsx
    └── NoEncontrado.jsx
```

## API que vas a usar (PokéAPI, gratis, sin registrarse)

- Lista: `https://pokeapi.co/api/v2/pokemon?limit=151`
  → `{ results: [ { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, ... ] }`
- Detalle: `https://pokeapi.co/api/v2/pokemon/pikachu`
- Imagen por id (sin hacer otro fetch):
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
- 💡 Sacar el id de la url: `url.split('/').filter(Boolean).pop()`

---

## Etapas (hacelas en orden, guardando y mirando el navegador en cada una)

### Etapa 1 — Rutas y Navbar 🧭
- [ ] En `Ejercicio1.jsx`, revisá las rutas (ya están) y agregá la ruta `*` con `NoEncontrado`.
- [ ] En `Navbar.jsx`, cambiá los `Link` por `NavLink` con estilo activo (no te olvides `end` en `/`).

### Etapa 2 — useFetch 🪝
- [ ] Completá `hooks/useFetch.js` (podés copiar el tuyo del Nivel 2, lección 7).
- [ ] Debe devolver `{ data, cargando, error }` y depender de `[url]`.

### Etapa 3 — Inicio: lista + PokemonCard 📋
- [ ] En `Inicio.jsx`, usá `useFetch` con la URL de la lista.
- [ ] Mostrá "Cargando..." / error.
- [ ] Hacé `map` sobre `data.results` y renderizá un `<PokemonCard>` por cada uno (key = name).
- [ ] `PokemonCard` recibe `nombre` e `id`, muestra la imagen, `#id` y nombre, y **es un `Link`** a `/pokemon/nombre`.
- [ ] Grilla responsive: 2 columnas en móvil, 4 en `md`, 6 en `lg`.

### Etapa 4 — Buscador 🔎
- [ ] Un input controlado (`useState`) arriba de la grilla.
- [ ] Filtrá `data.results` por nombre (`includes`, en minúsculas) **antes** del `map`.
- [ ] Si no hay resultados: "No se encontró ningún Pokémon 😢".

### Etapa 5 — Detalle 🔍
- [ ] En `Detalle.jsx`, leé `nombre` con `useParams()`.
- [ ] `useFetch` a `https://pokeapi.co/api/v2/pokemon/${nombre}`.
- [ ] Mostrá imagen, nombre, tipos (chips), altura/peso y stats (barras).
- [ ] Botón "← Volver" con `useNavigate()`.

### Etapa 6 — Favoritos con Context ❤️
- [ ] Completá `context/FavoritosContext.jsx`: estado `favoritos` (array de `{ id, nombre }`), funciones `alternarFavorito(pokemon)` y `esFavorito(id)`.
- [ ] Envolvé las rutas con `<FavoritosProvider>` en `Ejercicio1.jsx`.
- [ ] En `Detalle`: botón "🤍 Agregar a favoritos" / "❤️ Quitar de favoritos".
- [ ] En `PokemonCard`: un ❤️ chiquito si es favorito.
- [ ] En `Navbar`: "Favoritos (3)".
- [ ] En `Favoritos.jsx`: grilla de `PokemonCard` con los favoritos, o "Todavía no tenés favoritos".

### ⭐ Etapas extra (para lucirte)
- [ ] Que los favoritos sobrevivan al F5 (usá tu `useLocalStorage` de la lección 7 dentro del Provider).
- [ ] Color de fondo de la tarjeta de detalle según el tipo principal (objeto con clases completas).
- [ ] Botones "◀ Anterior / Siguiente ▶" en el detalle.
- [ ] Paginación en el inicio (20 por página).

## ✅ Checklist de conceptos (lo que un profe miraría)
- [ ] Componentes chicos, uno por archivo, con props desestructuradas.
- [ ] `key` estable en todas las listas.
- [ ] Ningún estado mutado (siempre spread / map / filter).
- [ ] `useEffect` con dependencias correctas y limpieza (AbortController).
- [ ] Imports desde `react-router` (no `react-router-dom`).
- [ ] Context con Provider propio + custom hook.
- [ ] Manejo de *loading* y *error* en cada fetch.
- [ ] Responsive con prefijos `md:` / `lg:`.
