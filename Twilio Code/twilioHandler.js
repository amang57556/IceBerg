function makeCallFromTwilio(){
var accountSid = 'AC0654d2dea3da0e22f73a4f0c57bf259b';
var authToken = 'your_auth_token';
var client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+14155551212',
    from: '+15017122661',
  })
  .then(call => process.stdout.write(call.sid));  
}