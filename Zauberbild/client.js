var art;
(function (art) {
    art.ElementNum = 0;
    //export let NeutralArray: kreis[] = [];
    //let NewPosition: kreis[] = [];
    // export let AnimatedColor: kreis[] = [];
    function insert(_name, _crc) {
        let query = "command=insert";
        query += "&name=" + _name;
        for (let i = 0; i < art.AnimatedLeftRight.length; i++) {
            let Element = {
                type: art.AnimatedLeftRight[i].type,
                x: art.AnimatedLeftRight[i].x,
                y: art.AnimatedLeftRight[i].y,
                array: "AnimatedLeftRight",
                arrayPos: art.ElementNum,
            };
            art.ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.CircleArray.length; i++) {
            let Element = {
                type: art.CircleArray[i].type,
                x: art.CircleArray[i].x,
                y: art.CircleArray[i].y,
                array: "CircleArray",
                arrayPos: art.ElementNum,
            };
            art.ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.NeutralArray.length; i++) {
            let Element = {
                type: art.NeutralArray[i].type,
                x: art.NeutralArray[i].x,
                y: art.NeutralArray[i].y,
                array: "NeutralArray",
                arrayPos: art.ElementNum,
            };
            art.ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.AnimatedColor.length; i++) {
            let Element = {
                type: art.AnimatedColor[i].type,
                x: art.AnimatedColor[i].x,
                y: art.AnimatedColor[i].y,
                array: "AnimatedColor",
                arrayPos: art.ElementNum,
            };
            art.ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        query += "&Anzahl=" + art.ElementNum;
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
            console.log("ich bin fertisch");
        }
    }
})(art || (art = {}));
//# sourceMappingURL=client.js.map