var art;
(function (art) {
    class cube {
        constructor() {
            this.x = Math.floor(Math.random() * art.crc.canvas.width);
            this.y = Math.floor(Math.random() * art.crc.canvas.height);
            this.r = 100;
            this.s = 2;
            this.color = "green";
        }
        draw() {
            let cube = new Path2D();
            cube.moveTo(this.x, this.y);
            cube.rect(this.x, this.y, this.r, this.r);
            art.crc.fillStyle = this.color;
            art.crc.fill(cube);
            art.crc.stroke(cube);
        }
        update() {
            this.draw();
            this.move();
        }
        move() {
            if (this.r > 150 || this.r < 100) {
                this.s = this.s * -1;
            }
            this.r += this.s;
        }
    }
    art.cube = cube;
})(art || (art = {}));
//# sourceMappingURL=Cube.js.map