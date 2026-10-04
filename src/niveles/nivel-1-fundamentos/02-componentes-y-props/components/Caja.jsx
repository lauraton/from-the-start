// Un componente en su propio archivo. Recibe "titulo" y "children".
function Caja({ titulo, children, color = 'bg-slate-50' }) {
  return (
    <section className={`${color} rounded-xl border p-4`}>
      <h3 className="mb-2 font-bold">{titulo}</h3>
      {children}
    </section>
  )
}

export default Caja
