/**
 * ⭐⭐ Tabla de notas
 *
 *   1. Mostrá a todos los alumnos en la tabla (una <tr> por alumno, key = id).
 *   2. En la columna "Estado": "Aprobado" en verde si nota >= 6, "Desaprobado" en rojo si no.
 *   3. Calculá el PROMEDIO del curso con reduce y mostralo con 2 decimales (.toFixed(2)).
 *   4. Mostrá cuántos aprobaron usando filter.
 *   5. Abajo, una lista "🏅 Cuadro de honor" solo con los que tienen nota >= 9.
 */

const alumnos = [
  { id: 1, nombre: 'Ana', nota: 9 },
  { id: 2, nombre: 'Bruno', nota: 4 },
  { id: 3, nombre: 'Carla', nota: 7 },
  { id: 4, nombre: 'Diego', nota: 10 },
  { id: 5, nombre: 'Eli', nota: 5 },
  { id: 6, nombre: 'Facu', nota: 8 },
]

function Ejercicio2() {
  // TODO: promedio y aprobados
  const promedio = 0
  const aprobados = []

  return (
    <div className="max-w-md space-y-4">
      <table className="w-full overflow-hidden rounded-xl border text-left">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2">Alumno</th>
            <th className="p-2">Nota</th>
            <th className="p-2">Estado</th>
          </tr>
        </thead>
        <tbody>{/* TODO: filas */}</tbody>
      </table>

      <p>
        Promedio: <b>{promedio}</b> · Aprobados: <b>{aprobados.length}</b> de {alumnos.length}
      </p>

      <h3 className="font-bold">🏅 Cuadro de honor</h3>
      {/* TODO: lista de alumnos con nota >= 9 */}
    </div>
  )
}

export default Ejercicio2
