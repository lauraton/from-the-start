// TODO (Ejercicio 1): implementá useToggle
// - Recibe un valor inicial (por defecto false)
// - Guarda un booleano con useState
// - Devuelve un ARRAY: [valor, alternar]   (como useState)
//   donde alternar() lo cambia de true a false y viceversa

function useToggle(inicial = false) {
  return [inicial, () => {}]
}

export default useToggle
