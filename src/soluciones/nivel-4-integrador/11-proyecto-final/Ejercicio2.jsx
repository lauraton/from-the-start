import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { TurnosProvider } from './veterinaria/context/TurnosContext'
import Navbar from './veterinaria/components/Navbar'
import Listado from './veterinaria/pages/Listado'
import NuevoTurno from './veterinaria/pages/NuevoTurno'
import DetalleTurno from './veterinaria/pages/DetalleTurno'

const turnosIniciales = [
  { id: 1, mascota: 'Firulais', especie: 'Perro', duenio: 'Carla Méndez', fecha: '2026-10-12', motivo: 'Vacuna antirrábica', estado: 'pendiente' },
  { id: 2, mascota: 'Michi', especie: 'Gato', duenio: 'Juan Pérez', fecha: '2026-10-10', motivo: 'Control anual', estado: 'atendido' },
  { id: 3, mascota: 'Pancho', especie: 'Otro', duenio: 'Sofía Ruiz', fecha: '2026-10-15', motivo: 'El loro no habla 🦜', estado: 'pendiente' },
  { id: 4, mascota: 'Luna', especie: 'Perro', duenio: 'Diego Álvarez', fecha: '2026-10-08', motivo: 'Corte de uñas', estado: 'cancelado' },
]

function NoEncontrado() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-2xl font-bold">404 — Esta página se escapó 🐕💨</h1>
      <Link to="/" className="text-teal-700 underline">
        Volver a los turnos
      </Link>
    </div>
  )
}

function Ejercicio2() {
  return (
    <TurnosProvider iniciales={turnosIniciales}>
      <BrowserRouter>
        <div className="overflow-hidden rounded-2xl bg-teal-50">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Listado />} />
              <Route path="/nuevo" element={<NuevoTurno />} />
              <Route path="/turno/:id" element={<DetalleTurno />} />
              <Route path="*" element={<NoEncontrado />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TurnosProvider>
  )
}

export default Ejercicio2
