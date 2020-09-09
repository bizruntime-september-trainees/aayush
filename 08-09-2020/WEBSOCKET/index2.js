var sock = new WebSocket("wss://echo.websocket.org")

sock.onopen = function (event) {
    console.log(event);
        alert('socket connected successfully');
    setTimeout(function () {
        sock.send("yeah i got the message");
    }, 1000);

};



sock.onmessage = function (event) {
    console.log(event);
}