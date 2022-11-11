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

  socket.on('handleSend', function(data) {
    messages.push(data);
    io.emit('pull', messages);
  });

  socket.on('openChat', function() {
    io.emit('getHistory', messages);
  });
});
server.listen(8000);