const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

// restService.use(bodyParser.urlencoded({
//   extended: true
// }));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
  var speech = '';
  var a = parseFloat(req.body.result.parameters.firstNum);
  var b = parseFloat(req.body.result.parameters.secondNum);
  var data;
  if(req.body.result.metadata.intentName === 'address'){
      speech = 'Địa chỉ cửa hàng: '; 
  }
  if(req.body.result.metadata.intentName === 'phone'){
      speech = 'Liên hệ điện thoại: ';
  }
  if(req.body.result.action === 'unknown'){
    speech = 'Should direct to level 2 bot';
//     const https = require('https');
//     const post_data = {
//       query: req.body.resolvedQuery,
//       sessionId: '18111996',
//       lang: 'en'
//     }
//     const post_options = {
//       host: 'api.api.ai',
//       port: '80',
//       path: '/api/query?v=20150910'
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8'
//         'Authorization': 'Bearer c61e2d9d98cb42f6829946be5336be50'
//       }
//     }
//     const post_req = https.request(post_options, function(res){
//       res.on('data',function(chunk){
//         speech = chunk.body.result.fulfillment.speech;
//       });
//     });
//     post_req.write(post_data);
//     post_req.end();
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: 'chatbot-center'
  });
});
    
restService.listen((process.env.PORT || 8000), function() {
  console.log("Server up and listening");
});
 
