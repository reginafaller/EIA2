var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    window.addEventListener("load", button);
    let address = "https://fallerr.herokuapp.com/";
    //let address:string = "http://localhost:8100";
    function button(_event) {
        let button = document.getElementById("sendOrder");
        button.addEventListener("click", sendRequestWithCustomData);
    }
    function sendRequestWithCustomData(_event) {
        let input = document.getElementsByTagName("input");
        let getString = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                getString += input[i].name + "=" + input[i].value + "&";
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + getString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            let order = document.createElement("p");
            let heading = document.createElement("h2");
            heading.innerHTML = "Ihre Bestellzusammenfassung:";
            document.getElementById("serverBestellung").appendChild(heading);
            order.innerHTML = `${xhr.response}`;
            document.getElementById("serverBestellung").appendChild(order);
        }
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=sendData.js.map