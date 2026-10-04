const colores = {
  primario: 'bg-sky-500 hover:bg-sky-600 text-white',
  peligro: 'bg-red-500 hover:bg-red-600 text-white',
  secundario: 'bg-slate-200 hover:bg-slate-300 text-slate-800',
}
const tamaños = {
  chico: 'px-3 py-1.5 text-sm',
  grande: 'px-6 py-3 text-lg',
}

function Boton({ variante = 'primario', tamaño = 'chico', onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${colores[variante]} ${tamaños[tamaño]} rounded-lg font-semibold transition`}
    >
      {children}
    </button>
  )
}

const estilosAlerta = {
  info: { icono: 'ℹ️', clases: 'bg-sky-50 border-sky-300 text-sky-800' },
  exito: { icono: '✅', clases: 'bg-emerald-50 border-emerald-300 text-emerald-800' },
  error: { icono: '❌', clases: 'bg-red-50 border-red-300 text-red-800' },
}

function Alerta({ tipo = 'info', titulo, children }) {
  const { icono, clases } = estilosAlerta[tipo]
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${clases}`}>
      <span className="text-xl">{icono}</span>
      <div>
        <p className="font-bold">{titulo}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  )
}

function Ejercicio3() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Boton>Guardar</Boton>
        <Boton variante="peligro" onClick={() => alert('¡Borrado!')}>
          Borrar
        </Boton>
        <Boton variante="secundario" tamaño="grande">
          Cancelar
        </Boton>
      </div>
      <div className="space-y-3">
        <Alerta tipo="info" titulo="Para tu información">
          El parcial es el jueves.
        </Alerta>
        <Alerta tipo="exito" titulo="¡Guardado!">
          Tus cambios se guardaron correctamente.
        </Alerta>
        <Alerta tipo="error" titulo="Ups">
          No se pudo conectar con el servidor.
        </Alerta>
      </div>
    </div>
  )
}

export default Ejercicio3
