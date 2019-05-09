"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // kreiert ein http objekt in meinem code, der interpreter sucht nach moglichen importen von http modulen und sie an des http objekt in meinem code anhangen
const Url = require("url");
var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    console.log("Starting server"); // gibt in der konsole aus: starting server 
    let port = Number(process.env.PORT); // env.Port ist gleich 4444, mit Port sagt man dem web server, auf welches port er horen soll
    if (!port) // falls der prot nicht gefunden wird, nimm diese altervative
        port = 8100; //in diesem fall wird die variable port mit 8100 uberschrieben 
    let server = Http.createServer(); //variable server wird generiert, erstellt einen server 
    server.addListener("request", handleRequest); //ein event listener vom typ request wird angehangt und ruft funktion handle request auf
    server.addListener("listening", handleListen); //bekommt einen zweiten listener vom tzp listening die handle listen aufruft 
    server.listen(port); //der port wird dem server ubergeben und uberwacht 
    function handleListen() {
        console.log("Listening"); //gibt auf der console listening aus 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // gibt auf der konsole aus i hear voices
        _response.setHeader("content-type", "text/html; charset=utf-8"); //response bekommt einen header, welcher sich in der wartescghlange befindet und noch nicht an den client gesendet wurde 
        _response.setHeader("Access-Control-Allow-Origin", "*"); //header wird wieder ausgelesen, diesmal wird alles ausgelesen 
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        console.log(url.query);
        _response.end(); //signalisiert dem server das alle antworten gesendet wurden und die nachricht vollstandig ist 
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=Server.js.map