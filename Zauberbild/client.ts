namespace art{

   interface AnimatedElement {
        type: string;
        x: number;
        y: number;
        array: string;
        arrayPos: number;
    }

    interface CanvasElement {
        name: string;
        BackgroundColor: string;

    }
   export let ElementNum: number = 0;
    //export let NeutralArray: kreis[] = [];
    //let NewPosition: kreis[] = [];
   // export let AnimatedColor: kreis[] = [];

    export function insert(_name: string, _crc: CanvasRenderingContext2D): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
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
            console.log("ich bin fertisch")
        }
    }
}