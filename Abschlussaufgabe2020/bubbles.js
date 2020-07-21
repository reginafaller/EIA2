var art;
(function (art) {
    class Bubble {
        constructor() {
            this.x = Math.random() * art.crc.canvas.width;
            this.y = Math.random() * art.crc.canvas.height;
            this.dx = 0;
            this.dy = Math.random() * -5;
        }
        draw() {
            let bubble = new Path2D();
            bubble.moveTo(this.x, this.y);
            bubble.arc(this.x, this.y, 10, 0, Math.PI * 2);
            art.crc.fillStyle = "rgba(240, 255, 255, 0.5)";
            art.crc.fill(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y <= 0) {
                this.y = 600;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    art.Bubble = Bubble;
})(art || (art = {}));
//# sourceMappingURL=bubbles.js.map