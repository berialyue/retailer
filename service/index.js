const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

app.use(cors())
app.use(bodyParser())

let user = require('./appApi/User')

let router = new Router()
router.use('/user', user.routes())

app.use(router.routes())
app.use(router.allowedMethods())

;(async () => {
  await connect()
  initSchemas()
})()

app.use(async (ctx) => {
  ctx.body = '</h1>hello world</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
