namespace art {

    export interface AnimatedElement {
        type: string;
        x: string;
        y: string;
        array: string;
        arrayPos: string;
    }
    
    interface CanvasElement {
        name: string;
        BackgroundColor: string;
        CanvasWidth: string;
        type: string;
        x: string;
        y: string;
        array: string;
        arrayPos: string;
    }
    export let rebuildArray: CanvasElement[];

    let ElementNum: number = 0;

    export function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&bc=" + backgroundColor;
        query += "&cw" + CanvasWidth;

        for (let i: number = 0; i < AnimatedLeftRight.length; i++) {
            let Element: Object = {
                type: AnimatedLeftRight[i].type,
                x: AnimatedLeftRight[i].x.toString(),
                y: AnimatedLeftRight[i].y.toString(),
                array: "AnimatedLeftRight",
                arrayPos: ElementNum.toString(),
            }
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < CircleArray.length; i++) {
            let Element: AnimatedElement = {
                type: CircleArray[i].type,
                x: CircleArray[i].x.toString(),
                y: CircleArray[i].y.toString(),
                array: "CircleArray",
                arrayPos: ElementNum.toString(),
            }
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < NeutralArray.length; i++) {
            let Element: AnimatedElement = {
                type: NeutralArray[i].type,
                x: NeutralArray[i].x.toString(),
                y: NeutralArray[i].y.toString(),
                array: "NeutralArray",
                arrayPos: ElementNum.toString(),
            }
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
        }
        for (let i: number = 0; i < AnimatedColor.length; i++) {
            let Element: AnimatedElement = {
                type: AnimatedColor[i].type,
                x: AnimatedColor[i].x.toString(),
                y: AnimatedColor[i].y.toString(),
                array: "AnimatedColor",
                arrayPos: ElementNum.toString(),
            }
            ElementNum += 1;
            query += "&Element=" + Element.arrayPos + "&Array=" + Element.array + "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y;
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

    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.response);
            rebuildArray = JSON.parse(xhr.response);
            console.log(rebuildArray);
            for(let i:number = 0; i<= 2; i++){
                //document.getElementById("pic1").innerText = rebuildArray[0].name;
                //document.getElementById("pic2").innerText = rebuildArray[1].name;
                   let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                   button.innerText = rebuildArray[i].name;
                   button.addEventListener("click", rebuildCanvas);
                  button.setAttribute("id",i.toString())
                  document.getElementById("output").appendChild(button); 
                }    
        }
        console.log("ich bin fertisch")
    }

}