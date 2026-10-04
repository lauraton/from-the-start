# 🎨 Lección 4 — Tailwind CSS v4

**Tailwind** es un framework de CSS **basado en utilidades** (*utility-first*): en vez de escribir CSS, ponés clases chiquitas directamente en el JSX.

```jsx
// CSS tradicional (style en línea)
<div style={{ backgroundColor: 'blue', padding: '1rem' }}>

// Tailwind
<div className="bg-blue-500 p-4">
```

> ✅ **Este curso ya tiene Tailwind v4 instalado.** Todos los ejercicios lo usan.

---

## Instalación en React + Vite (paso a paso, como en el apunte)

**1.** Crear el proyecto:
```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
```

**2.** Instalar Tailwind v4:
```bash
npm install tailwindcss @tailwindcss/vite
```

**3.** Configurar el plugin en `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**4.** En `src/index.css`, borrar todo y dejar **solo**:
```css
@import "tailwindcss";
```

**5.** `npm run dev` y listo. 🎉

> 👀 Mirá `vite.config.js` y `src/index.css` de este proyecto: están exactamente así.

---

## ⚠️ v3 vs v4 (las IAs y tutoriales viejos te dan código de v3)

| | Tailwind **v3** (viejo) | Tailwind **v4** (actual) |
|---|---|---|
| Instalación | `tailwindcss postcss autoprefixer` | `tailwindcss @tailwindcss/vite` |
| Archivo de config | `tailwind.config.js` + `npx tailwindcss init -p` | **No hace falta** |
| En el CSS | `@tailwind base;` `@tailwind components;` `@tailwind utilities;` | `@import "tailwindcss";` |
| `content: [...]` | Había que decirle qué archivos escanear | Los detecta solo |
| Personalizar colores | en `tailwind.config.js` | en el CSS con `@theme { --color-marca: #ff5500; }` |
| Degradados | `bg-gradient-to-r` | `bg-linear-to-r` (el viejo sigue andando) |

> Si ves `tailwind.config.js` o `@tailwind base` en un tutorial → **es v3**. Fijate siempre la versión en la [documentación oficial](https://tailwindcss.com/docs/installation/using-vite).

---

## ¿Cómo funciona por dentro?

1. **Escaneo:** lee tus archivos `.jsx`, `.tsx`, `.html` buscando clases.
2. **Generación:** genera **solo el CSS de las clases que usaste**.
3. **Optimización:** el CSS final es mínimo.
4. **Hot reload:** en desarrollo, los estilos se actualizan al instante.

### 🚨 Consecuencia importante: no armes clases "por partes"
```jsx
// ❌ Tailwind NO ve "bg-red-500" escrito en ningún lado → no genera esa clase
<div className={`bg-${color}-500`} />

// ✅ Escribí las clases completas
const colores = { rojo: 'bg-red-500', azul: 'bg-blue-500' }
<div className={colores[color]} />
```

---

## Responsive (mobile first)

Sin prefijo = **todas las pantallas**. Con prefijo = **desde ese ancho para arriba**.

| Prefijo | Desde |
|---|---|
| `sm:` | 640px |
| `md:` | 768px (tablet) |
| `lg:` | 1024px (desktop) |
| `xl:` | 1280px |

```jsx
<div className="text-sm md:text-base lg:text-lg">  // chico en móvil, mediano en tablet, grande en desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

## Estados

```jsx
<button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 focus:ring-4 disabled:opacity-50">
```

---

## 🧾 Machete de clases más usadas

| Qué | Clases |
|---|---|
| Espaciado | `p-4` `px-2` `py-1` `m-4` `mt-2` `mx-auto` `gap-4` `space-y-2` |
| Tamaño | `w-full` `w-64` `h-12` `max-w-md` `min-h-screen` |
| Texto | `text-sm` … `text-4xl` `font-bold` `text-center` `text-slate-600` `uppercase` |
| Fondo / borde | `bg-white` `bg-sky-500` `border` `border-slate-200` `rounded-lg` `rounded-full` `shadow-md` |
| Flexbox | `flex` `flex-col` `items-center` `justify-between` `flex-wrap` |
| Grid | `grid` `grid-cols-3` `col-span-2` |
| Efectos | `transition` `hover:scale-105` `opacity-50` |

Colores: `slate gray red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose`, con intensidades `50, 100, 200 … 900, 950`.

🔗 [Documentación](https://tailwindcss.com/docs) · [Playground](https://play.tailwindcss.com/)
💡 Instalá la extensión **Tailwind CSS IntelliSense** en VSCode: te autocompleta las clases.

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Pasar de `style` a clases de Tailwind
- ⭐⭐ `Ejercicio2` — Galería responsive con hover
- ⭐⭐⭐ `Ejercicio3` — Tabla de precios + arreglar clases dinámicas
