/**
 * ⭐⭐ Formulario de registro (inputs controlados)
 *
 *   1. Guardá nombre, email y edad en el estado. Podés usar 3 useState o UN objeto:
 *        const [form, setForm] = useState({ nombre: '', email: '', edad: '' })
 *      (si usás un objeto, actualizalo con spread: setForm({ ...form, nombre: e.target.value }))
 *   2. Conectá cada input con value + onChange.
 *   3. La tarjeta "Vista previa" se actualiza mientras escribís.
 *   4. Validaciones (mostrá el mensaje en rojo debajo del input):
 *        - email debe incluir "@"            → "Email inválido"
 *        - edad debe ser 18 o más            → "Tenés que ser mayor de edad"
 *      Mostralas solo si el campo NO está vacío.
 *   5. El botón "Registrarme" está deshabilitado si falta algo o hay errores.
 *   6. Al enviar: e.preventDefault(), guardá en un estado "enviado" = true y mostrá
 *      "✅ ¡Bienvenido/a, {nombre}!" en lugar del formulario.
 *
 * ⭐ Desafío extra: un botón "Volver" que limpie el formulario y lo muestre otra vez.
 */

function Ejercicio2() {
  // TODO: estados

  const input = 'w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none'

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form className="space-y-3">
        <div>
          <label className="text-sm font-semibold">Nombre</label>
          <input className={input} />
        </div>
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input className={input} type="email" />
        </div>
        <div>
          <label className="text-sm font-semibold">Edad</label>
          <input className={input} type="number" />
        </div>
        <button className="w-full rounded-lg bg-sky-500 py-2 font-semibold text-white disabled:opacity-40">
          Registrarme
        </button>
      </form>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold text-slate-400 uppercase">Vista previa</p>
        <p className="mt-2 text-xl font-bold">{'(nombre)'}</p>
        <p>{'(email)'}</p>
        <p>{'(edad)'} años</p>
      </div>
    </div>
  )
}

export default Ejercicio2
