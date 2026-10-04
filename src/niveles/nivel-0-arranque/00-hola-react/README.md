# 👋 Lección 0 — Hola React

> **Qué vas a aprender:** qué es React, para qué sirve Vite, qué es el HMR y cómo está armado un proyecto.
> **Archivos:** `Ejemplo.jsx` (leelo) → `Ejercicio1.jsx` y `Ejercicio2.jsx` (hacelos).

---

## 1. ¿Qué es React?

React es una **biblioteca** (no un framework) de JavaScript para construir **interfaces de usuario**.
La creó Meta (Facebook) en 2013 y desde febrero de 2026 la gobierna la **React Foundation** (Linux Foundation).
La versión estable actual es **React 19.2**.

> 💡 Diferencia clave para el parcial: **Angular es un framework completo**; **React solo se ocupa de la "vista"** (cómo se ve y se comporta la interfaz).

### Las 4 características principales

| Característica | En criollo |
|---|---|
| **Componentización** | Armás la página con "piezas de Lego" reutilizables: un botón, una tarjeta, una página entera. |
| **Virtual DOM** | React guarda una copia del DOM en memoria. Cuando algo cambia, compara la versión vieja con la nueva y **solo actualiza lo que cambió**. Más rápido. |
| **Reactividad** | Cuando cambian los datos (**props** o **state**), la pantalla se actualiza sola. |
| **JSX** | Escribís algo parecido a HTML dentro de JavaScript. Antes de llegar al navegador se convierte en JS puro. |

### Ventajas
- Reutilizás componentes en muchos lugares.
- Eficiencia gracias al Virtual DOM.
- Comunidad gigante y muchísimas librerías.
- Interfaces modernas y dinámicas.
- **SPA (Single Page Application):** navegás sin recargar la página completa.

---

## 2. ¿Qué es Vite?

Herramienta para **crear y desarrollar** apps web. La hizo Evan You (el creador de Vue). "Vite" = "rápido" en francés.

- ⚡ Los cambios se ven al instante, sin recargar.
- 📦 Trabaja con **ES Modules** (cada archivo es un módulo).
- 🦀 Vite 8 usa **Rolldown** (bundler escrito en Rust) para el build de producción → builds mucho más rápidos.

### Crear un proyecto desde cero

```bash
npm create vite@latest
```

El asistente te pregunta, **en este orden**:

1. **Project name** → nombre de la carpeta.
2. **Framework** → `React` o `React Compiler`.
3. **Variant** → JavaScript o TypeScript.
4. **Linter** *(nuevo)* → **Oxlint** (por defecto, en Rust, rapidísimo) o **ESLint** (el clásico).

Después:

```bash
cd nombre-del-proyecto
npm install     # descarga las dependencias (crea node_modules)
npm run dev     # levanta el servidor de desarrollo y te da una URL (ej: http://localhost:5173)
```

### React vs React Compiler

| React (clásico) | React Compiler |
|---|---|
| Usa `@vitejs/plugin-react` (con Babel) para transformar JSX. | Incluye el React Compiler (estable, v1.0). |
| Liviano, alcanza para proyectos chicos/medianos. | Optimiza solo en tiempo de build. |
| | Casi no hace falta `useMemo`, `useCallback` ni `React.memo`. |

---

## 3. HMR — Hot Module Replacement

Es la magia de Vite: **cuando guardás un archivo, solo se reemplaza ese módulo** en el navegador, sin recargar la página.

¿Cómo funciona?
1. Vite detecta que cambiaste un archivo.
2. Actualiza **solo ese módulo** en el navegador.
3. **Se preserva el estado** (no perdés lo que tenías en memoria: un contador, un formulario a medio llenar…).
4. Lo ves en milisegundos.

> 🧪 Lo vas a comprobar con tus propios ojos en el `Ejercicio2`.

---

## 4. Estructura de un proyecto

```
mi-proyecto/
├── index.html        ← carga el JavaScript de la app (tiene el <div id="root">)
├── package.json      ← dependencias y scripts (dev, build...)
├── vite.config.js    ← configuración de Vite
├── public/           ← archivos estáticos (imágenes) que NO pasan por el build
└── src/              ← TODO tu código
    ├── main.jsx      ← punto de entrada
    ├── App.jsx       ← componente raíz
    ├── components/   ← componentes reutilizables
    ├── hooks/        ← custom hooks
    ├── lib/ (utils)  ← funciones compartidas
    ├── pages/        ← páginas/vistas (con React Router)
    └── styles/       ← estilos
```

### `main.jsx` explicado línea por línea

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- `createRoot` (de `react-dom/client`): la forma vigente desde **React 18** de "montar" la app dentro del `<div id="root">` del `index.html`.
- `StrictMode`: ayuda a detectar problemas **en desarrollo** (por ejemplo, ejecuta los efectos dos veces a propósito).
- `<App />`: el componente raíz; de ahí cuelga todo lo demás.

> 📁 Este mismo curso es un proyecto de Vite. Abrí `src/main.jsx` y vas a ver exactamente esto (con `<Curso />` en vez de `<App />`).

---

## ✅ Autoevaluación rápida

<details><summary>1. ¿React es un framework o una biblioteca?</summary>Una biblioteca enfocada en la vista (UI).</details>
<details><summary>2. ¿Qué hace el Virtual DOM?</summary>Mantiene una copia del DOM en memoria, compara la versión anterior con la nueva y actualiza en el DOM real solo lo que cambió.</details>
<details><summary>3. ¿Qué preserva el HMR?</summary>El estado de la aplicación: no se pierden los datos en memoria al guardar un cambio.</details>
<details><summary>4. ¿Qué diferencia hay entre `public/` y `src/`?</summary><code>src</code> tiene el código que procesa Vite; <code>public</code> tiene archivos estáticos que se copian tal cual, sin pasar por el build.</details>
<details><summary>5. ¿Qué linter ofrece Vite por defecto?</summary>Oxlint (escrito en Rust). La alternativa clásica es ESLint.</details>
