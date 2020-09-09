const Websocket = require("ws");


const wss= new Websocket.Server ({port:8082})

wss.on("connection", ws=>{
    console.log("new client connected");

    ws.on("message", data=>{
        console.log(`client has sent us: ${data}`)
    })

    ws.on("close",()=>{
        console.log("client has disconnected");
    }
    );
});