# 🛠️ Crear un proyecto desde cero (como en un parcial)

Este curso ya viene armado, pero en un examen o TP te pueden pedir arrancar de cero. Practicalo al menos una vez.

## 1. Crear el proyecto con Vite
```bash
npm create vite@latest mi-parcial
```
- **Framework:** `React` (o `React Compiler` si querés optimizaciones automáticas)
- **Variant:** `JavaScript`
- **Linter:** `Oxlint` (por defecto) o `ESLint`

```bash
cd mi-parcial
npm install
npm run dev
```
Abrí la URL que aparece (normalmente `http://localhost:5173`).

## 2. Limpiar lo que viene de ejemplo
- Borrá el contenido de `src/App.css` (o borrá el archivo y su import).
- En `App.jsx` dejá un componente vacío:
  ```jsx
  function App() {
    return <h1>Mi parcial</h1>
  }
  export default App
  ```

## 3. Instalar Tailwind v4
```bash
npm install tailwindcss @tailwindcss/vite
```
`vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
`src/index.css` → borrar todo y dejar:
```css
@import "tailwindcss";
```

## 4. Instalar React Router
```bash
npm install react-router
```

## 5. Crear la estructura de carpetas
```
src/
├── components/
├── context/
├── hooks/
├── lib/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```
En la terminal de VSCode (Git Bash / macOS / Linux):
```bash
mkdir src/components src/context src/hooks src/lib src/pages
```
En PowerShell (Windows):
```powershell
mkdir src/components, src/context, src/hooks, src/lib, src/pages
```

## 6. ¡A programar!
Arrancá por las rutas en `App.jsx`, después las páginas vacías, después el contexto, y por último los detalles de estilo.

> 💡 **Tip de parcial:** hacé que *funcione* primero y que *se vea lindo* después. Guardá seguido y mirá la consola (F12) para ver errores.
