var art;
(function (art) {
    function insert(_name, _crc) {
        let query = "command=insert";
        query += "&name=" + _name;
        //query += "&picture=" + _crc;
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