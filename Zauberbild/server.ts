import * as Http from "http";
import * as Url from "url";
import * as Database from "./database";

console.log("Server starting");

interface AssocStringString {
    [key: string]: string;
}

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);


function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: AssocStringString = <AssocStringString>Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {
        case "insert":
        let ElementNumString: string = query["Anzahl"];
        let ElementNum: number = parseInt(ElementNumString);
        for(let i: number = 0; i < ElementNum; i++) {
            let canvasElements: AnimatedElement = {
                type: ElementNum + query["Type"],
                x: ElementNum + query["X"],
                y: ElementNum + query["y"],
                array: ElementNum + query["Array"],
                arrayPos: ElementNum + query["Element"],
            }
            console.log(canvasElements);
        }   
            
            Database.insert("canvasElenents");
            respond(_response,"storing data");
        case "find":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: here" + command);
            break;
    }
    function findCallback(json: string): void {
        respond(_response, json);
    }
}


function respond(_response: Http.ServerResponse, _text: string): void {
    console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}
