namespace newYear {
    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imageData: ImageData;
    let allFireworks: Firework[] = [];

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[1];
        crc = canvas.getContext("2d");
        drawBackground();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        //firework.draw()
        let saveImage: HTMLImageElement = <HTMLImageElement>document.getElementById("save");
        saveImage.addEventListener("click", saveCanvasImage);
        update();
    }

    function drawBackground(): void {
        crc.rect(0, 0, 500, 400);
        crc.fillStyle = "rgb(51, 35, 86)";
        crc.fill();
        for (let i: number = 0; i < 40; i++) {
            let x : number = getRandomInt(500);
            let y : number = getRandomInt(400);
            let star: Path2D = new Path2D();
            star.arc(x,y,1,0,10);
            crc.fillStyle = "white"
            crc.fill(star);
        }
    }

    function saveCanvasImage(): void {
        let bildName: string = prompt('wie soll ihr Bild heißen?');
        insert(bildName);
    }
    
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    export function overlay(){
        crc.rect(0, 0, 500, 400);
        crc.fillStyle = "rgba(0,0,0,0.5)";
        crc.fill();
        crc.font = "30px Arial";
        crc.fillStyle = "white"
        crc.fillText("click any point to set origin",70 , 200);
    }

    export function getCoordinates(x:number, y:number){
        if (currentStyle == "line"){
        let firework: Firework = new Firework(pickedColor, numberOfParticles, x, y - 120);
        allFireworks.push(firework);
        }
        if (currentStyle == "arc"){
        let firework: Firework = new FireworkTriangle(pickedColor, numberOfParticles, x, y - 120);
        allFireworks.push(firework);
        }
        waitForOrigin = false;
        //setting back to default

        update();
    }

    function update():void {
        if (waitForOrigin) { return; }
        window.setTimeout(update, 1000 / 30);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < allFireworks.length; i++) {
            allFireworks[i].update();
            //console.log(allFireworks[i]);
        }
    }
}
