var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "https://fallerr.herokuapp.com/";
    let serverAddress = "http://localhost:8100";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let findButton = document.getElementById("find");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        findButton.addEventListener("click", filter);
    }
    function filter(_event) {
        let input = document.getElementById("daten");
        let query = "command=filter";
        query += "&suche=" + input.value;
        sendRequest(query, handleFindResponse);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            //let responseAsJson: JSON = JSON.parse(xhr.response);
            //console.log(responseAsJson);
        }
    }
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map