import WebSocket, { WebSocketServer } from 'ws';
import {v4 as uuid} from "uuid";

const clients = {};
const messages = [];

const wws = new WebSocketServer({port: 8000});
wws.on("connection", (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log('new client ', id);
  ws.on('message', (rawMessage) => {
    const { name, message } = JSON.parse(rawMessage);
    messages.push({name, message});
    for (const id in clients) {
      clients[id].send(JSON.stringify([{name, message}]));
    }
  })
  ws.on('close', () => {
    delete clients[id];
    console.log('client is closed', id);
  })
})