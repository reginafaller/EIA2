var fisch;
(function (fisch) {
    class Bubble extends fisch.Fisch {
        constructor() {
            super();
            this.x = Math.random() * fisch.crc.canvas.width;
            this.y = Math.random() * fisch.crc.canvas.height;
            this.dx = 0;
            this.dy = Math.random() * -5;
        }
        draw() {
            let bubble = new Path2D();
            bubble.moveTo(this.x, this.y);
            bubble.arc(this.x, this.y, 10, 0, Math.PI * 2);
            fisch.crc.fillStyle = "rgba(240, 255, 255, 0.5)";
            fisch.crc.fill(bubble);
        }
        move() {
            if (this.y <= 0) {
                this.y = 600;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    fisch.Bubble = Bubble;
})(fisch || (fisch = {}));
//# sourceMappingURL=bubbles.js.map