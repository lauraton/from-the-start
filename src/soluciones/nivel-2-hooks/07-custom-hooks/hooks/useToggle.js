import { useState } from 'react'

function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial)
  const alternar = () => setValor((v) => !v)
  return [valor, alternar]
}

export default useToggle
