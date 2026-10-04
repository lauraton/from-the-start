import { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../useLocalStorage'

const TurnosContext = createContext(null)

export function TurnosProvider({ children, iniciales }) {
  const [turnos, setTurnos] = useLocalStorage('huellitas:turnos', iniciales)

  const agregarTurno = (turno) =>
    setTurnos((actuales) => [...actuales, { ...turno, id: Date.now(), estado: 'pendiente' }])

  const cambiarEstado = (id, estado) =>
    setTurnos((actuales) => actuales.map((t) => (t.id === id ? { ...t, estado } : t)))

  const pendientes = turnos.filter((t) => t.estado === 'pendiente').length

  useEffect(() => {
    document.title = `Huellitas (${pendientes} pendientes)`
    return () => (document.title = 'Curso de React')
  }, [pendientes])

  return <TurnosContext value={{ turnos, agregarTurno, cambiarEstado }}>{children}</TurnosContext>
}

export function useTurnos() {
  return useContext(TurnosContext)
}
