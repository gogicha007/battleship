import { createServer } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

export const server = createServer()
const wss = new WebSocketServer({ server})