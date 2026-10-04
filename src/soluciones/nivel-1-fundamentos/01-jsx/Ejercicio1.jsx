function Ejercicio1() {
  const stock = 0

  return (
    <div>
      {/* 1: style recibe un objeto con propiedades en camelCase */}
      <div style={{ background: 'violet', padding: 12 }}>Caja violeta</div>

      {/* 2: className */}
      <h2 className="mt-4 text-xl font-bold">Formulario</h2>

      {/* 3: htmlFor */}
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" className="ml-2 rounded border px-2" />

      {/* 4: onClick en camelCase */}
      <button className="ml-2 rounded bg-slate-800 px-3 text-white" onClick={() => alert('¡Funciona!')}>
        Enviar
      </button>

      {/* 5: comparamos para que la condición sea true/false y no el número 0 */}
      <div className="mt-4">{stock > 0 && <p>Quedan {stock} unidades</p>}</div>
    </div>
  )
}

export default Ejercicio1
