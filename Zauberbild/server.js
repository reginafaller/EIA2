"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./database");
console.log("Server starting");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let query = Url.parse(_request.url, true).query;
    let command = query["command"];
    switch (command) {
        case "insert":
            let ElementNumString = query["Anzahl"];
            let ElementNum = parseInt(ElementNumString);
            for (let i = 0; i < ElementNum; i++) {
                let canvasElements = {
                    type: ElementNum + query["Type"],
                    x: ElementNum + query["X"],
                    y: ElementNum + query["y"],
                    array: ElementNum + query["Array"],
                    arrayPos: ElementNum + query["Element"],
                };
                console.log(canvasElements);
            }
            Database.insert("canvasElenents");
            respond(_response, "storing data");
        case "find":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: here" + command);
            break;
    }
    function findCallback(json) {
        respond(_response, json);
    }
}
function respond(_response, _text) {
    console.log("Preparing response: " + _text);
    _response.write(_text);
    _response.end();
}
//# sourceMappingURL=server.js.map