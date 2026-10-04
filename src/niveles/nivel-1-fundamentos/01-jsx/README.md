# 🧩 Lección 1 — JSX

> **JSX** (JavaScript XML) es una extensión de JavaScript que te deja escribir algo **parecido a HTML** dentro de JS. Antes de llegar al navegador, se compila a JavaScript puro.

```jsx
const elemento = <h1 className="titulo">Hola {nombre}</h1>
```

> 🆕 **Ya no hace falta** `import React from 'react'` para usar JSX. Vite usa el "automatic runtime": solo importás lo que usás, por ejemplo `import { useState } from 'react'`.

---

## Las 7 reglas del JSX (¡las toman siempre!)

### 1. Un solo elemento padre
```jsx
// ❌ Error: dos elementos sueltos
return (
  <h1>Hola</h1>
  <p>Chau</p>
)

// ✅ Envolvelos en un <div> o en un Fragment <>...</>
return (
  <>
    <h1>Hola</h1>
    <p>Chau</p>
  </>
)
```

### 2. `className` en vez de `class` (y `htmlFor` en vez de `for`)
`class` y `for` son palabras reservadas de JavaScript.
```jsx
<label htmlFor="email" className="etiqueta">Email</label>
```

### 3. Toda etiqueta se cierra
```jsx
<img src="foto.png" alt="foto" />
<br />
<input type="text" />
```

### 4. Llaves `{}` = "acá va JavaScript"
Adentro va cualquier **expresión** (algo que devuelve un valor): variables, cuentas, funciones, ternarios.
```jsx
<p>{nombre.toUpperCase()}</p>
<p>Total: ${precio * cantidad}</p>
```
❗ No podés poner un `if` o un `for` adentro de las llaves (son *sentencias*, no *expresiones*).

### 5. Atributos y eventos en camelCase
```jsx
<button onClick={saludar} tabIndex={0}>Click</button>
```

### 6. `style` recibe un **objeto**, no un texto
```jsx
// doble llave: la de afuera = "JS", la de adentro = el objeto
<div style={{ backgroundColor: 'red', fontSize: 20 }}>Hola</div>
```

### 7. Comentarios
```jsx
{/* Así se comenta dentro del JSX */}
```

---

## Renderizado condicional

```jsx
// Ternario: si/sino
{logueado ? <p>Bienvenido</p> : <p>Iniciá sesión</p>}

// &&: mostrar solo si es verdadero
{tieneMensajes && <span>📩 Tenés mensajes</span>}

// Afuera del JSX sí podés usar if
if (cargando) return <p>Cargando...</p>
```

⚠️ **Trampa clásica con `&&`:** `{cantidad && <p>Hay {cantidad}</p>}` muestra un **0** en pantalla si `cantidad` es 0. Usá `{cantidad > 0 && ...}`.

---

## 🏋️ Ejercicios
- ⭐ `Ejercicio1` — Detective de errores (arreglar JSX roto)
- ⭐⭐ `Ejercicio2` — Mostrar un producto con expresiones y condicionales
- ⭐⭐ `Ejercicio3` — Tarjeta del clima con estilos dinámicos
