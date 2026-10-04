# ⚛️ Curso de React: Hooks, Rutas y Tailwind v4

Curso práctico armado a partir de los apuntes de la cursada: **React 19 + Vite 8 + React Router 8 + Tailwind CSS v4**.
Teoría explicada, ejemplos que podés tocar, **ejercicios por dificultad (⭐ a ⭐⭐⭐)** con su solución, un **proyecto final** y un **simulacro de parcial**.

---

## 🚀 Cómo arrancar (5 minutos)

### 1. Instalá lo necesario (una sola vez)
- **Node.js** (versión LTS): https://nodejs.org → descargar e instalar.
  Para chequear, en una terminal: `node -v` (tiene que decir v20 o más).
- **VSCode**: https://code.visualstudio.com

### 2. Abrí el curso en VSCode
- Descomprimí el `.zip`.
- En VSCode: **Archivo → Abrir carpeta…** → elegí la carpeta `curso-react`.
- Abajo a la derecha te va a sugerir **instalar las extensiones recomendadas** → decile que sí (Tailwind IntelliSense, snippets de React, Prettier…).

### 3. Instalá las dependencias y levantá el curso
Abrí la terminal de VSCode (**Terminal → Nueva terminal**, o `` Ctrl+` ``) y escribí:

```bash
npm install
npm run dev
```

Se abre el navegador con la **app del curso** 🎉 (si no se abre solo, entrá a `http://localhost:5173`).

### 4. (Solo para la lección 10) Prendé el mini backend
En **otra** terminal (botón **+** en el panel de la terminal):
```bash
npm run api
```

---

## 🧭 Cómo se usa

```
┌──────────────── navegador ────────────────┐     ┌──────── VSCode ────────┐
│ Menú con todas las     │  Consigna         │     │  Ejercicio2.jsx        │
│ lecciones y ejercicios │  ─────────        │ ◄── │  // TODO: ...          │
│                        │  Tu resultado     │ Ctrl+S                       │
│ ✅ progreso            │  [Tu código|Solución]│  │                        │
└───────────────────────────────────────────┘     └────────────────────────┘
```

1. En el **navegador** elegís un ejercicio del menú. Arriba te dice **qué archivo abrir**.
2. En **VSCode** abrís ese archivo (`Ctrl+P` y pegás la ruta). La consigna también está en el comentario de arriba del archivo.
3. Escribís el código, guardás con **`Ctrl+S`** y el resultado aparece **al instante** en el navegador (eso es el HMR de Vite 😉).
4. ¿Trabado? Tocá **🔑 Solución** para ver cómo queda (y el código está en `src/soluciones/`, misma ruta).
5. Marcá **"¡Lo terminé!"** para llevar tu progreso.

### Para cada lección
1. 📚 Leé el **`README.md`** de la carpeta de la lección (en VSCode: abrilo y apretá `Ctrl+Shift+V` para verlo lindo, o directo en el botón **📚 Teoría** de la app).
2. 📖 Mirá el **Ejemplo** y tocalo: cambiá cosas, rompelo, arreglalo.
3. 🏋️ Hacé los **ejercicios** en orden de estrellas.

| Dificultad | Significa |
|---|---|
| ⭐ Fácil | Aplicar el concepto tal cual |
| ⭐⭐ Medio | Combinar con cosas anteriores |
| ⭐⭐⭐ Desafío | Nivel parcial / caso real |

---

## 📂 Qué hay en cada carpeta

```
curso-react/
├── README.md                ← estás acá
├── docs/
│   ├── preguntas-teoricas.md      ← 39 preguntas de teoría con respuesta (tipo examen)
│   ├── simulacro-parcial.md       ← simulacro: teoría + práctica, con respuestas
│   ├── machete.md                 ← todo React en una página
│   └── crear-proyecto-desde-cero.md
├── servidor/server.js       ← mini backend para la lección 10 (npm run api)
└── src/
    ├── niveles/             ← 👩‍💻 ACÁ TRABAJÁS VOS
    │   ├── nivel-0-arranque/       00 Hola React (qué es, Vite, HMR, estructura)
    │   ├── nivel-1-fundamentos/    01 JSX · 02 Componentes y props · 03 Listas y keys · 04 Tailwind v4
    │   ├── nivel-2-hooks/          05 useState · 06 useEffect · 07 Custom hooks
    │   ├── nivel-3-apps-reales/    08 React Router · 09 useContext · 10 API y backend
    │   └── nivel-4-integrador/     11 Proyecto final (Pokédex) + Simulacro de parcial
    ├── soluciones/          ← 🔑 las soluciones (¡intentalo primero!)
    ├── playground/MiApp.jsx ← 🧪 espacio libre para probar lo que quieras
    └── _curso/              ← la app navegadora (no hace falta tocarla)
```

---

## 🗓️ Plan de estudio sugerido

| Día | Qué hacer |
|---|---|
| 1 | Nivel 0 + JSX + Componentes y props |
| 2 | Listas + Tailwind |
| 3 | useState (los 4 ejercicios: el 3 y el 4 son clásicos de parcial) |
| 4 | useEffect + Custom hooks |
| 5 | React Router + useContext |
| 6 | API y backend + `docs/preguntas-teoricas.md` |
| 7 | Proyecto final Pokédex |
| 8 | **Simulacro de parcial** cronometrado (`docs/simulacro-parcial.md`) |

---

## 🆘 Problemas comunes

| Problema | Solución |
|---|---|
| `npm` no se reconoce | No está instalado Node.js, o hay que reiniciar VSCode después de instalarlo. |
| En PowerShell: *"la ejecución de scripts está deshabilitada"* | Abrí PowerShell como admin y corré `Set-ExecutionPolicy RemoteSigned`, o usá la terminal **Command Prompt / Git Bash** en VSCode. |
| La pantalla se pone roja con un error | ¡Es normal mientras practicás! Leé el mensaje: dice el archivo y la línea. Arreglalo y guardá. |
| El ejercicio de la API dice "¿Prendiste npm run api?" | Abrí otra terminal y corré `npm run api`. |
| Un ejercicio de React Router quedó en una URL rara | Tocá **↻ Reiniciar** o cambiá de ejercicio. |
| El puerto 5173 está ocupado | Vite usa otro solo (5174…). Mirá la URL que dice la terminal. |
| Quiero empezar un ejercicio de cero | Copiá el contenido original de vuelta, o compará con la solución. Tip: si usás git, `git checkout -- archivo`. |

¡Éxitos en el parcial! 🍀
