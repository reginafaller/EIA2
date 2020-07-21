namespace art {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", changeColor);
    document.addEventListener("mousemove", MoveObject)
    document.addEventListener("mouseup", SetPosition);
    let serverAddress: string = "https://fallerr.herokuapp.com/";
    //import { insert } from "./database";

    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let CircleArray: kreis[] = [];
    let NeutralArray: kreis[] = [];
    export let SwitchColor: string = "green";
    let AnimatedLeftRight: kreis[] = [];
    let NewPosition: kreis[] = [];
    let AnimatedColor: kreis[] = [];
    let fps: number = 30;
    let farbZaehler: number = 0;
    let isMoving: boolean = false;


    let rot: string = "rgb(255, 0, 0)";
    let gruen: string = "rgb(0, 255, 0)";
    let purple: string = "rgb(150, 0, 150)";
    let blue: string = "rgb(0, 0, 255)";
    let backgroundColor: string = blue;
    let changeBackgroundColor: boolean = false;
    let ObjektBearbeiten: boolean = false;
    let NeuePosition: boolean = false;
    export let clientX: number = 0;
    export let clientY: number = 0;
    export let CanvasWidth: number = 600;
    export let CanvasHeight: number = 600;

    function MoveObject(_event:MouseEvent):void{
        if(isMoving){
            NeutralArray[0].update(0,0,"red", true);
            clientX = _event.x;
            clientY = _event.y;
        }
    }

    function SetPosition(_event: MouseEvent): void {
        if (isMoving) {
            NeutralArray[0].update(0,0,"red", true);
            clientX = _event.x;
            clientY = _event.y;
            CircleArray.push(NeutralArray[0]);
            NeutralArray.splice(0);
            isMoving = false;
            ObjektBearbeiten = false;
            update();
        }
    }

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = CanvasWidth;
        canvas.height = CanvasHeight;
        crc = canvas.getContext("2d");
        crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        crc.rect(0, 0, CanvasWidth, CanvasHeight);
        crc.fillStyle = backgroundColor;
        crc.fill();

        addEventListener();
        update();
    }

    function addEventListener() {
        let button: HTMLImageElement = <HTMLImageElement>document.getElementById("backgroundColor");
        button.addEventListener("click", ChangeBackground);
        let addCircle: HTMLImageElement = <HTMLImageElement>document.getElementById("kreis");
        addCircle.addEventListener("click", addNewCircle);
        let sCanvas: HTMLImageElement = <HTMLImageElement>document.getElementById("small");
        sCanvas.addEventListener("click", smallCanvas);
        let mCanvas: HTMLImageElement = <HTMLImageElement>document.getElementById("medium");
        mCanvas.addEventListener("click", mediumCanvas);
        let addCube: HTMLImageElement = <HTMLImageElement>document.getElementById("cube");
        addCube.addEventListener("click", addNewCube);
        let saveImage: HTMLImageElement = <HTMLImageElement>document.getElementById("save");
        saveImage.addEventListener("click", saveCanvasImage);
    }

    function saveCanvasImage(){
        let bildName: string = prompt('wie soll ihr Bild heißen?');
        insert(bildName);
    }

    function ObjekteBearbeiten() {
        ObjektBearbeiten = true;
        let bewegung = new Image();
        bewegung.src="Assets/move.png";
        crc.drawImage(bewegung,0,0,100,100);

        let farbe = new Image();
        farbe.src="Assets/farbwechsel.png";
        crc.drawImage(farbe,0,100,100,100);

        let deleteO = new Image();
        deleteO.src="Assets/entfernen.png";
        crc.drawImage(deleteO,0,200,100,100);

        let newPosition = new Image();
        newPosition.src="Assets/NeuePosition.png";
        crc.drawImage(newPosition,0,300,100,100);
    }

    function smallCanvas() {
        CanvasWidth = 400;
        CanvasHeight = 400;
        canvas.width = CanvasWidth;
        canvas.height = CanvasHeight;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }

    function mediumCanvas() {
        CanvasWidth = 600;
        CanvasHeight = 600;
        canvas.width = CanvasWidth;
        canvas.height = CanvasHeight;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }

    function ChangeCanvasSize(_w: number, _h: number): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = _w;
        canvas.height = _h;
    }
    function addNewCircle(): void {
        let Kreis: kreis = new kreis();
        CircleArray.push(Kreis);
        Kreis.update(0, 0, "red", false);
    }

    function addNewCube():void {
        let Cube: kreis = new cube();
        CircleArray.push(Cube);
        Cube.update(0,0,"red", false);
    }

    function ChangeBackground(): void {
        changeBackgroundColor = true;
        farbauswahl();
    }

    function farbauswahl(): void {
        let redRec: Path2D = new Path2D();
        redRec.rect(0, 0, (CanvasWidth / 4), CanvasHeight);
        crc.fillStyle = rot;
        crc.fill(redRec);

        let greenRec: Path2D = new Path2D();
        greenRec.rect((CanvasWidth / 4) * 1, 0, (CanvasWidth / 4), CanvasHeight);
        crc.fillStyle = gruen;
        crc.fill(greenRec);

        let purpleRec: Path2D = new Path2D();
        purpleRec.rect((CanvasWidth / 4) * 2, 0, (CanvasWidth / 4), CanvasHeight);
        crc.fillStyle = purple;
        crc.fill(purpleRec);

        let blueRec: Path2D = new Path2D();
        blueRec.rect((CanvasWidth / 4) * 3, 0, (CanvasWidth / 4), CanvasHeight);
        crc.fillStyle = blue;
        crc.fill(blueRec);
    }

    function changeColor(_event: MouseEvent) {
        
        clientX = _event.clientX;
        clientY = _event.clientY;
        //Durch alle automatisch platzierten Objekte
        for (let i: number = 0; i < CircleArray.length; i++) {
            let currentX = CircleArray[i].x;
            let currentY = CircleArray[i].y;
            if (clientX < currentX + 40 && clientX > currentX - 40 && clientY < currentY + 40 && clientY > currentY - 40) {
                if(NeutralArray.length > 0){
                    CircleArray.push(NeutralArray[0]);
                    NeutralArray.splice(0,1);
                }
                NeutralArray.push(CircleArray[i]);
                CircleArray.splice(i, 1);
                ObjekteBearbeiten();
            }
        }
        //Durch alle mit Bewegung
        for (let i: number = 0; i < AnimatedLeftRight.length; i++) {
            let currentX = AnimatedLeftRight[i].x;
            let currentY = AnimatedLeftRight[i].y;
            if (clientX < currentX + 20 && clientX > currentX - 20 && clientY < currentY + 20 && clientY > currentY - 20) {
                if(NeutralArray.length > 0){
                    CircleArray.push(NeutralArray[0]);
                    NeutralArray.splice(0,1);
                }
                NeutralArray.push(AnimatedLeftRight[i]);
                AnimatedLeftRight.splice(i, 1);
                ObjekteBearbeiten();
            }
        }
        for (let i: number = 0; i < AnimatedColor.length; i++) {
            let currentX = AnimatedColor[i].x;
            let currentY = AnimatedColor[i].y;
            if (clientX < currentX + 20 && clientX > currentX - 20 && clientY < currentY + 20 && clientY > currentY - 20) {
                if(NeutralArray.length > 0){
                    CircleArray.push(NeutralArray[0]);
                    NeutralArray.splice(0,1);
                }
                NeutralArray.push(AnimatedColor[i]);
                AnimatedColor.splice(i, 1);
                ObjekteBearbeiten();
            }
        }

        if (clientX <= 100 && clientY >= 100 && clientY <= 200 && ObjektBearbeiten == true) {
            console.log("Color");
            AnimatedColor.push(NeutralArray[0]);
            NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }

        if (clientX <= 100 && clientY <= 100 && ObjektBearbeiten == true) {
            AnimatedLeftRight.push(NeutralArray[0]);
            NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }
        if (clientX <= 100 && clientY <= 400 && clientY >= 300 && ObjektBearbeiten == true) {
            isMoving = true;
            update();
        }
        if (clientX <= 100 && clientY <= 300 && clientY >= 200 && ObjektBearbeiten == true) {
            NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }


        if (changeBackgroundColor == true) {
            if (clientX <= (CanvasWidth / 4)) {
                backgroundColor = rot;
            }
            if (clientX <= (CanvasWidth / 4) * 2 && clientX >= (CanvasWidth / 4)) {
                backgroundColor = gruen;
            }
            if (clientX <= (CanvasWidth / 4) * 3 && clientX >= (CanvasWidth / 4) * 2) {
                backgroundColor = purple;
            }
            if (clientX >= (CanvasWidth / 4) * 3) {
                backgroundColor = blue;
            }
            changeBackgroundColor = false;
            init();
        }
    }

    function update(): void {

        if (changeBackgroundColor || ObjektBearbeiten || NeuePosition) { return; }
        if (SwitchColor == "green" && (farbZaehler % 2) == 0) { SwitchColor = "red" }
        if (SwitchColor == "red" && (farbZaehler % 2) != 0) { SwitchColor = "green" }
        //console.log(farbZaehler);
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        crc.rect(0, 0, CanvasWidth, CanvasHeight);
        crc.fillStyle = backgroundColor;
        crc.fill();
        for (let i: number = 0; i < CircleArray.length; i++) {
            CircleArray[i].update(0, 0, "red", false);
        }
        for (let i: number = 0; i < AnimatedLeftRight.length; i++) {
            AnimatedLeftRight[i].update(2, 0, "red", false);
        }
        for (let i: number = 0; i < AnimatedColor.length; i++) {
            AnimatedColor[i].update(0, 0, SwitchColor, false);
        }
        for (let i: number = 0; i < NewPosition.length; i++) {
            NewPosition[i].update(0, 0, "red", false);
        }
        farbZaehler += 1;
    }

    function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
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
        //sendRequest(query, handleFindResponse);
    }

    //function handleFindResponse(_event: ProgressEvent): void {
    //    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    //    if (xhr.readyState == XMLHttpRequest.DONE) {
    //        let SpielerListe: Player[] = JSON.parse(xhr.response);
    //        for (let i: number = 0; i <= SpielerListe.length; i++) {
    //            let SpielerName: string = SpielerListe[i].name;
    //            let SpielerScore: string = SpielerListe[i].score;
    //            document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
    //        }
    //    }
    //}


}