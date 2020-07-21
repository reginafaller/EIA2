namespace art {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", lol);
    document.addEventListener("mousedown", changeColor);
    //let serverAddress: string = "https://fallerr.herokuapp.com/";
    //import { insert } from "./database";

    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let CircleArray: kreis[] = [];
    let MoveArray: kreis[] = [];
    let CubeArray: cube[] = [];
    let fps: number = 30;
    let i: number = 0;


    function lol(_event: KeyboardEvent) {
        if (_event.keyCode == 38) {
            i += 1;
            if (i >= CircleArray.length) {
                i = 0;
            }
            MoveArray.push(CircleArray[i]);
            CircleArray.splice(i, 1);
            MoveObject(MoveArray[0].id);
            _event.preventDefault();
        }

    }

    function MoveObject(_id: number): void {
        //boolean erst loschen wenn Position gewahlt wurde?
        MoveArray[0].update("blue", 0, 0, 1);
        CircleArray.push(MoveArray[0]);
        MoveArray.pop();
    }


    let rot: string = "rgb(255, 0, 0)";
    let gruen: string = "rgb(0, 255, 0)";
    let purple: string = "rgb(150, 0, 150)";
    let blue: string = "rgb(0, 0, 255)";
    let backgroundColor: string = blue;
    let changeBackgroundColor: boolean = false;
    let CircleCount: number = 0;
    let CanvasWidth: number = 800;
    let CanvasHeight: number = 600;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        crc.rect(0, 0, CanvasWidth, CanvasHeight);
        crc.fillStyle = backgroundColor;
        crc.fill();

        addEventListener();
        update();
    }


    function addEventListener(){
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("backgroundColor");
        button.addEventListener("click", ChangeBackground);
        let addCircle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("kreis");
        addCircle.addEventListener("click", addNewCircle);
        let addCube: HTMLButtonElement = <HTMLButtonElement>document.getElementById("cube");
        addCube.addEventListener("click", addNewCube);
        let sCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("small");
        sCanvas.addEventListener("click", smallCanvas);
        let mCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("medium");
        mCanvas.addEventListener("click", mediumCanvas);
        let lCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("big");
        lCanvas.addEventListener("click", bigCanvas);
    }

    function smallCanvas(){
        CanvasWidth = 400;
        CanvasHeight = 400;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }

    function mediumCanvas(){
        CanvasWidth = 600;
        CanvasHeight = 600;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }
    function bigCanvas(){
        CanvasWidth = 800;
        CanvasHeight = 600;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }
    function ChangeCanvasSize(_w:number, _h:number): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = _w;
        canvas.height = _h;
    }
    function addNewCircle(): void {
        let Kreis: kreis = new kreis();
        CircleArray.push(Kreis);
        Kreis.update("red", 0.5, 0.3, CircleCount);
        CircleCount += 1;
    }

    function addNewCube(): void {
        let Cube: cube = new cube();
        CubeArray.push(Cube);
        Cube.update();
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
        if (changeBackgroundColor == true) {
            let x = _event.clientX
            console.log(x);
            if (x <= 200) {
                backgroundColor = rot;
            }
            if (x <= 400 && x >= 200) {
                backgroundColor = gruen;
            }
            if (x <= 600 && x >= 400) {
                backgroundColor = purple;
            }
            if (x >= 600) {
                backgroundColor = blue;
            }
            changeBackgroundColor = false;
            init();
        }
    }

    function update(): void {
        if (changeBackgroundColor) { return; }
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        crc.rect(0, 0, CanvasWidth, CanvasHeight);
        crc.fillStyle = backgroundColor;
        crc.fill();
        for (let i: number = 0; i < MoveArray.length; i++) {
            MoveArray[i].update("black", 0, 0, i);
        }
        for (let i: number = 0; i < CircleArray.length; i++) {
            CircleArray[i].update("red", 0.5, 0.3, i);
        }
        for (let i: number = 0; i < CubeArray.length; i++) {
            CubeArray[i].update();
        }
    }


}