// ─────────────────────────────────────────────────────────────
//  🖥️  Mini backend para practicar (lección 10)
//  Correlo en OTRA terminal con:   npm run api
//  Queda escuchando en http://localhost:3000
//
//  Endpoints:
//    GET    /api/users        → lista de usuarios
//    GET    /api/users/:id    → un usuario
//    POST   /api/users        → crea   (body JSON: { name, email, rol })
//    PUT    /api/users/:id    → edita  (body JSON con los campos a cambiar)
//    DELETE /api/users/:id    → borra
//
//  Los datos viven en memoria: si cortás el servidor (Ctrl+C) vuelven a los originales.
//  No usa ninguna librería: solo el módulo "http" que viene con Node.
// ─────────────────────────────────────────────────────────────
import http from 'node:http'

const PUERTO = 3000
const DEMORA_MS = 600 // para que llegues a ver el "Cargando..."

let siguienteId = 4
let users = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@ejemplo.com', rol: 'admin' },
  { id: 2, name: 'Alan Turing', email: 'alan@ejemplo.com', rol: 'editor' },
  { id: 3, name: 'Grace Hopper', email: 'grace@ejemplo.com', rol: 'lector' },
]

function responder(res, status, datos) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    // CORS: permite que el front (localhost:5173) le pegue a este back (localhost:3000)
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(datos === undefined ? '' : JSON.stringify(datos))
}

function leerBody(req) {
  return new Promise((resolve) => {
    let texto = ''
    req.on('data', (parte) => (texto += parte))
    req.on('end', () => {
      try {
        resolve(texto ? JSON.parse(texto) : {})
      } catch {
        resolve(null)
      }
    })
  })
}

const servidor = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PUERTO}`)
  console.log(`${req.method} ${url.pathname}`)

  if (req.method === 'OPTIONS') return responder(res, 204)

  await new Promise((r) => setTimeout(r, DEMORA_MS))

  const partes = url.pathname.split('/').filter(Boolean) // ['api', 'users', '2']
  if (partes[0] !== 'api' || partes[1] !== 'users') {
    return responder(res, 404, { error: 'Ruta no encontrada. Probá /api/users' })
  }
  const id = partes[2] ? Number(partes[2]) : null

  // GET /api/users
  if (req.method === 'GET' && id === null) return responder(res, 200, users)

  // GET /api/users/:id
  if (req.method === 'GET') {
    const user = users.find((u) => u.id === id)
    return user ? responder(res, 200, user) : responder(res, 404, { error: 'Usuario no encontrado' })
  }

  // POST /api/users
  if (req.method === 'POST' && id === null) {
    const body = await leerBody(req)
    if (!body || !body.name || !body.email) {
      return responder(res, 400, { error: 'Faltan datos: name y email son obligatorios' })
    }
    const nuevo = { id: siguienteId++, name: body.name, email: body.email, rol: body.rol || 'lector' }
    users.push(nuevo)
    return responder(res, 201, nuevo)
  }

  // PUT /api/users/:id
  if (req.method === 'PUT' && id !== null) {
    const body = await leerBody(req)
    const user = users.find((u) => u.id === id)
    if (!user) return responder(res, 404, { error: 'Usuario no encontrado' })
    if (!body) return responder(res, 400, { error: 'JSON inválido' })
    const actualizado = { ...user, ...body, id }
    users = users.map((u) => (u.id === id ? actualizado : u))
    return responder(res, 200, actualizado)
  }

  // DELETE /api/users/:id
  if (req.method === 'DELETE' && id !== null) {
    const existe = users.some((u) => u.id === id)
    if (!existe) return responder(res, 404, { error: 'Usuario no encontrado' })
    users = users.filter((u) => u.id !== id)
    return responder(res, 204)
  }

  responder(res, 405, { error: 'Método no permitido' })
})

servidor.listen(PUERTO, () => {
  console.log(`\n✅ API corriendo en http://localhost:${PUERTO}/api/users`)
  console.log('   (dejá esta terminal abierta y usá otra para npm run dev)\n')
})
