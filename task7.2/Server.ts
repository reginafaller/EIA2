import * as Http from "http"; // kreiert ein http objekt in meinem code, der interpreter sucht nach moglichen importen von http modulen und sie an des http objekt in meinem code anhangen

namespace L05_Server { // namespace offnen 


	console.log("Starting server"); // gibt in der konsole aus: starting server 
	let port: number = Number(process.env.PORT); // env.Port ist gleich 4444, mit Port sagt man dem web server, auf welches port er horen soll
	if (!port) // falls der prot nicht gefunden wird, nimm diese altervative
		port = 8100; //in diesem fall wird die variable port mit 8100 uberschrieben 

	let server: Http.Server = Http.createServer(); //variable server wird generiert, erstellt einen server 
	server.addListener("request", handleRequest); //ein event listener vom typ request wird angehangt und ruft funktion handle request auf
	server.addListener("listening", handleListen); //bekommt einen zweiten listener vom tzp listening die handle listen aufruft 
	server.listen(port); //der port wird dem server ubergeben und uberwacht 

	function handleListen(): void { //wird aufgerufen vom eventlistener request 
		console.log("Listening"); //gibt auf der console listening aus 
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //die funktion wird aufgerufen und erwartet zwei ubergabeparameter, _request fordert eine info und _response antwortet darauf
		console.log("I hear voices!"); // gibt auf der konsole aus i hear voices

		_response.setHeader("content-type", "text/html; charset=utf-8"); //response bekommt einen header, welcher sich in der wartescghlange befindet und noch nicht an den client gesendet wurde 
		_response.setHeader("Access-Control-Allow-Origin", "*"); //header wird wieder ausgelesen, diesmal wird alles ausgelesen 

		_response.write(_request.url); //infos werden in die URL geschrieben 

		_response.end(); //signalisiert dem server das alle antworten gesendet wurden und die nachricht vollstandig ist 
	}
}