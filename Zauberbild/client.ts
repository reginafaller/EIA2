namespace art{

   interface AnimatedElement {
        type: string;
        x: number;
        y: number;
        array: string;
        arrayPos: number;
    }

   let ElementNum: number = 0;

    export function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        
        
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        console.log("here2");
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //let Bilder: AnimatedElement[] = JSON.parse(xhr.response);
            //for (let i:number = 0; i <= 5; i++){

            //}
            //for (let i: number = 0; i <= SpielerListe.length; i++) {
            //    let SpielerName: string = SpielerListe[i].name;
            //    let SpielerScore: string = SpielerListe[i].score;
            //    document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
            //}
            console.log("ich bin fertisch")
        }
    }
}