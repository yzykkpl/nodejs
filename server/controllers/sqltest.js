const { mysql } = require('../qcloud')
const uuid = require('node-uuid')
module.exports = async ctx => {
  var id = uuid.v1() 
  // 增
  var book = { id: id, 
  name: "ttt", 
  price: 88 } 
  await mysql("Book").insert(book) 
  // 查 
  var res = await mysql("Book").where({ id }).first() 
  // 改 
  await mysql("Book").update({ price: 66 }).where({ id }) 
  // 删 
  // await mysql("Book").del().where({ id })
  // ctx.state.data = "OK"
}
