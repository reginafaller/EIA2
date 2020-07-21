var art;
(function (art) {
    class Nemo {
        constructor() {
            this.x = 0;
            this.y = Math.floor(Math.random() * art.crc.canvas.height);
            this.dx = 2;
            this.dy = 0;
            this.a = 1;
        }
        draw() {
            let bauch = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x - (15) * this.a, this.y - (20) * this.a, this.x - (40) * this.a, this.y - (6) * this.a);
            bauch.quadraticCurveTo(this.x - (46) * this.a, this.y - (12) * this.a, this.x - (50) * this.a, this.y - (12) * this.a);
            bauch.quadraticCurveTo(this.x - (55) * this.a, this.y - (9) * this.a, this.x - (50) * this.a, this.y - (6) * this.a);
            bauch.quadraticCurveTo(this.x - (55) * this.a, this.y - (3) * this.a, this.x - (50) * this.a, this.y);
            bauch.quadraticCurveTo(this.x - (55) * this.a, this.y + (3) * this.a, this.x - (50) * this.a, this.y + (6) * this.a);
            bauch.quadraticCurveTo(this.x - (55) * this.a, this.y + (9) * this.a, this.x - (50) * this.a, this.y + (12) * this.a);
            bauch.quadraticCurveTo(this.x - (46) * this.a, this.y + (12) * this.a, this.x - (40) * this.a, this.y + (6) * this.a);
            bauch.quadraticCurveTo(this.x - (15) * this.a, this.y + (20) * this.a, this.x, this.y);
            art.crc.fillStyle = "#FF6037";
            art.crc.fill(bauch);
            art.crc.stroke(bauch);
            let auge = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x - (10) * this.a, this.y - (4) * this.a, 1.5 * this.a, 0, 10);
            art.crc.fillStyle = "white";
            art.crc.fill(auge);
            let pupille = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x - (10) * this.a, this.y - (4) * this.a, 1 * this.a, 0, 10);
            art.crc.fillStyle = "black";
            art.crc.fill(pupille);
        }
        update(_x, _y, _s) {
            this.move(_x, _y);
            this.scale(_s);
            this.draw();
        }
        move(_x, _y) {
            if (this.x >= 1200) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy + _y;
        }
        scale(_s) {
            this.a = this.a * _s;
        }
    }
    art.Nemo = Nemo;
})(art || (art = {}));
//# sourceMappingURL=nemo.js.map