var art;
(function (art) {
    class cube extends art.kreis {
        constructor() {
            super();
        }
        draw() {
            let cube = new Path2D();
            cube.moveTo(this.x, this.y);
            cube.rect(this.x, this.y, 40, 40);
            art.crc.fillStyle = this.color;
            art.crc.fill(cube);
            art.crc.stroke(cube);
        }
    }
    art.cube = cube;
})(art || (art = {}));
//# sourceMappingURL=Cube.js.map