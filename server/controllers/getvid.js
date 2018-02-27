var rp = require('request-promise');
module.exports = async function (ctx, next) {
  var vid = ctx.request.body.vid;
  var options = {
    url: 'https://vv.video.qq.com/getinfo?vids=' + vid + '&platform=101001&charge=0&otype=json',
    method: 'get'
  };
  await rp(options)
    .then(function (parsedBody) {

      ctx.response.body = {parsedBody}
    })
    .catch(function (err) {
      ctx.response.body = { msg: 'err' }
    })
  //ctx.response.body = { msg: code }

}