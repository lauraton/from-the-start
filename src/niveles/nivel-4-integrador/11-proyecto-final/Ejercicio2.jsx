/**
 * ⭐⭐⭐ SIMULACRO DE PARCIAL — Veterinaria "Huellitas" 🐾  (⏱️ 2 horas · 10 puntos)
 *
 * La veterinaria necesita una app para gestionar los turnos. Usá los datos iniciales de abajo.
 * Organizá el código en una carpeta nueva (ej: ./veterinaria/) con components/, pages/, context/ y hooks/.
 *
 * 1) RUTAS (1,5 pts) — con react-router:
 *      "/"            → Listado de turnos
 *      "/nuevo"       → Formulario de nuevo turno
 *      "/turno/:id"   → Detalle de un turno
 *      cualquier otra → Página 404
 *    Navbar con NavLink (el activo resaltado) visible en todas las páginas.
 *
 * 2) ESTADO GLOBAL (2 pts) — TurnosContext con un Provider propio y un custom hook useTurnos().
 *    Expone: turnos, agregarTurno(turno), cambiarEstado(id, estado).
 *    Estados posibles de un turno: "pendiente" | "atendido" | "cancelado".
 *
 * 3) LISTADO (2 pts)
 *    - Componente TarjetaTurno que recibe los datos por props (mascota, especie, dueño, fecha, estado).
 *    - Botones de filtro: Todos / Pendientes / Atendidos / Cancelados.
 *    - Texto "Mostrando X turnos". Si no hay: "No hay turnos para mostrar 🐶".
 *    - Cada tarjeta lleva al detalle (Link).
 *    - El estado se ve como badge de color (pendiente amarillo, atendido verde, cancelado gris).
 *
 * 4) FORMULARIO (2 pts) — inputs controlados: mascota, dueño, especie (select: Perro, Gato, Otro),
 *    fecha (type="date") y motivo (textarea).
 *    - Todos obligatorios: el botón Guardar se deshabilita si falta alguno.
 *    - La fecha no puede ser anterior a hoy → mensaje de error.
 *    - Al guardar: agregar el turno (estado "pendiente", id único) y volver al listado con useNavigate.
 *
 * 5) DETALLE (1 pt) — useParams. Muestra todo el turno. Si está pendiente, botones
 *    "✅ Marcar atendido" y "❌ Cancelar turno". Si el id no existe: "Turno no encontrado".
 *
 * 6) EFECTOS Y HOOKS (1 pt)
 *    - useEffect: el título de la pestaña dice "Huellitas (N pendientes)".
 *    - Custom hook useLocalStorage para que los turnos no se pierdan con F5.
 *
 * 7) ESTILOS (0,5 pts) — Tailwind v4. Grilla de tarjetas: 1 columna en móvil, 2 en md, 3 en lg.
 *
 * Las preguntas teóricas del simulacro están en docs/simulacro-parcial.md.
 * Cuando termines, compará con la Solución. ¡Éxitos! 🍀
 */

export const turnosIniciales = [
  { id: 1, mascota: 'Firulais', especie: 'Perro', duenio: 'Carla Méndez', fecha: '2026-10-12', motivo: 'Vacuna antirrábica', estado: 'pendiente' },
  { id: 2, mascota: 'Michi', especie: 'Gato', duenio: 'Juan Pérez', fecha: '2026-10-10', motivo: 'Control anual', estado: 'atendido' },
  { id: 3, mascota: 'Pancho', especie: 'Otro', duenio: 'Sofía Ruiz', fecha: '2026-10-15', motivo: 'El loro no habla 🦜', estado: 'pendiente' },
  { id: 4, mascota: 'Luna', especie: 'Perro', duenio: 'Diego Álvarez', fecha: '2026-10-08', motivo: 'Corte de uñas', estado: 'cancelado' },
]

function Ejercicio2() {
  return (
    <div className="py-10 text-center">
      <p className="text-6xl">🐾</p>
      <h1 className="text-2xl font-bold">Veterinaria Huellitas</h1>
      <p className="text-slate-500">Leé la consigna de arriba y arrancá. Reemplazá todo este componente.</p>
    </div>
  )
}

export default Ejercicio2
