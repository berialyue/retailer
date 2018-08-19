const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const SALT_WORK_FACTOR = 10

// 创建我们的用户Schema
const userSchema = new Schema({
  userId: ObjectId,
  userName: {unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()}
})

// 每次存储数据时都要执行
userSchema.pre('save', function (next) {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
})
// userSchema.pre('save', function (next) {
//   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
//     if (err) return next(err)
//     bcrypt.hash(this.password, salt, (err, hash) => {
//       if (err) return next(err)
//       this.password = hash
//       next()
//     })
//   })
// })
// 发布模型
mongoose.model('User', userSchema)
