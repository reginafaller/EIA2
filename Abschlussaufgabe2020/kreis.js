var art;
(function (art) {
    class kreis {
        constructor() {
            this.x = Math.floor(Math.random() * art.crc.canvas.width);
            this.y = Math.floor(Math.random() * art.crc.canvas.height);
        }
        draw(_c) {
            let kreis = new Path2D();
            kreis.moveTo(this.x, this.y);
            kreis.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            art.crc.fillStyle = _c;
            art.crc.fill(kreis);
            art.crc.stroke(kreis);
        }
        update(_c, _x, _y, _id) {
            this.draw(_c);
            this.id = _id;
            this.move(_x, _y);
        }
        move(_dx, _dy) {
            if (this.x <= 0 || this.x >= 800 || this.y <= 0 || this.y >= 600) {
                this.x = Math.floor(Math.random() * art.crc.canvas.height);
                this.y = Math.floor(Math.random() * art.crc.canvas.height);
            }
            this.x += _dx;
            this.y += _dy;
        }
    }
    art.kreis = kreis;
})(art || (art = {}));
//# sourceMappingURL=kreis.js.map