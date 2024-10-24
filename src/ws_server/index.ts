import { Server, WebSocketServer } from 'ws';
import { handleMessage } from '../constrollers/gameController';

export default class WSS {
  private port: number;
  private server: Server;

  constructor(port: number) {
    this.port = port;
    this.server = new WebSocketServer({ port });
  }
  start() {
    this.server.on('listening', () => {
      console.log(`WS Server is listening on port ${this.port}`);
    });
    this.server.on('connection', (ws) => {
      ws.on('error', console.error);
      ws.on('message', (msg) => {
        const message = JSON.parse(msg.toString())
        let response = handleMessage(message)
        
      });
    });
  }
}
