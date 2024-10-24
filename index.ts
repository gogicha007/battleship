import { httpServer } from "./src/http_server/index";
import { server } from "./src/ws_server/server";

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

server.listen(WS_PORT, ()=> {
    console.log(`Websocket server runs on the ${WS_PORT}`)
})



