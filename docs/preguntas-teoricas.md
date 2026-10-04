# 🧠 Preguntas teóricas (con respuesta)

Tapá la respuesta, contestá en voz alta (o en un papel) y después abrí. Si fallás una, volvé al README de esa lección.
*(En VSCode: clic derecho sobre este archivo → "Open Preview", o `Ctrl+Shift+V`.)*

---

## React en general

<details><summary><b>1.</b> ¿Qué es React? ¿Es un framework?</summary>

Una **biblioteca** de JavaScript de código abierto para construir interfaces de usuario. No es un framework completo (como Angular): se ocupa solo de la **capa de vista**. La creó Meta en 2013 y hoy la gobierna la React Foundation (Linux Foundation).
</details>

<details><summary><b>2.</b> Nombrá las 4 características principales de React.</summary>

Componentización, Virtual DOM, Reactividad (props y state) y JSX.
</details>

<details><summary><b>3.</b> ¿Qué es el Virtual DOM y por qué mejora el rendimiento?</summary>

Una representación del DOM en memoria. Cuando cambian los datos, React compara la versión anterior con la nueva (**reconciliación**) y actualiza en el DOM real **solo lo que cambió**, en lugar de redibujar todo.
</details>

<details><summary><b>4.</b> ¿Qué es una SPA?</summary>

Single Page Application: la navegación entre "páginas" ocurre **sin recargar la página completa**; JavaScript cambia lo que se muestra. Experiencia más fluida.
</details>

<details><summary><b>5.</b> ¿Qué es JSX? ¿El navegador lo entiende?</summary>

Una extensión de JavaScript que permite escribir sintaxis parecida a HTML dentro de JS. El navegador **no** lo entiende: se compila a JavaScript puro antes (lo hace Vite con el plugin de React).
</details>

<details><summary><b>6.</b> ¿Hace falta <code>import React from 'react'</code> en cada archivo?</summary>

No. Con el nuevo transformador de JSX (*automatic runtime*), que Vite usa por defecto, solo se importa lo que se usa, por ejemplo `import { useState } from 'react'`.
</details>

## Vite y estructura

<details><summary><b>7.</b> ¿Qué es Vite y qué ventajas tiene?</summary>

Una herramienta de construcción y desarrollo (creada por Evan You). Ventajas: desarrollo muy rápido con HMR, basado en ES Modules, y en la versión 8 usa Rolldown (en Rust) para builds de producción más rápidos.
</details>

<details><summary><b>8.</b> ¿Qué comandos usás para crear y levantar un proyecto?</summary>

`npm create vite@latest` → `cd nombre` → `npm install` → `npm run dev`.
</details>

<details><summary><b>9.</b> ¿Qué pregunta el asistente de Vite y en qué orden?</summary>

Project name → Framework (React o React Compiler) → Variant (JavaScript/TypeScript) → Linter (Oxlint por defecto, o ESLint).
</details>

<details><summary><b>10.</b> ¿Diferencia entre elegir "React" y "React Compiler"?</summary>

"React" usa `@vitejs/plugin-react` (Babel) para transformar JSX: liviano, alcanza para proyectos chicos/medianos. "React Compiler" (estable, v1.0) además optimiza automáticamente en el build y elimina en la mayoría de los casos la necesidad de `useMemo`, `useCallback` y `React.memo`.
</details>

<details><summary><b>11.</b> ¿Qué es el HMR? Nombrá 3 beneficios.</summary>

Hot Module Replacement: actualiza solo el módulo que cambió mientras la app corre, sin recargar toda la página. Beneficios: desarrollo más rápido, **preserva el estado**, feedback inmediato (milisegundos).
</details>

<details><summary><b>12.</b> ¿Qué va en <code>src</code>, en <code>public</code> y para qué está <code>index.html</code>?</summary>

`src`: todo el código (componentes, estilos, config). `public`: archivos estáticos que no pasan por el build. `index.html`: carga el JavaScript de la app (tiene el `<div id="root">`).
</details>

<details><summary><b>13.</b> ¿Qué hacen <code>createRoot</code> y <code>StrictMode</code> en main.jsx?</summary>

`createRoot` (de `react-dom/client`) monta la app en el elemento `#root` (forma vigente desde React 18). `StrictMode` ayuda a detectar problemas potenciales **en desarrollo**.
</details>

## Componentes, props y listas

<details><summary><b>14.</b> ¿Qué es un componente funcional?</summary>

Una función de JavaScript que devuelve JSX y representa una pieza reutilizable de la interfaz. Su nombre empieza con mayúscula.
</details>

<details><summary><b>15.</b> ¿Qué son las props? ¿Se pueden modificar?</summary>

Los datos que un componente recibe de su **padre**, como atributos. Son **de solo lectura**: el hijo no las modifica. Los datos fluyen de padre a hijo (flujo unidireccional).
</details>

<details><summary><b>16.</b> ¿Diferencia entre props y state?</summary>

Las props vienen de afuera (del padre) y son de solo lectura; el state es interno del componente y cambia con su función setter, provocando un re-render.
</details>

<details><summary><b>17.</b> ¿Cómo se renderiza una lista? ¿Para qué sirve <code>key</code>?</summary>

Con `array.map()` devolviendo un elemento por ítem. `key` ayuda a React a identificar cada elemento de forma única durante la reconciliación. Sin ella, aparece una advertencia en consola.
</details>

<details><summary><b>18.</b> ¿Por qué no conviene usar el índice como key?</summary>

Si la lista cambia de orden, se agregan o se borran elementos, el índice de cada ítem cambia y React puede confundir qué elemento es cuál (bugs en inputs, animaciones, rendimiento). Mejor un id estable.
</details>

## Hooks

<details><summary><b>19.</b> ¿Qué son los Hooks y desde qué versión existen?</summary>

Funciones que permiten a los componentes funcionales manejar estado, efectos y otras características que antes solo tenían los componentes de clase. Desde React 16.8 (2019).
</details>

<details><summary><b>20.</b> ¿Qué son las dependencias de un Hook?</summary>

Valores que determinan si el Hook se vuelve a ejecutar: cuando una cambia, se re-ejecuta. `useEffect`, `useMemo` y `useCallback` reciben un array explícito; `useState` usa el estado como dependencia implícita; `useRef` es estable entre renders.
</details>

<details><summary><b>21.</b> ¿Qué devuelve <code>useState</code>?</summary>

Un array de dos elementos: el valor actual del estado y una función para actualizarlo. `const [count, setCount] = useState(0)`.
</details>

<details><summary><b>22.</b> ¿Por qué es mejor <code>setCount(c => c + 1)</code> que <code>setCount(count + 1)</code>?</summary>

Cuando el nuevo valor depende del anterior, la forma funcional siempre recibe el valor más reciente. Evita bugs cuando React agrupa varias actualizaciones seguidas (*batching*).
</details>

<details><summary><b>23.</b> ¿Para qué sirve <code>useEffect</code>? Dá ejemplos.</summary>

Para ejecutar efectos secundarios después del render: peticiones a un servidor, timers, suscribirse a eventos, modificar el DOM manualmente.
</details>

<details><summary><b>24.</b> ¿Qué diferencia hay entre no pasar array, pasar <code>[]</code> y pasar <code>[x]</code>?</summary>

Sin array: se ejecuta después de cada render. `[]`: una sola vez al montar. `[x]`: al montar y cada vez que cambia `x`.
</details>

<details><summary><b>25.</b> ¿Qué es la función de limpieza de un efecto?</summary>

La función que retorna el efecto. Se ejecuta al desmontar el componente (y antes de re-ejecutar el efecto). Sirve para cancelar peticiones (AbortController), limpiar intervalos, quitar listeners.
</details>

<details><summary><b>26.</b> ¿Por qué no se pone <code>async</code> directamente en el callback de useEffect?</summary>

Porque una función async devuelve una Promesa, y useEffect espera que se devuelva una función de limpieza (o nada). Se define una función async interna y se la llama.
</details>

<details><summary><b>27.</b> Relacioná el ciclo de vida de clases con Hooks.</summary>

constructor → valor inicial de useState · componentDidMount → useEffect con [] · componentDidUpdate → useEffect con dependencias · shouldComponentUpdate → React.memo / React Compiler · componentWillUnmount → función de limpieza del useEffect.
</details>

<details><summary><b>28.</b> ¿Qué es un custom hook? ¿Comparte estado entre componentes?</summary>

Una función propia, cuyo nombre empieza con `use`, que combina otros hooks para reutilizar **lógica**. **No** comparte estado: cada componente que lo usa tiene su propia copia.
</details>

<details><summary><b>29.</b> ¿Qué problema resuelve <code>useContext</code>?</summary>

El *prop drilling*: tener que pasar props nivel por nivel por componentes que no las usan. Permite compartir datos "globales" con cualquier componente dentro del Provider.
</details>

<details><summary><b>30.</b> ¿Qué cambió en React 19 con los Providers?</summary>

Se puede usar `<MiContexto value={...}>` directamente como proveedor, sin `.Provider`. La forma `<MiContexto.Provider>` sigue funcionando (no está deprecada).
</details>

## React Router

<details><summary><b>31.</b> ¿Qué paquete se instala hoy para React Router?</summary>

`react-router` (`npm install react-router`). Desde la v7, y consolidado en la v8, `react-router-dom` fue eliminado.
</details>

<details><summary><b>32.</b> Explicá BrowserRouter, Routes, Route y Link.</summary>

BrowserRouter envuelve la app y habilita el ruteo con la API de History. Routes agrupa las rutas. Route define una ruta con `path` y `element`. Link crea enlaces de navegación sin recargar la página.
</details>

<details><summary><b>33.</b> ¿Cuáles son los 3 modos de React Router 8?</summary>

Declarativo (`BrowserRouter` + `Routes`), de datos (`createBrowserRouter`, con loader/action) y framework (`npx create-react-router@latest`, ruteo por archivos).
</details>

## Backend y Tailwind

<details><summary><b>34.</b> ¿Qué hay que resolver para integrar React con un backend?</summary>

Configurar la comunicación HTTP (GET/POST/PUT/DELETE), definir los endpoints, conectar con fetch o axios (normalmente en useEffect) y procesar la respuesta actualizando el estado.
</details>

<details><summary><b>35.</b> ¿Para qué se usan los estados loading y error y el bloque finally?</summary>

loading indica si la petición está en curso (para mostrar "Cargando..."); error guarda el mensaje si falla. `finally` se ejecuta siempre, garantizando que loading se apague tanto si salió bien como si salió mal.
</details>

<details><summary><b>36.</b> ¿Qué es Tailwind y qué significa "utility-first"?</summary>

Un framework de CSS basado en utilidades: en lugar de escribir CSS propio, se usan clases predefinidas (`bg-blue-500`, `p-4`, `flex`) directamente en el JSX.
</details>

<details><summary><b>37.</b> ¿Cómo se instala Tailwind v4 en Vite? ¿Qué cambió respecto a v3?</summary>

`npm install tailwindcss @tailwindcss/vite`, agregar `tailwindcss()` a los plugins de `vite.config.js` y poner `@import "tailwindcss";` en el CSS. En v3 se usaban las tres directivas `@tailwind` y un `tailwind.config.js`; en v4 no hacen falta.
</details>

<details><summary><b>38.</b> ¿Cómo funciona Tailwind por dentro?</summary>

Escanea los archivos buscando clases, genera solo el CSS de las clases usadas, lo optimiza en un archivo mínimo y en desarrollo actualiza los estilos al instante.
</details>

<details><summary><b>39.</b> ¿Qué significa <code>text-sm md:text-base lg:text-lg</code>?</summary>

Responsive mobile-first: texto chico por defecto (móvil), mediano desde 768px (md) y grande desde 1024px (lg).
</details>
