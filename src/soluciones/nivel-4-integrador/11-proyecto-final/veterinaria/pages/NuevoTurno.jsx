import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTurnos } from '../context/TurnosContext'

const vacio = { mascota: '', duenio: '', especie: 'Perro', fecha: '', motivo: '' }

function NuevoTurno() {
  const [form, setForm] = useState(vacio)
  const { agregarTurno } = useTurnos()
  const navigate = useNavigate()

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const hoy = new Date().toISOString().slice(0, 10)
  const fechaPasada = form.fecha !== '' && form.fecha < hoy
  const incompleto = Object.values(form).some((v) => v.trim() === '')

  function guardar(e) {
    e.preventDefault()
    agregarTurno(form)
    navigate('/')
  }

  const input = 'w-full rounded-lg border bg-white px-3 py-2'

  return (
    <form onSubmit={guardar} className="mx-auto max-w-md space-y-3">
      <h1 className="text-2xl font-bold">Nuevo turno</h1>
      <input className={input} name="mascota" placeholder="Nombre de la mascota" value={form.mascota} onChange={cambiar} />
      <input className={input} name="duenio" placeholder="Dueño/a" value={form.duenio} onChange={cambiar} />
      <select className={input} name="especie" value={form.especie} onChange={cambiar}>
        <option>Perro</option>
        <option>Gato</option>
        <option>Otro</option>
      </select>
      <div>
        <input className={input} type="date" name="fecha" value={form.fecha} onChange={cambiar} />
        {fechaPasada && <p className="text-sm text-red-600">La fecha no puede ser anterior a hoy</p>}
      </div>
      <textarea className={input} name="motivo" placeholder="Motivo de la consulta" value={form.motivo} onChange={cambiar} />
      <button
        disabled={incompleto || fechaPasada}
        className="w-full rounded-lg bg-teal-600 py-2 font-semibold text-white disabled:opacity-40"
      >
        Guardar turno
      </button>
    </form>
  )
}

export default NuevoTurno
