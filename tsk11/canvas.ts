document.addEventListener("DOMContentLoaded", init);

let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

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
    fisch3(250,250);
    fisch3(600,600);
    krabbe(500,660);
    krabbe(200,660);
    krabbe(850,660);
    for (let i: number = 0; i < 50; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = 695;
        let z: string = "black"
        if(i<=25){
        z = "grey"
        }
        kies(x, y, z);
    }
    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        fish1(x, y);
    }
    for (let i: number = 0; i < 20; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        bubbles(x, y);
    }
    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        fish2(x, y);
    }
    nemo(600,100);
}

function fisch3(_x:number,_y:number){
    let fisch3:Path2D = new Path2D();
    fisch3.moveTo(_x,_y);
    fisch3.quadraticCurveTo(_x+100,_y-10,_x+150,_y-100);
    fisch3.quadraticCurveTo(_x+150,_y,_x+250,_y-50);
    fisch3.moveTo(_x,_y);
    fisch3.quadraticCurveTo(_x+120,_y+30,_x+150,_y+80);
    fisch3.quadraticCurveTo(_x+150,_y+50,_x+160,_y+40);
    fisch3.quadraticCurveTo(_x+200,_y,_x+270,_y+100);
    fisch3.quadraticCurveTo(_x+250,_y+50,_x+225,_y+20);
    fisch3.quadraticCurveTo(_x+235,_y-20,_x+250,_y-50);
    crc.stroke(fisch3);
    crc.fillStyle = "yellow"
    crc.fill(fisch3);
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

function fish1(_x:number, _y:number){
    let fish1: Path2D= new Path2D();
    fish1.moveTo(_x,_y);
    fish1.quadraticCurveTo(_x + 50,_y -70,_x +100,_y - 20);
    fish1.lineTo(_x+120,_y-40);
    fish1.moveTo(_x,_y);
    fish1.quadraticCurveTo(_x + 50,_y +70,_x +100,_y + 20);
    fish1.lineTo(_x+120,_y+40);
    fish1.lineTo(_x+120,_y-40);
    crc.fillStyle = "orange"
    crc.fill(fish1);
    crc.stroke(fish1);
}

function fish2(_x:number, _y:number){
    let fish: Path2D= new Path2D();
    fish.moveTo(_x,_y);
    fish.quadraticCurveTo(_x + 60,_y -30,_x +120,_y - 10);
    fish.lineTo(_x+150,_y-30);
    fish.lineTo(_x+130,_y);
    fish.moveTo(_x,_y);
    fish.quadraticCurveTo(_x + 60,_y +30,_x +120,_y + 10);
    fish.lineTo(_x+150,_y+30);
    fish.lineTo(_x+130,_y);
    crc.fillStyle = "blue"
    crc.fill(fish);
    crc.stroke(fish);
}

function bubbles(_x:number,_y:number){
    let bubble: Path2D= new Path2D();
    bubble.moveTo(_x,_y);
    bubble.arc(_x,_y,10,0,Math.PI*2);
    crc.fillStyle = "rgba(240, 255, 255, 0.5)";
    crc.fill(bubble);
}

function nemo(_x:number,_y:number){
    crc.scale(0.5,0.5)
    let bauch: Path2D= new Path2D();
    bauch.moveTo(_x,_y);
    bauch.quadraticCurveTo(_x-75,_y-100,_x-200,_y-30);
    bauch.quadraticCurveTo(_x-230,_y-60,_x-250,_y-60);
    bauch.quadraticCurveTo(_x-275,_y-45,_x-250,_y-30);
    bauch.quadraticCurveTo(_x-275,_y-15,_x-250,_y);
    bauch.quadraticCurveTo(_x-275,_y+15,_x-250,_y+30);
    bauch.quadraticCurveTo(_x-275,_y+45,_x-250,_y+60);
    bauch.quadraticCurveTo(_x-230,_y+60,_x-200,_y+30);
    bauch.quadraticCurveTo(_x-75,_y+100,_x,_y);
    crc.fillStyle="#FF6037";
    crc.fill(bauch);
    crc.stroke(bauch);
    let auge: Path2D= new Path2D();
    auge.moveTo(_x,_y);
    auge.arc(_x-50,_y-20,8,0,10);
    crc.fillStyle= "white";
    crc.fill(auge);
    let pupille: Path2D= new Path2D();
    pupille.moveTo(_x,_y);
    pupille.arc(_x-50,_y-20,5,0,10);
    crc.fillStyle= "black";
    crc.fill(pupille);
}

function krabbe(_x:number,_y:number){
    let bauch: Path2D= new Path2D();
    bauch.moveTo(_x,_y);
    bauch.arc(_x,_y,30,0,8);
    crc.fillStyle = "red";
    crc.fill(bauch);
    let augen: Path2D=new Path2D();
    augen.moveTo(_x+10,_y-28);
    augen.lineTo(_x+15,_y-50);
    augen.arc(_x+15,_y-50,5,0,8)
    augen.moveTo(_x-10,_y-28);
    augen.lineTo(_x-15,_y-50);
    augen.arc(_x-15,_y-50,5,0,8)
    crc.lineWidth=5;
    crc.strokeStyle = "red";
    crc.stroke(augen);
    
    let arm: Path2D=new Path2D();
    arm.moveTo(_x+30,_y-10);
    arm.lineTo(_x+50,_y-20);
    arm.arc(_x+50,_y-20,10,Math.PI*2,Math.PI*1.5)
    arm.closePath();
    arm.moveTo(_x-30,_y-10);
    arm.lineTo(_x-50,_y-20);
    arm.arc(_x-50,_y-20,10,Math.PI*1.5,Math.PI)
    arm.closePath();
    crc.stroke(arm);
    crc.fill(arm);
    let feet:Path2D=new Path2D();
    feet.moveTo(_x+10,_y+28);
    feet.lineTo(_x+30,_y+40);
    feet.moveTo(_x-10,_y+28);
    feet.lineTo(_x-30,_y+40);
    crc.stroke(feet);

    crc.strokeStyle = "black"
    crc.lineWidth=1;
}