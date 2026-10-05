/*
 * ─────────────────────────────────────────────────────────────
 *  App "navegadora" del curso.
 *  Busca solita todos los Ejemplo.jsx / EjercicioN.jsx dentro de
 *  src/niveles y los muestra en un menú. NO hace falta que la
 *  entiendas ni la toques: vos trabajás en src/niveles y src/playground.
 * ─────────────────────────────────────────────────────────────
 */
import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { marked } from 'marked'
import { LECCIONES, NIVELES } from './temario'
import AtrapaErrores from './AtrapaErrores'
import './markdown.css'

// import.meta.glob es una función de Vite que importa muchos archivos a la vez
const ejercicios = import.meta.glob('../niveles/**/*.jsx')
const soluciones = import.meta.glob('../soluciones/**/*.jsx')
const fuentes = import.meta.glob('../niveles/**/*.jsx', {
  query: '?raw',
  import: 'default',
  eager: true,
})
const playground = import.meta.glob('../playground/MiApp.jsx')
const teorias = import.meta.glob('../niveles/**/README.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const ES_ENTRADA = /\/(Ejemplo|Ejercicio\d+)\.jsx$/

function leerCabecera(codigo = '') {
  const m = codigo.match(/^\s*\/\*\*([\s\S]*?)\*\//)
  if (!m) return { titulo: '', texto: '' }
  const lineas = m[1].split('\n').map((l) => l.replace(/^\s*\* ?/, ''))
  while (lineas.length && !lineas[0].trim()) lineas.shift()
  const titulo = lineas.shift() ?? ''
  return { titulo: titulo.trim(), texto: lineas.join('\n').trim() }
}

function armarTemario() {
  const niveles = {}
  for (const ruta of Object.keys(ejercicios).sort()) {
    if (!ES_ENTRADA.test(ruta)) continue
    const [, , nivel, leccion, archivo] = ruta.split('/')
    const { titulo, texto } = leerCabecera(fuentes[ruta])
    const estrellas = (titulo.match(/⭐/g) || []).length
    niveles[nivel] ??= {}
    niveles[nivel][leccion] ??= []
    niveles[nivel][leccion].push({
      id: ruta,
      archivo: archivo.replace('.jsx', ''),
      titulo: titulo.replace(/⭐/g, '').trim() || archivo,
      consigna: texto,
      estrellas,
      archivoVsCode: ruta.replace('../', 'src/'),
      solucion: soluciones[ruta.replace('/niveles/', '/soluciones/')],
      teoria: teorias[`../niveles/${nivel}/${leccion}/README.md`],
      archivoTeoria: `src/niveles/${nivel}/${leccion}/README.md`,
      cargar: ejercicios[ruta],
    })
  }
  // Ejemplo primero, después Ejercicio1, Ejercicio2...
  for (const n of Object.values(niveles))
    for (const l of Object.values(n))
      l.sort((a, b) =>
        a.archivo.localeCompare(b.archivo, 'es', { numeric: true }),
      )
  return niveles
}

// La app del curso lee el texto de tus archivos para mostrar la consigna, así que
// cuando guardás un ejercicio Vite también recarga ESTE módulo. Guardamos el caché
// en import.meta.hot.data para reutilizar los mismos componentes y que el HMR
// conserve el estado (si no, el contador volvería a 0 en cada Ctrl+S).
const cacheLazy = import.meta.hot?.data.cacheLazy ?? new Map()
if (import.meta.hot) import.meta.hot.data.cacheLazy = cacheLazy
function componenteLazy(clave, cargar) {
  if (!cacheLazy.has(clave)) cacheLazy.set(clave, lazy(cargar))
  return cacheLazy.get(clave)
}

function leer(clave, def) {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? def
  } catch {
    return def
  }
}
function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor))
  } catch {
    /* nada */
  }
}

const PLAYGROUND = {
  id: 'playground',
  titulo: 'Mi playground (practicá libre)',
  consigna:
    'Este es tu espacio libre. Abrí src/playground/MiApp.jsx y escribí lo que quieras: probá cosas, rompé cosas, repasá antes del parcial.',
  archivoVsCode: 'src/playground/MiApp.jsx',
  estrellas: 0,
  cargar: playground['../playground/MiApp.jsx'],
}

export default function Curso() {
  const temario = useMemo(armarTemario, [])
  const todas = useMemo(
    () => [
      PLAYGROUND,
      ...Object.values(temario).flatMap((n) => Object.values(n).flat()),
    ],
    [temario],
  )
  const [actualId, setActualId] = useState(() =>
    leer('curso:actual', todas[1]?.id),
  )
  const [vista, setVista] = useState('codigo') // 'codigo' | 'solucion' | 'teoria'
  const verSolucion = vista === 'solucion'
  const [hechos, setHechos] = useState(() => leer('curso:hechos', {}))
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [version, setVersion] = useState(0)

  const actual = todas.find((e) => e.id === actualId) ?? todas[1]
  const indice = todas.indexOf(actual)

  useEffect(() => guardar('curso:actual', actual.id), [actual.id])
  useEffect(() => guardar('curso:hechos', hechos), [hechos])

  function elegir(id) {
    // volvemos la URL a "/" para que los ejercicios de React Router arranquen limpios
    window.history.replaceState(null, '', '/')
    setActualId(id)
    setVista('codigo')
    setMenuAbierto(false)
    setVersion((v) => v + 1)
  }

  const conSolucion = verSolucion && actual.solucion
  const Vista = componenteLazy(
    (conSolucion ? 'sol:' : '') + actual.id,
    conSolucion ? actual.solucion : actual.cargar,
  )

  const totalEj = todas.filter((e) => e.archivo?.startsWith('Ejercicio')).length
  const totalHechos = todas.filter(
    (e) => e.archivo?.startsWith('Ejercicio') && hechos[e.id],
  ).length

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      {/* ───────── Menú lateral ───────── */}
      <aside
        className={`${menuAbierto ? 'fixed inset-0 z-40 block' : 'hidden'} w-full overflow-y-auto bg-slate-900 p-4 text-slate-200 md:sticky md:top-0 md:block md:h-screen md:w-80 md:shrink-0`}
      >
        <div className="mb-4 flex items-center gap-2">
          <img src="/react.svg" className="h-8 w-8 animate-[spin_12s_linear_infinite]" />
          <div>
            <h1 className="text-lg leading-tight font-bold text-white">Curso de React</h1>
            <p className="text-xs text-slate-400">Hooks · Rutas · Tailwind v4</p>
          </div>
          <button
            className="ml-auto rounded px-2 text-2xl md:hidden"
            onClick={() => setMenuAbierto(false)}
          >
            ×
          </button>
        </div>

        <div className="mb-4 rounded-lg bg-slate-800 p-3">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Tu progreso</span>
            <span>
              {totalHechos}/{totalEj} ejercicios
            </span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-700">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all"
              style={{ width: `${(totalHechos / totalEj) * 100}%` }}
            />
          </div>
        </div>

        <BotonMenu
          activo={actual.id === 'playground'}
          onClick={() => elegir('playground')}
        >
          🧪 Mi playground
        </BotonMenu>

        {Object.entries(temario).map(([nivel, lecciones]) => (
          <div key={nivel} className="mt-5">
            <h2 className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              {NIVELES[nivel]?.titulo ?? nivel}
            </h2>
            {Object.entries(lecciones).map(([leccion, entradas]) => (
              <details
                key={leccion}
                open={entradas.some((e) => e.id === actual.id)}
                className="group"
              >
                <summary className="cursor-pointer list-none rounded-md px-2 py-1.5 text-sm font-semibold text-slate-100 hover:bg-slate-800">
                  <span className="mr-1 inline-block transition group-open:rotate-90">›</span>
                  {LECCIONES[leccion] ?? leccion}
                </summary>
                <div className="ml-3 border-l border-slate-700 pl-2">
                  {entradas.map((e) => (
                    <BotonMenu
                      key={e.id}
                      activo={e.id === actual.id}
                      onClick={() => elegir(e.id)}
                    >
                      <span className="w-4">
                        {e.archivo === 'Ejemplo' ? '📖' : hechos[e.id] ? '✅' : '◻️'}
                      </span>
                      <span className="flex-1 truncate">{e.titulo}</span>
                      <span className="text-[10px] text-amber-300">
                        {'★'.repeat(e.estrellas)}
                      </span>
                    </BotonMenu>
                  ))}
                </div>
              </details>
            ))}
          </div>
        ))}
        <p className="mt-6 text-xs text-slate-500">
          📚 La teoría está en el README.md de cada carpeta y en /docs
        </p>
      </aside>

      {/* ───────── Contenido ───────── */}
      <main className="min-w-0 flex-1 p-4 md:p-8">
        <button
          className="mb-4 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setMenuAbierto(true)}
        >
          ☰ Menú
        </button>

        <header className="mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {actual.estrellas > 0 && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                {'★'.repeat(actual.estrellas)}{' '}
                {['', 'Fácil', 'Medio', 'Desafío'][actual.estrellas]}
              </span>
            )}
            {actual.archivo === 'Ejemplo' && (
              <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-700">
                Ejemplo para leer
              </span>
            )}
          </div>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl">{actual.titulo}</h2>
          <p className="mt-1 text-sm text-slate-500">
            Abrí en VSCode:{' '}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-slate-700 select-all">
              {actual.archivoVsCode}
            </code>{' '}
            <span className="hidden lg:inline">(Ctrl+P y pegá la ruta)</span>
          </p>
        </header>

        {actual.consigna && vista !== 'teoria' && (
          <details open className="mb-4 rounded-xl bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">📝 Consigna</summary>
            <pre className="mt-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-slate-700">
              {actual.consigna}
            </pre>
          </details>
        )}

        <div className="mb-3 flex flex-wrap items-center gap-2">
          {(actual.solucion || actual.teoria) && (
            <div className="flex rounded-lg bg-slate-200 p-1 text-sm">
              <Tab activo={vista === 'codigo'} onClick={() => setVista('codigo')}>
                👩‍💻 Tu código
              </Tab>
              {actual.solucion && (
                <Tab activo={vista === 'solucion'} onClick={() => setVista('solucion')}>
                  🔑 Solución
                </Tab>
              )}
              {actual.teoria && (
                <Tab activo={vista === 'teoria'} onClick={() => setVista('teoria')}>
                  📚 Teoría
                </Tab>
              )}
            </div>
          )}
          <button
            className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm hover:bg-slate-300"
            onClick={() => elegir(actual.id)}
            title="Vuelve a montar el componente desde cero"
          >
            ↻ Reiniciar
          </button>
          {actual.archivo?.startsWith('Ejercicio') && (
            <label className="ml-auto flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm shadow-sm">
              <input
                type="checkbox"
                className="accent-emerald-500"
                checked={!!hechos[actual.id]}
                onChange={(ev) =>
                  setHechos((h) => ({ ...h, [actual.id]: ev.target.checked }))
                }
              />
              ¡Lo terminé!
            </label>
          )}
        </div>

        {verSolucion && (
          <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            🔑 Estás viendo la solución. El código está en{' '}
            <code>{actual.archivoVsCode.replace('/niveles/', '/soluciones/')}</code>.
            ¡Intentalo vos primero!
          </p>
        )}

        {vista === 'teoria' ? (
          <article className="md-teoria rounded-2xl bg-white p-5 shadow-sm md:p-8">
            <p className="mb-4 text-xs text-slate-400">
              📄 {actual.archivoTeoria} (en VSCode: Ctrl+Shift+V para verlo así)
            </p>
            <div dangerouslySetInnerHTML={{ __html: marked.parse(actual.teoria) }} />
          </article>
        ) : (
          <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-4 md:p-6">
            <AtrapaErrores key={`${actual.id}-${verSolucion}-${version}`}>
              <Suspense fallback={<p className="text-slate-400">Cargando…</p>}>
                <Vista />
              </Suspense>
            </AtrapaErrores>
          </section>
        )}

        <nav className="mt-6 flex justify-between gap-2 text-sm">
          {indice > 0 ? (
            <button
              className="rounded-lg bg-white px-4 py-2 shadow-sm hover:bg-slate-50"
              onClick={() => elegir(todas[indice - 1].id)}
            >
              ← {todas[indice - 1].titulo}
            </button>
          ) : (
            <span />
          )}
          {indice < todas.length - 1 && (
            <button
              className="rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-slate-700"
              onClick={() => elegir(todas[indice + 1].id)}
            >
              {todas[indice + 1].titulo} →
            </button>
          )}
        </nav>
      </main>
    </div>
  )
}

function BotonMenu({ activo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition ${
        activo ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-slate-800'
      }`}
    >
      {children}
    </button>
  )
}

function Tab({ activo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1 ${activo ? 'bg-white shadow-sm' : 'text-slate-600'}`}
    >
      {children}
    </button>
  )
}
