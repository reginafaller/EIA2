var fisch;
(function (fisch) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let fishArray2 = [];
    let crabArray = [];
    let bubbleArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        fisch.crc = canvas.getContext("2d");
        fisch.crc.rect(0, 0, 1000, 700);
        fisch.crc.fillStyle = "rgba(0, 0, 255, 0.25)";
        fisch.crc.fill();
        Pflanze(100, 700);
        Pflanze(150, 750);
        Pflanze(125, 800);
        Koralle(500, 700);
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = 695;
            let z = "black";
            if (i <= 25) {
                z = "grey";
            }
            kies(x, y, z);
        }
        imageData = fisch.crc.getImageData(0, 0, canvas.width, canvas.height);
        fisch3(250, 250);
        fisch3(600, 600);
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let fish;
            fish = new fisch.Fisch();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw();
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * -5; //math random nimmt zahl zwischen 0-1, diese zahl mal 10 - 5 ergibt eine zahl zwischen 5 & -5
            let dy = 0;
            let fish2;
            fish2 = new fisch.Fisch2();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            fishArray2.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * -5;
            let dy = 0;
            let crab;
            crab = new fisch.Krabbe();
            crab.x = x;
            crab.y = 660;
            crab.dx = dx;
            crab.dy = dy;
            crabArray.push(crab);
            crab.draw();
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = 0;
            let dy = Math.random() * -5;
            let blub;
            blub = new fisch.Bubble();
            blub.x = x;
            blub.y = y;
            blub.dx = dx;
            blub.dy = dy;
            bubbleArray.push(blub);
            blub.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        fisch.crc.clearRect(0, 0, canvas.width, canvas.height);
        fisch.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update(fishArray[i].x, fishArray[i].y);
            if (fishArray[i].x <= 0 || fishArray[i].x >= 1000 || fishArray[i].y <= 0 || fishArray[i].y >= 700) {
                fishArray[i].update(500, 350);
            }
        }
        for (let i = 0; i < fishArray2.length; i++) {
            fishArray2[i].update(fishArray2[i].x);
            if (fishArray2[i].x <= 0) {
                fishArray2[i].update(1000);
            }
        }
        for (let i = 0; i < crabArray.length; i++) {
            crabArray[i].update(crabArray[i].dx);
            if (crabArray[i].x <= 0 || crabArray[i].x >= 1000) {
                crabArray[i].update(-1);
            }
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update(bubbleArray[i].y);
            if (bubbleArray[i].y <= 0) {
                bubbleArray[i].update(600);
            }
        }
    }
    function fisch3(_x, _y) {
        let fisch3 = new Path2D();
        fisch3.moveTo(_x, _y);
        fisch3.quadraticCurveTo(_x + 100, _y - 10, _x + 150, _y - 100);
        fisch3.quadraticCurveTo(_x + 150, _y, _x + 250, _y - 50);
        fisch3.moveTo(_x, _y);
        fisch3.quadraticCurveTo(_x + 120, _y + 30, _x + 150, _y + 80);
        fisch3.quadraticCurveTo(_x + 150, _y + 50, _x + 160, _y + 40);
        fisch3.quadraticCurveTo(_x + 200, _y, _x + 270, _y + 100);
        fisch3.quadraticCurveTo(_x + 250, _y + 50, _x + 225, _y + 20);
        fisch3.quadraticCurveTo(_x + 235, _y - 20, _x + 250, _y - 50);
        fisch.crc.stroke(fisch3);
        fisch.crc.fillStyle = "yellow";
        fisch.crc.fill(fisch3);
    }
    function kies(_x, _y, _z) {
        let stein = new Path2D();
        stein.moveTo(_x, _y);
        stein.arc(_x, _y, 10, 0, 10);
        fisch.crc.fillStyle = _z;
        fisch.crc.fill(stein);
        fisch.crc.stroke(stein);
    }
    function Koralle(_x, _y) {
        let koralle = new Path2D();
        koralle.moveTo(_x, _y);
        koralle.lineTo(_x + 40, _y);
        koralle.quadraticCurveTo(_x - 10, _y - 50, _x + 40, _y - 100);
        koralle.bezierCurveTo(_x + 100, _y - 135, _x + 95, _y - 140, _x + 40, _y - 120);
        koralle.bezierCurveTo(_x + 100, _y - 235, _x + 95, _y - 240, _x + 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 235, _x - 95, _y - 240, _x - 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 115, _x - 95, _y - 120, _x - 10, _y - 100);
        koralle.quadraticCurveTo(_x - 30, _y - 50, _x, _y);
        fisch.crc.fillStyle = "rgb(172, 64, 52)";
        fisch.crc.fill(koralle);
        fisch.crc.stroke(koralle);
    }
    function Pflanze(_x, _y) {
        let pflanze = new Path2D();
        pflanze.moveTo(_x, _y);
        pflanze.quadraticCurveTo(_x + 60, _y - 100, _x + 10, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        pflanze.moveTo(_x, _y);
        pflanze.lineTo(_x - 40, _y);
        pflanze.quadraticCurveTo(_x + 30, _y - 100, _x - 20, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        fisch.crc.fillStyle = "green";
        fisch.crc.fill(pflanze);
        fisch.crc.stroke(pflanze);
    }
})(fisch || (fisch = {}));
//# sourceMappingURL=canvas.js.map