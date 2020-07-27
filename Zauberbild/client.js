var art;
(function (art) {
    let ElementNum = 0;
    function insert(_name) {
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&bc=" + art.backgroundColor;
        query += "&cw" + art.CanvasWidth;
        for (let i = 0; i < art.AnimatedLeftRight.length; i++) {
            let Element = {
                type: art.AnimatedLeftRight[i].type,
                x: art.AnimatedLeftRight[i].x.toString(),
                y: art.AnimatedLeftRight[i].y.toString(),
                array: "AnimatedLeftRight",
                arrayPos: ElementNum.toString(),
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.CircleArray.length; i++) {
            let Element = {
                type: art.CircleArray[i].type,
                x: art.CircleArray[i].x.toString(),
                y: art.CircleArray[i].y.toString(),
                array: "CircleArray",
                arrayPos: ElementNum.toString(),
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.NeutralArray.length; i++) {
            let Element = {
                type: art.NeutralArray[i].type,
                x: art.NeutralArray[i].x.toString(),
                y: art.NeutralArray[i].y.toString(),
                array: "NeutralArray",
                arrayPos: ElementNum.toString(),
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.AnimatedColor.length; i++) {
            let Element = {
                type: art.AnimatedColor[i].type,
                x: art.AnimatedColor[i].x.toString(),
                y: art.AnimatedColor[i].y.toString(),
                array: "AnimatedColor",
                arrayPos: ElementNum.toString(),
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        query += "&Anzahl=" + ElementNum;
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