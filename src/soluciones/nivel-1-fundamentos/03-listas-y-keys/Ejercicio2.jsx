const alumnos = [
  { id: 1, nombre: 'Ana', nota: 9 },
  { id: 2, nombre: 'Bruno', nota: 4 },
  { id: 3, nombre: 'Carla', nota: 7 },
  { id: 4, nombre: 'Diego', nota: 10 },
  { id: 5, nombre: 'Eli', nota: 5 },
  { id: 6, nombre: 'Facu', nota: 8 },
]

function Ejercicio2() {
  const promedio = (alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length).toFixed(2)
  const aprobados = alumnos.filter((a) => a.nota >= 6)
  const honor = alumnos.filter((a) => a.nota >= 9)

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
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-2">{a.nombre}</td>
              <td className="p-2">{a.nota}</td>
              <td className={`p-2 font-semibold ${a.nota >= 6 ? 'text-emerald-600' : 'text-red-600'}`}>
                {a.nota >= 6 ? 'Aprobado' : 'Desaprobado'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Promedio: <b>{promedio}</b> · Aprobados: <b>{aprobados.length}</b> de {alumnos.length}
      </p>

      <h3 className="font-bold">🏅 Cuadro de honor</h3>
      <ul className="list-disc pl-6">
        {honor.map((a) => (
          <li key={a.id}>
            {a.nombre} ({a.nota})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio2
