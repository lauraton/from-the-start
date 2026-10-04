// TODO etapa 5: useParams + useFetch + mostrar los datos + botón volver
// TODO etapa 6: botón de favorito
import { useParams } from 'react-router'

function Detalle() {
  const { nombre } = useParams()
  return <h1 className="text-2xl font-bold capitalize">Detalle de {nombre}</h1>
}

export default Detalle
