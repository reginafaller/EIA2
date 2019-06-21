namespace fisch {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown",feedFish);

    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fishArray: Bubble[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        crc.rect(0, 0, 1000, 700);
        crc.fillStyle = "rgba(0, 0, 255, 0.25)";
        crc.fill();
        Pflanze(100, 700);
        Pflanze(150, 750);
        Pflanze(125, 800);
        Koralle(500, 700);
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = 695;
            let z: string = "black"
            if (i <= 25) {
                z = "grey"
            }
            kies(x, y, z);
        }
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height)

        for (let i: number = 0; i < 20; i++) {
            let blub: Bubble = new Bubble();
            fishArray.push(blub);
        }

        for (let i: number = 0; i < 5; i++) {
            let fish: Fisch = new Fisch();
            fishArray.push(fish);
        }

        for (let i: number = 0; i < 5; i++) {
            let fish2: Fisch2 = new Fisch2();
            fishArray.push(fish2);
        }

        for (let i: number = 0; i < 5; i++) {
            let crab: Krabbe = new Krabbe();
            fishArray.push(crab);
        }
        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }

    }

    function kies(_x: number, _y: number, _z: string) {
        let stein: Path2D = new Path2D();
        stein.moveTo(_x, _y);
        stein.arc(_x, _y, 10, 0, 10);
        crc.fillStyle = _z
        crc.fill(stein);
        crc.stroke(stein);
    }

    function Koralle(_x: number, _y: number): void {
        let koralle: Path2D = new Path2D();
        koralle.moveTo(_x, _y);
        koralle.lineTo(_x + 40, _y);
        koralle.quadraticCurveTo(_x - 10, _y - 50, _x + 40, _y - 100);
        koralle.bezierCurveTo(_x + 100, _y - 135, _x + 95, _y - 140, _x + 40, _y - 120);
        koralle.bezierCurveTo(_x + 100, _y - 235, _x + 95, _y - 240, _x + 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 235, _x - 95, _y - 240, _x - 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 115, _x - 95, _y - 120, _x - 10, _y - 100);
        koralle.quadraticCurveTo(_x - 30, _y - 50, _x, _y);
        crc.fillStyle = "rgb(172, 64, 52)"
        crc.fill(koralle);
        crc.stroke(koralle);
    }

    function Pflanze(_x: number, _y: number): void {
        let pflanze: Path2D = new Path2D();
        pflanze.moveTo(_x, _y);
        pflanze.quadraticCurveTo(_x + 60, _y - 100, _x + 10, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        pflanze.moveTo(_x, _y);
        pflanze.lineTo(_x - 40, _y);
        pflanze.quadraticCurveTo(_x + 30, _y - 100, _x - 20, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        crc.fillStyle = "green"
        crc.fill(pflanze);
        crc.stroke(pflanze);
    }

    function feedFish(_event:MouseEvent){
        let y = _event.clientY
        let x = _event.clientX 
        if(x <= 1000 && y <= 700){
            let food: Food = new Food(x,y);
            fishArray.push(food);
        }
    }
}