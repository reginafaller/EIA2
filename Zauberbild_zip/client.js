var art;
(function (art) {
    let ElementNum = 0;
    art.buttonExists = false;
    function insert(_name) {
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&bc=" + art.backgroundColor;
        query += "&cw=" + art.canvas.width.toString();
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
        sendRequest(query, handleInsertResponse);
    }
    art.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
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
    art.find = find;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            art.rebuildArray = JSON.parse(xhr.response);
            if (art.buttonExists == false) {
                for (let i = 0; i <= art.rebuildArray.length; i++) {
                    if (art.rebuildArray[i].name == "null" || art.rebuildArray[i].name == "") {
                        return;
                    }
                    let button = document.createElement("button");
                    button.innerText = art.rebuildArray[i].name;
                    button.addEventListener("click", art.rebuildCanvas);
                    button.setAttribute("id", i.toString());
                    document.getElementById("output").appendChild(button);
                    art.buttonExists = true;
                }
            }
        }
    }
})(art || (art = {}));
//# sourceMappingURL=client.js.map