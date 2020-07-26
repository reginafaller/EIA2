var art;
(function (art) {
    let ElementNum = 0;
    function insert(_name, _crc) {
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&color=" + art.backgroundColor;
        query += "&CanvasWidth=" + art.CanvasWidth;
        for (let i = 0; i < art.AnimatedLeftRight.length; i++) {
            let Element = {
                type: art.AnimatedLeftRight[i].type,
                x: art.AnimatedLeftRight[i].x,
                y: art.AnimatedLeftRight[i].y,
                array: "AnimatedLeftRight",
                arrayPos: ElementNum,
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.CircleArray.length; i++) {
            let Element = {
                type: art.CircleArray[i].type,
                x: art.CircleArray[i].x,
                y: art.CircleArray[i].y,
                array: "CircleArray",
                arrayPos: ElementNum,
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.NeutralArray.length; i++) {
            let Element = {
                type: art.NeutralArray[i].type,
                x: art.NeutralArray[i].x,
                y: art.NeutralArray[i].y,
                array: "NeutralArray",
                arrayPos: ElementNum,
            };
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i = 0; i < art.AnimatedColor.length; i++) {
            let Element = {
                type: art.AnimatedColor[i].type,
                x: art.AnimatedColor[i].x,
                y: art.AnimatedColor[i].y,
                array: "AnimatedColor",
                arrayPos: ElementNum,
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
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
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