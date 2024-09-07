const http = require('http');

const myServer = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello from server");
});

myServer.listen(8000, ()=>{'Server Started!'});