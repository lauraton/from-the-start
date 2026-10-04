import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Curso from './_curso/Curso.jsx'

// Este es el punto de entrada, igual al del apunte (Módulo 3).
// En vez de <App />, montamos <Curso />: la app que te deja navegar
// entre todos los ejemplos y ejercicios.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Curso />
  </StrictMode>,
)
