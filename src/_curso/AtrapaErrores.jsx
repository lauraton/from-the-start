// Muestra un cartel lindo si un ejercicio tira un error, en vez de romper toda la app.
// Está en su propio archivo a propósito: si estuviera en Curso.jsx, cada Ctrl+S
// lo recrearía y se perdería el estado de tus componentes (el HMR no funcionaría).
import { Component } from 'react'

export default class AtrapaErrores extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error)
      return (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-800">
          <p className="font-bold">💥 Tu componente tiró un error:</p>
          <pre className="mt-2 whitespace-pre-wrap text-sm">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <p className="mt-3 text-sm">
            Arreglalo en VSCode y guardá: se recarga solo. Mirá también la consola
            del navegador (F12).
          </p>
        </div>
      )
    return this.props.children
  }
}
