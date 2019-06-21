namespace fisch{
document.addEventListener("DOMContentLoaded", init);

export let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
let fishArray: Fisch[]=[];
let fishArray2: Fisch2[]=[];
let crabArray: Krabbe[]=[];
let bubbleArray:Bubble[]=[];
let fps: number = 30;
let imageData: ImageData;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    crc.rect(0, 0,1000,700);
    crc.fillStyle = "rgba(0, 0, 255, 0.25)";
    crc.fill();
    Pflanze(100,700);
    Pflanze(150,750);
    Pflanze(125,800);
    Koralle(500,700);
    for (let i: number = 0; i < 50; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = 695;
        let z: string = "black"
        if(i<=25){
        z = "grey"
        }
        kies(x, y, z);
    }
    imageData = crc.getImageData(0,0,canvas.width, canvas.height)
    
    for (let i: number = 0; i < 5; i++) {
        let fish: Fisch = new Fisch()
        fishArray.push(fish);
    }
    
    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let dx: number = Math.random() * -5; //math random nimmt zahl zwischen 0-1, diese zahl mal 10 - 5 ergibt eine zahl zwischen 5 & -5
        let dy: number = 0;
        let fish2: Fisch2;
        fish2 = new Fisch2();
        fish2.x = x;
        fish2.y = y;
        fish2.dx = dx;
        fish2.dy = dy;
        fishArray2.push(fish2);
        fish2.draw();
    }

    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let dx: number = Math.random() * -5;
        let dy: number = 0;
        let crab: Krabbe;
        crab = new Krabbe();
        crab.x = x;
        crab.y = 660;
        crab.dx = dx;
        crab.dy = dy;
        crabArray.push(crab);
        crab.draw();
    }
    for (let i: number = 0; i < 20; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let dx:number = 0;
        let dy:number = Math.random() * -5;
        let blub : Bubble;
        blub = new Bubble();
        blub.x = x;
        blub.y = y;
        blub.dx = dx;
        blub.dy = dy;
        bubbleArray.push(blub);
        blub.draw()
    }
    update();

   
}

function update():void{
    window.setTimeout(update, 1000/fps);
    crc.clearRect(0,0, canvas.width, canvas.height);
    crc.putImageData(imageData, 0,0);
        for(let i: number = 0; i< fishArray.length; i++){
            fishArray[i].update();
        }
        for(let i: number = 0; i< fishArray2.length; i++){
            fishArray2[i].update();
        }
        for(let i: number = 0; i< crabArray.length; i++){
            crabArray[i].update();
        }
        for(let i: number=0; i<bubbleArray.length; i++){
            bubbleArray[i].update();
        }
        
}

function kies(_x:number,_y:number,_z:string){
    let stein:Path2D = new Path2D();
    stein.moveTo(_x,_y);
    stein.arc(_x,_y,10,0,10);
    crc.fillStyle = _z
    crc.fill(stein);
    crc.stroke(stein);
}

function Koralle(_x:number,_y:number):void{
    let koralle:Path2D = new Path2D();
    koralle.moveTo(_x,_y);
    koralle.lineTo(_x+40, _y);
    koralle.quadraticCurveTo(_x-10,_y-50,_x+40,_y-100);
    koralle.bezierCurveTo(_x+100,_y-135,_x+95,_y-140,_x+40,_y-120);
    koralle.bezierCurveTo(_x+100,_y-235,_x+95,_y-240,_x+20,_y-120);
    koralle.bezierCurveTo(_x-100,_y-235,_x-95,_y-240,_x-20,_y-120);
    koralle.bezierCurveTo(_x-100,_y-115,_x-95,_y-120,_x-10,_y-100);
    koralle.quadraticCurveTo(_x-30,_y-50,_x,_y);
    crc.fillStyle = "rgb(172, 64, 52)"
    crc.fill(koralle);
    crc.stroke(koralle);
}

function Pflanze(_x:number,_y:number):void{
    let pflanze: Path2D = new Path2D();
    pflanze.moveTo(_x,_y);
    pflanze.quadraticCurveTo(_x + 60,_y -100,_x+10,_y-200);
    pflanze.quadraticCurveTo(_x-50,_y-300,_x,_y-400);
    pflanze.moveTo(_x,_y);
    pflanze.lineTo(_x-40,_y);
    pflanze.quadraticCurveTo(_x + 30,_y -100,_x-20,_y-200);
    pflanze.quadraticCurveTo(_x-50,_y-300,_x,_y-400);
    crc.fillStyle = "green"
    crc.fill(pflanze);
    crc.stroke(pflanze);
}
}