const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');

var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

io.on('connection', (socket) => {
socket.on('createChat', (data) => {
  console.log('createChat', data);
  io.emit('newChat', {
    from: data.from,
    message: data.message,
    createdAt: new Date().getTime()
  })
});
})

server.listen(port, () => {
  console.log(`the server is up on port ${port}`);
})
