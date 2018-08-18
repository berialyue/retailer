const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')

;(async () => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({
    userName: 'berialyue',
    password: '123456'
  })
  oneUser.save().then(() => {
    console.log('add successd')
  })
  let users = await User.findOne({}).exec()

  console.log('-------------------------------')
  console.log(users)
  console.log('-------------------------------')
})()

app.use(async (ctx) => {
  ctx.body = '</h1>hello world</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
