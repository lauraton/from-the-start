import { useState } from 'react'

const vacio = { nombre: '', email: '', edad: '' }

function Ejercicio2() {
  const [form, setForm] = useState(vacio)
  const [enviado, setEnviado] = useState(false)

  // Una sola función para todos los inputs: usa el atributo "name"
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const errorEmail = form.email !== '' && !form.email.includes('@')
  const errorEdad = form.edad !== '' && Number(form.edad) < 18
  const incompleto = !form.nombre || !form.email || !form.edad
  const deshabilitado = incompleto || errorEmail || errorEdad

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="space-y-3 text-center">
        <p className="text-2xl">✅ ¡Bienvenido/a, {form.nombre}!</p>
        <button
          className="rounded-lg bg-slate-200 px-4 py-2"
          onClick={() => {
            setForm(vacio)
            setEnviado(false)
          }}
        >
          Volver
        </button>
      </div>
    )
  }

  const input = 'w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none'

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-semibold">Nombre</label>
          <input className={input} name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input className={input} type="email" name="email" value={form.email} onChange={handleChange} />
          {errorEmail && <p className="text-sm text-red-500">Email inválido</p>}
        </div>
        <div>
          <label className="text-sm font-semibold">Edad</label>
          <input className={input} type="number" name="edad" value={form.edad} onChange={handleChange} />
          {errorEdad && <p className="text-sm text-red-500">Tenés que ser mayor de edad</p>}
        </div>
        <button
          disabled={deshabilitado}
          className="w-full rounded-lg bg-sky-500 py-2 font-semibold text-white disabled:opacity-40"
        >
          Registrarme
        </button>
      </form>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold text-slate-400 uppercase">Vista previa</p>
        <p className="mt-2 text-xl font-bold">{form.nombre || '(nombre)'}</p>
        <p>{form.email || '(email)'}</p>
        <p>{form.edad || '(edad)'} años</p>
      </div>
    </div>
  )
}

export default Ejercicio2
