

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
const { resolve } = require('path');



function stt(params, input){
  console.log("yeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    return new Promise(function (resolve, reject) {

var speechToText = new SpeechToTextV1({
    iam_apikey: params.iam_apikey,
    url: params.url
  });
    
  speechToText.recognize({
    'audio':fs.createReadStream(input),
    'content_type': params.content_type,
    'model': params.model
  }, function(err, res) {
    if (err){
      return resolve(err);
  
    }
    res=JSON.stringify(res,null,2)
    console.log(res)
      return resolve(res)
  });
});

}
module.exports=stt;