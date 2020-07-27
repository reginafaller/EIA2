namespace fisch {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", lol);
    let serverAddress: string = "https://fallerr.herokuapp.com/";
    //import { insert } from "./database";

    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fishArray: FischS[] = [];
    let nemo: Nemo;
    let bubbleArray: Bubble[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    let dead: boolean = false;


    function lol(_event: KeyboardEvent) {
        if (_event.keyCode == 38) {
            nemo.update(nemo.x, -20, 1);
            _event.preventDefault();
        }
        if (_event.keyCode == 40) {
            nemo.update(nemo.x, 20, 1);
            _event.preventDefault();
        }
    }

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        crc.rect(0, 0, 1200, 700);
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
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let w: number = Math.random() * 3;
            let randomColor: string;
            if (w <= 1) {
                randomColor = "blue"
            }
            if (w > 1 && w <= 2) {
                randomColor = "purple"
            }
            if (w > 2) {
                randomColor = "red"
            }
            let fishSmall: FischS = new FischS(randomColor, 1);
            fishArray.push(fishSmall);
        }
        nemo = new Nemo();

        for (let i: number = 0; i < 5; i++) {
            let crabColor: string = "red"
            let crab: Krabbe = new Krabbe(crabColor);
            fishArray.push(crab);
        }
        for (let i: number = 0; i < 20; i++) {
            let blub: Bubble = new Bubble();
            bubbleArray.push(blub);
        }
        update();

    }

    function update(): void {
        if (dead) { return; }
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update(nemo.x, nemo.y, i);
            eat(fishArray[i], i)
        }
        for (let i: number = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        nemo.update(nemo.x, 0, 1);
        if (nemo.x >= 1200) {
            nemo.update(0, 0, 1);

        }
    }




    function eat(fish:FischS, _i:number) {
        if(fish.x > nemo.x - 15 && fish.x < nemo.x + 15 && fish.y > nemo.y - 15 && fish.y < nemo.y + 15) {
            if (nemo.a >= fish.a) {
                updateScore(50)
                fishArray.splice(_i, 1);
                console.log(nemo.a);

                let w: number = Math.random() * 3;
                let randomColor: string;
                if (w <= 1) {
                    randomColor = "blue"
                }
                if (w > 1 && w <= 2) {
                    randomColor = "purple"
                }
                if (w > 2) {
                    randomColor = "red"
                }
                if (nemo.a >= 3){
                    fishArray.splice(0,5);
                    for(let i:number = 0; i<=5; i++){
                    let fishSmall: FischS = new FischS(randomColor, 2);
                    fishArray.push(fishSmall);
                    }
                }
                let fishSmall: FischS = new FischS(randomColor, 1);
                fishArray.push(fishSmall);

            }
            if (nemo.a < fish.a) {
                dead = true;
                let playerName: string = prompt('name eingeben');
                insert(playerName);
                find()
            }

        }
    }

    let score: number = 0;
    function updateScore(_points: number) {

        score += _points;
        document.getElementById("points").innerHTML = score.toString();
        if (nemo.a < 2 && score >= 200) {
            nemo.update(0, 0, 2);
        }
        if (nemo.a < 3 && score >= 500) {
            nemo.update(0, 0, 1.3);
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
    function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&score=" + score;
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
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerListe: Player[] = JSON.parse(xhr.response);
            for (let i: number = 0; i <= SpielerListe.length; i++) {
                let SpielerName: string = SpielerListe[i].name;
                let SpielerScore: string = SpielerListe[i].score;
                document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
            }
        }
    }
}