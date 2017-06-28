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
  return res.json({
    speech: speech,
    displayText: speech,
    source: 'chatbot-center'
  });
});
    
restService.listen((process.env.PORT || 8000), function() {
  console.log("Server up and listening");
});
 