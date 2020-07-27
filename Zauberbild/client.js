var art;
(function (art) {
    let ElementNum = 0;
    function insert(_name) {
        let query = "command=insert";
        query += "&name=" + _name;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    art.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        console.log("here2");
        xhr.open("GET", art.serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //let Bilder: AnimatedElement[] = JSON.parse(xhr.response);
            //for (let i:number = 0; i <= 5; i++){
            //}
            //for (let i: number = 0; i <= SpielerListe.length; i++) {
            //    let SpielerName: string = SpielerListe[i].name;
            //    let SpielerScore: string = SpielerListe[i].score;
            //    document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
            //}
            console.log("ich bin fertisch");
        }
    }
})(art || (art = {}));
//# sourceMappingURL=client.js.map