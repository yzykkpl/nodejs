var rp = require('request-promise');
module.exports = async function (ctx, next) {
  var body = ctx.request.body
  var code = body.code
  var openid = body.openid;
  var site = body.site;
  var name = body.name;
  var formId = body.formId;
  var templateId = 'a__xv5winvlEh85PoanCC3hVRBT6T_HMiDYtEZ94Zbc';
  var data = {
    touser: openid,
    template_id: templateId,
    page: "index",
    form_id: formId,
    data: {
      keyword1: {
        value: site,
        color: "#173177"
      },
      keyword2: {
        value: name,
        color: "#173177"
      }

    },
    emphasis_keyword: "keyword1.DATA"
  }
  var token = {};
  var options = {
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb27e594a54a28631&secret=9ffda34b6bd3443f14f06900cd23846a'
  };
  await rp(options)
    .then(function (parsedBody) {

      token = eval('(' + parsedBody + ')').access_token
    })
    .catch(function (err) {
      ctx.response.body = { msg: err }
    })
  //ctx.response.body = { msg: code }
  var options2={
    url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + token,
    method:'POST',
    body:data,
    json:true
  };
  await rp(options2)
  .then(function(body){
    ctx.response.body=body
  })
}