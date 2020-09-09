//used to load JavaScript modules
var server= require('ws').Server;
var s= new server ({port:5001});

s.on('connection',function(ws){
ws.on('message',function(message){
console.log("recieved"+message);
ws.send(message);
if (message=="hello"){
   ws.send("hii from server!");
}
});
});