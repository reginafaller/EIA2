"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // kreiert ein http objekt in meinem code, der interpreter sucht nach moglichen importen von http modulen und sie an des http objekt in meinem code anhangen
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); // gibt in der konsole aus: starting server 
    let port = Number(process.env.PORT); // env.Port ist gleich 4444, mit Port sagt man dem web server, auf welches port er horen soll
    if (!port) // falls der prot nicht gefunden wird, nimm diese altervative
        port = 8100; //in diesem fall wird die variable port mit 8100 uberschrieben 
    let server = Http.createServer(); //
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map