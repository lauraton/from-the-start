/**
 * El ejemplo del apunte + responsive + estados
 *
 *   • La tarjeta es el mismo código del apunte de Tailwind v4 (Paso 6).
 *   • Achicá la ventana del navegador para ver cómo cambia el texto (responsive).
 *   • Pasá el mouse y hacé click sobre el botón (hover / active).
 */

function Ejemplo() {
  return (
    <div className="space-y-6">
      {/* Ejemplo del apunte (usamos min-h-[350px] en vez de min-h-screen para que entre acá) */}
      <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="rounded-lg bg-white p-8 shadow-2xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">¡Hola desde React + Tailwind v4!</h1>
          <p className="text-gray-600">Tailwind CSS v4 está funcionando correctamente</p>
          <button className="mt-6 rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-900">
            Hacer clic
          </button>
        </div>
      </div>

      {/* Responsive */}
      <p className="rounded-lg bg-slate-100 p-4 text-sm md:text-base lg:text-2xl">
        📱 Soy chico en móvil · 📲 mediano en tablet · 🖥️ GRANDE en desktop
      </p>

      {/* Grid responsive */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {['🍕', '🍔', '🌮', '🍣'].map((comida) => (
          <div
            key={comida}
            className="cursor-pointer rounded-xl bg-amber-100 p-6 text-center text-5xl transition hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            {comida}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ejemplo
