document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    crc.rect(0, 0, 1000, 700);
    crc.fillStyle = "rgba(0, 0, 255, 0.25)";
    crc.fill();
    Pflanze(100, 700);
    Pflanze(150, 750);
    Pflanze(125, 800);
    Koralle(500, 700);
    fisch3(250, 250);
    fisch3(600, 600);
    for (let i = 0; i < 50; i++) {
        let x = Math.random() * canvas.width;
        let y = 695;
        let z = "black";
        if (i <= 25) {
            z = "grey";
        }
        kies(x, y, z);
    }
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        fish1(x, y);
    }
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        bubbles(x, y);
    }
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        fish2(x, y);
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
    crc.stroke(fisch3);
    crc.fillStyle = "yellow";
    crc.fill(fisch3);
}
function kies(_x, _y, _z) {
    let stein = new Path2D();
    stein.moveTo(_x, _y);
    stein.arc(_x, _y, 10, 0, 10);
    crc.fillStyle = _z;
    crc.fill(stein);
    crc.stroke(stein);
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
    crc.fillStyle = "rgb(172, 64, 52)";
    crc.fill(koralle);
    crc.stroke(koralle);
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
    crc.fillStyle = "green";
    crc.fill(pflanze);
    crc.stroke(pflanze);
}
function fish1(_x, _y) {
    let fish1 = new Path2D();
    fish1.moveTo(_x, _y);
    fish1.quadraticCurveTo(_x + 50, _y - 70, _x + 100, _y - 20);
    fish1.lineTo(_x + 120, _y - 40);
    fish1.moveTo(_x, _y);
    fish1.quadraticCurveTo(_x + 50, _y + 70, _x + 100, _y + 20);
    fish1.lineTo(_x + 120, _y + 40);
    fish1.lineTo(_x + 120, _y - 40);
    crc.fillStyle = "orange";
    crc.fill(fish1);
    crc.stroke(fish1);
}
function fish2(_x, _y) {
    let fish = new Path2D();
    fish.moveTo(_x, _y);
    fish.quadraticCurveTo(_x + 60, _y - 30, _x + 120, _y - 10);
    fish.lineTo(_x + 150, _y - 30);
    fish.lineTo(_x + 130, _y);
    fish.moveTo(_x, _y);
    fish.quadraticCurveTo(_x + 60, _y + 30, _x + 120, _y + 10);
    fish.lineTo(_x + 150, _y + 30);
    fish.lineTo(_x + 130, _y);
    crc.fillStyle = "blue";
    crc.fill(fish);
    crc.stroke(fish);
}
function bubbles(_x, _y) {
    let bubble = new Path2D();
    bubble.moveTo(_x, _y);
    bubble.arc(_x, _y, 10, 0, Math.PI * 2);
    crc.fillStyle = "rgba(240, 255, 255, 0.5)";
    crc.fill(bubble);
}
//# sourceMappingURL=canvas.js.map