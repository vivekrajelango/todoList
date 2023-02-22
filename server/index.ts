// const { Server } = require("socket.io");
import { createServer } from "http";
import {Server} from 'socket.io';

const httpServer = createServer();
const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on('sendVal', (message)=>{
    socket.broadcast.emit('receiveVal', message)
  })
});

io.listen(3000);