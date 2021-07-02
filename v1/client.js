const WebSocket = require('ws')
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)
 
connection.onopen = () => {
    var someData = [
        {firstName: "Max", lastName: "Mustermann", age: 40},
        {firstName: "Hagbard", lastName: "Celine", age: 44},
        {firstName: "Karl", lastName: "Koch", age: 42},
     ];
  connection.send(JSON.stringify(someData));
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}