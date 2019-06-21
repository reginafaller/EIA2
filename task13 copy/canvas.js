var fisch;
(function (fisch) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", feedFish);
    let canvas;
    let fishArray = [];
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
        for (let i = 0; i < 20; i++) {
            let blub = new fisch.Bubble();
            fishArray.push(blub);
        }
        for (let i = 0; i < 5; i++) {
            let fish = new fisch.Fisch();
            fishArray.push(fish);
        }
        for (let i = 0; i < 5; i++) {
            let fish2 = new fisch.Fisch2();
            fishArray.push(fish2);
        }
        for (let i = 0; i < 5; i++) {
            let crab = new fisch.Krabbe();
            fishArray.push(crab);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        fisch.crc.clearRect(0, 0, canvas.width, canvas.height);
        fisch.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
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
    function feedFish(_event) {
        let y = _event.clientY;
        let x = _event.clientX;
        if (x <= 1000 && y <= 700) {
            let food = new fisch.Food(x, y);
            fishArray.push(food);
        }
    }
})(fisch || (fisch = {}));
//# sourceMappingURL=canvas.js.map