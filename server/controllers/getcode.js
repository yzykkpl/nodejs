var rp = require('request-promise');
module.exports = async function (ctx, next) {
  var options = {
    url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=7_Qj_M4SnuEGR598xUYe-FMY9El_9EOzrHSZHN7mCUTkR3oXKwKtCb1bN0C0wb4ga4A-Xk4utHQcVOTJ-UB067rFwsZB2m8KxbvMWbtv5RuW58uLpKDqnlnZ5Zb-BrqAaS2CZq7UMPch61T6aSKUVbAEAXHI',
    method: 'POST',
    body:{
      path:'start'
    }
  };
  await rp(options)
    .then(function (parsedBody) {

      ctx.response.body = { parsedBody }
    })
    .catch(function (err) {
      ctx.response.body = { msg: 'err' }
    })
}