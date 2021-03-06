var fisch;
(function (fisch) {
    class Fisch extends fisch.Bubble {
        constructor() {
            super();
            this.x = Math.random() * fisch.crc.canvas.width;
            this.y = Math.random() * fisch.crc.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }
        draw() {
            let fisch3 = new Path2D();
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x + 100, this.y - 10, this.x + 150, this.y - 100);
            fisch3.quadraticCurveTo(this.x + 150, this.y, this.x + 250, this.y - 50);
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x + 120, this.y + 30, this.x + 150, this.y + 80);
            fisch3.quadraticCurveTo(this.x + 150, this.y + 50, this.x + 160, this.y + 40);
            fisch3.quadraticCurveTo(this.x + 200, this.y, this.x + 270, this.y + 100);
            fisch3.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 225, this.y + 20);
            fisch3.quadraticCurveTo(this.x + 235, this.y - 20, this.x + 250, this.y - 50);
            fisch.crc.stroke(fisch3);
            fisch.crc.fillStyle = "yellow";
            fisch.crc.fill(fisch3);
        }
        update() {
            this.move();
            this.draw();
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
    fisch.Fisch = Fisch;
})(fisch || (fisch = {}));
//# sourceMappingURL=fisch1.js.map