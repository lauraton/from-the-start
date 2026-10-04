import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext(null)

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])

  function agregar(producto) {
    setItems((actuales) => {
      const existe = actuales.find((i) => i.id === producto.id)
      if (existe) {
        return actuales.map((i) => (i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i))
      }
      return [...actuales, { ...producto, cantidad: 1 }]
    })
  }

  const quitar = (id) => setItems((actuales) => actuales.filter((i) => i.id !== id))
  const vaciar = () => setItems([])

  const totalUnidades = items.reduce((acc, i) => acc + i.cantidad, 0)
  const totalPrecio = items.reduce((acc, i) => acc + i.cantidad * i.precio, 0)

  return (
    <CarritoContext value={{ items, agregar, quitar, vaciar, totalUnidades, totalPrecio }}>
      {children}
    </CarritoContext>
  )
}

export function useCarrito() {
  return useContext(CarritoContext)
}
