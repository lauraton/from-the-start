import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(`Error ${response.status}`)
        setData(await response.json())
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        // si se canceló (el componente se desmontó), no tocamos el estado
        if (!controller.signal.aborted) setCargando(false)
      }
    }

    cargar()
    return () => controller.abort()
  }, [url])

  return { data, cargando, error }
}

export default useFetch
