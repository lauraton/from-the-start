import { useState } from 'react'

function useContador({ inicial = 0, min = -Infinity, max = Infinity, paso = 1 } = {}) {
  const [valor, setValor] = useState(inicial)

  const sumar = () => setValor((v) => Math.min(v + paso, max))
  const restar = () => setValor((v) => Math.max(v - paso, min))
  const reset = () => setValor(inicial)

  return { valor, sumar, restar, reset, esMin: valor <= min, esMax: valor >= max }
}

export default useContador
