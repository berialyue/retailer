const mongoose = require('mongoose')
const db = 'mongodb://localhost/retailer-db'
const glob = require('glob')
const { resolve } = require('path')

mongoose.Promise = global.Promise

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}

exports.connect = () => {
  // 连接数据库
  mongoose.connect(db)

  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    // 增加数据库连接的事件监听
    mongoose.connection.on('disconnected', () => {
      // 进行重连
      console.log('**********************数据库断开**********************')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db, {useNewUrlParser: true})
      } else {
        reject(new Error('数据库出现问题，请手动修复'))
      }
    })

    // 数据库出现错误的时候
    mongoose.connection.on('error', err => {
      console.log('**********************数据库断开**********************')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db, {useNewUrlParser: true})
      } else {
        reject(err)
        throw new Error('数据库出现问题，请手动修复')
      }
    })

    // 链接打开的时候
    mongoose.connection.once('open', () => {
      console.log('MongoDB Connected successfully!')
      resolve()
    })
  })
}
