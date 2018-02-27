var rp = require('request-promise');
module.exports = async function (ctx, next) {
  var code = ctx.request.body.code
  var result = {};
  var options={
    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxb27e594a54a28631&secret=9ffda34b6bd3443f14f06900cd23846a&js_code='+code+'&grant_type=authorization_code',
    method:'get'
  };
  await rp(options)
  .then (function (parsedBody) {

    ctx.response.body = parsedBody
  })
  .catch(function(err){
    ctx.response.body = { msg:'err' }
  })
  //ctx.response.body = { msg: code }

}