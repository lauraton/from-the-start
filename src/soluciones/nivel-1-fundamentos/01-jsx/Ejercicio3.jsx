const temperatura = 30
const llueve = true

function Ejercicio3() {
  let emoji, texto, color

  if (temperatura < 10) {
    emoji = '🥶'
    texto = 'Hace frío'
    color = '#bfdbfe'
  } else if (temperatura < 25) {
    emoji = '🌤️'
    texto = 'Está lindo'
    color = '#bbf7d0'
  } else {
    emoji = '🥵'
    texto = 'Hace calor'
    color = '#fecaca'
  }

  const fahrenheit = Math.round((temperatura * 9) / 5 + 32)

  return (
    <div className="max-w-xs rounded-2xl p-6 text-center shadow" style={{ backgroundColor: color }}>
      <p className="text-6xl">{emoji}</p>
      <p className="mt-2 text-4xl font-bold">{temperatura}°C</p>
      <p className="text-slate-600">{fahrenheit}°F</p>
      <p className="mt-2 text-lg">{texto}</p>
      {llueve && <p className="mt-2 font-semibold">☔ Llevá paraguas</p>}
    </div>
  )
}

export default Ejercicio3
