const jsonServer = require('json-server')
const db = require('/fakeapis/index.js')
const server = jsonServer.create()
const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})