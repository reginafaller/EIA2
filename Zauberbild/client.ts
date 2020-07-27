namespace art{

   interface AnimatedElement {
        type: string;
        x: number;
        y: number;
        array: string;
        arrayPos: number;
    }

   let ElementNum: number = 0;

    export function insert(_name: string, _crc: CanvasRenderingContext2D): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&color=" + backgroundColor;
        query += "&CanvasWidth=" + CanvasWidth;
        for (let i: number = 0; i < AnimatedLeftRight.length; i++) {
            let Element: AnimatedElement = {
                type: AnimatedLeftRight[i].type,
                x: AnimatedLeftRight[i].x,
                y: AnimatedLeftRight[i].y,
                array: "AnimatedLeftRight",
                arrayPos: ElementNum,
            }
            ElementNum += 1;
            query += "&Element="  + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < CircleArray.length; i++) {
            let Element: AnimatedElement = {
                type: CircleArray[i].type,
                x: CircleArray[i].x,
                y: CircleArray[i].y,
                array: "CircleArray",
                arrayPos: ElementNum,
            }
            ElementNum += 1;
            query += "&Element="  + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < NeutralArray.length; i++) {
            let Element: AnimatedElement = {
                type: NeutralArray[i].type,
                x: NeutralArray[i].x,
                y: NeutralArray[i].y,
                array: "NeutralArray",
                arrayPos: ElementNum,
            }
            ElementNum += 1;
            query += "&Element="  + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < AnimatedColor.length; i++) {
            let Element: AnimatedElement = {
                type: AnimatedColor[i].type,
                x: AnimatedColor[i].x,
                y: AnimatedColor[i].y,
                array: "AnimatedColor",
                arrayPos: ElementNum,
            }
            ElementNum += 1;
            query += "&Element="  + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        query += "&Anzahl=" + ElementNum;
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
            let Bilder: AnimatedElement[] = JSON.parse(xhr.response);
            for (let i:number = 0; i <= 5; i++){

            }
            //for (let i: number = 0; i <= SpielerListe.length; i++) {
            //    let SpielerName: string = SpielerListe[i].name;
            //    let SpielerScore: string = SpielerListe[i].score;
            //    document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
            //}
            console.log("ich bin fertisch")
        }
    }
}