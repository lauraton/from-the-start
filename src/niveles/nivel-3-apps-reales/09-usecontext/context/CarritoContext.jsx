// TODO (Ejercicio 3): contexto del carrito
//
// CarritoProvider tiene un estado "items" (array de { id, nombre, precio, emoji, cantidad })
// y expone en el value:
//   items, agregar(producto), quitar(id), vaciar(), totalUnidades, totalPrecio
//
// useCarrito() devuelve useContext(CarritoContext)

export function CarritoProvider({ children }) {
  return children
}

export function useCarrito() {
  return { items: [], agregar: () => {}, quitar: () => {}, vaciar: () => {}, totalUnidades: 0, totalPrecio: 0 }
}
