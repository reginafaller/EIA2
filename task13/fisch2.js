var fisch;
(function (fisch) {
    class Fisch2 extends fisch.Fisch {
        constructor() {
            super();
            this.x = Math.random() * fisch.crc.canvas.width;
            this.y = Math.random() * fisch.crc.canvas.height;
            this.dx = Math.random() * -5;
            this.dy = Math.random() * 0;
        }
        draw() {
            let fish = new Path2D();
            fish.moveTo(this.x, this.y);
            fish.quadraticCurveTo(this.x + 60, this.y - 30, this.x + 120, this.y - 10);
            fish.lineTo(this.x + 150, this.y - 30);
            fish.lineTo(this.x + 130, this.y);
            fish.moveTo(this.x, this.y);
            fish.quadraticCurveTo(this.x + 60, this.y + 30, this.x + 120, this.y + 10);
            fish.lineTo(this.x + 150, this.y + 30);
            fish.lineTo(this.x + 130, this.y);
            fisch.crc.fillStyle = "blue";
            fisch.crc.fill(fish);
            fisch.crc.stroke(fish);
        }
        move() {
            if (this.x <= 0 || this.x >= 1000 || this.y <= 0 || this.y >= 700) {
                this.x = 500;
                this.y = 300;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    fisch.Fisch2 = Fisch2;
})(fisch || (fisch = {}));
//# sourceMappingURL=fisch2.js.map