# 📝 Simulacro de parcial

**Duración sugerida:** 2 h 30 min · Parte teórica (30 min) + Parte práctica (2 h)
Sin mirar apuntes. Al final, corregí con las respuestas de abajo y con la solución del práctico.

---

## Parte 1 — Teoría (10 puntos, 1 punto c/u)

1. Explicá qué es el Virtual DOM y qué relación tiene con la prop `key`.
2. ¿Qué diferencia hay entre props y state? Dá un ejemplo de cada uno.
3. Completá: `useEffect(fn)` se ejecuta ______; `useEffect(fn, [])` se ejecuta ______; `useEffect(fn, [id])` se ejecuta ______.
4. ¿Qué es el HMR de Vite y qué beneficio tiene sobre una recarga normal?
5. Encontrá los 3 errores:
   ```jsx
   function tarjeta(props) {
     return (
       <h2 class="titulo">{props.titulo}</h2>
       <p>{props.texto}</p>
     )
   }
   ```
6. ¿Por qué este código no suma 3? ¿Cómo lo arreglás?
   ```jsx
   const sumar3 = () => { setN(n + 1); setN(n + 1); setN(n + 1) }
   ```
7. ¿Qué paquete instalás para usar React Router hoy y qué cambió respecto a versiones anteriores?
8. ¿Qué es el *prop drilling* y cómo lo resuelve `useContext`? Nombrá los 3 pasos.
9. ¿Qué hace la función que retorna un `useEffect`? Dá un caso donde sea necesaria.
10. Nombrá los pasos para instalar Tailwind v4 en un proyecto de Vite. ¿Qué archivo de v3 ya no hace falta?

### Bonus (+1)
¿Qué ventaja trae elegir "React Compiler" al crear un proyecto con Vite?

---

## Parte 2 — Práctica (10 puntos)

👉 Está en el curso: **Nivel 4 → Proyecto final → Simulacro de parcial (Veterinaria)**
Archivo: `src/niveles/nivel-4-integrador/11-proyecto-final/Ejercicio2.jsx`

---

## ✅ Respuestas de la teoría

<details><summary>Ver respuestas</summary>

1. Es una copia del DOM en memoria; al cambiar los datos React compara la versión anterior con la nueva y actualiza solo lo que cambió. La `key` le permite identificar cada elemento de una lista durante esa comparación (reconciliación).
2. Props: datos que vienen del padre, de solo lectura (`<Boton texto="Hola" />`). State: datos internos que cambian con un setter (`const [abierto, setAbierto] = useState(false)`).
3. Después de cada render · una sola vez al montar · al montar y cada vez que cambia `id`.
4. Hot Module Replacement: reemplaza solo el módulo modificado sin recargar la página, preservando el estado (formularios, contadores, navegación).
5. (a) El nombre del componente debe empezar con mayúscula (`Tarjeta`). (b) `class` → `className`. (c) Devuelve dos elementos sin padre: envolver en `<>...</>` o un `<div>`.
6. Las tres llamadas leen el mismo valor de `n` (el del render actual), así que las tres setean `n + 1`. Se arregla con la forma funcional: `setN(prev => prev + 1)` tres veces.
7. `react-router` (`npm install react-router`). Desde la v7/v8 ya no existe `react-router-dom`: todo se importa de `react-router`.
8. Pasar props por varios niveles intermedios que no las usan. Context permite leer el dato desde cualquier componente dentro del Provider. Pasos: `createContext`, envolver con el Provider (`<Ctx value={...}>`), consumir con `useContext(Ctx)`.
9. Es la limpieza: se ejecuta al desmontar (y antes de re-ejecutar el efecto). Ej: `clearInterval` de un timer, `controller.abort()` de un fetch, `removeEventListener`.
10. `npm install tailwindcss @tailwindcss/vite` → agregar `tailwindcss()` en `vite.config.js` → `@import "tailwindcss";` en el CSS → `npm run dev`. Ya no hace falta `tailwind.config.js` (ni las directivas `@tailwind`).

**Bonus:** optimiza (memoiza) automáticamente en tiempo de build, así que casi no hace falta usar `useMemo`, `useCallback` ni `React.memo` a mano.
</details>
