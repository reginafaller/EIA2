namespace L04_AssocArraysAndExport {
    window.addEventListener("load", button);
        let address: string = "https://mongodbrowser.herokuapp.com/";
        //let address:string = "http://localhost:8100";
    
        function button(_event:Event) {
            let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendOrder");
            button.addEventListener("click", sendRequestWithCustomData);
        }
    
        function sendRequestWithCustomData(_event:Event): void {
            let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input")
            let getString:string = "?u=Regina&p=PassworT&a=ds129532.mlab.com:29532/eia2&n=eia2&c=students";
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", address + getString, true);
            xhr.addEventListener("readystatechange", handleStateChange);
            xhr.send();
        }
    
        function handleStateChange(_event: ProgressEvent): void {
            let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
                console.log("response: " + xhr.response);
                let order = document.createElement("p");
                let heading = document.createElement("h2")
                heading.innerHTML = "Ihre Bestellzusammenfassung:"
                document.getElementById("serverBestellung").appendChild(heading);
                order.innerHTML = `${xhr.response}`
                document.getElementById("serverBestellung").appendChild(order);
            }       
        }
    }