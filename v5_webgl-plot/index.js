const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const serport = new SerialPort('/dev/ttyACM0')

const parser = serport.pipe(new Readline({ delimiter: '\r\n' }))
//parser.on('data', console.log)

parser.on('data', function (data) {
  //console.log(data);
  io.emit('adc', data.toString());
})

app.get('/style.css', (req, res) => {
  console.log('style.css requested!')
  res.type('.css');
  res.sendFile(__dirname + '/style.css');
});

app.get('/wsplot.js', (req, res) => {
  console.log('wsplot.js requested!')
  res.type('.js');
  res.sendFile(__dirname + '/wsplot.js');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('adc', msg => {
    io.emit('adc', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
