const app = require('express')();
const { v4: uuidv4 } = require('uuid');

const server = require('http').createServer(app);

let messages = [];
const clients = {};

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
  const id = uuidv4();
  clients.id = socket;

  socket.on('ping', function(data) {
    messages.push(data);
    io.emit('pong', messages);
  });
  socket.on('clear', function() {
    messages = [];
    io.emit('pong', messages);
  });
});
server.listen(8000);