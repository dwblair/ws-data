const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    var object = JSON.parse(message);
    console.log(object[0].firstName);
  })
  ws.send('Hello! Message From Server!!')
})