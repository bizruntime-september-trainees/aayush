var server = require('ws').Server;
var s = new server({ port: 5002 });

s.on('connection', function (ws) {
   ws.on('message', function (message) {
      console.log("recieved" + message);
      ws.send(message);
     
   });
});