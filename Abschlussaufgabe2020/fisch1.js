var art;
(function (art) {
    class FischS {
        constructor(_color, _t) {
            this.x = Math.floor(Math.random() * art.crc.canvas.width);
            this.y = Math.floor(Math.random() * art.crc.canvas.height);
            this.dx = Math.floor(Math.random() * -3);
            this.dy = Math.floor(Math.random() * 5 - 2);
            let w = Math.random() * 10;
            if (w <= 5) {
                this.a = 1 * _t;
            }
            if (w > 5 && w <= 8) {
                this.a = 2 * _t;
            }
            if (w > 8) {
                this.a = 3 * _t;
            }
            this.color = _color;
        }
        draw(_x, _y, _i) {
            let bauch = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x + (15) * this.a, this.y - (20) * this.a, this.x + (40) * this.a, this.y - (6) * this.a);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y - (12) * this.a, this.x + (50) * this.a, this.y - (12) * this.a);
            bauch.quadraticCurveTo(this.x + (55) * this.a, this.y - (9) * this.a, this.x + (50) * this.a, this.y - (6) * this.a);
            bauch.quadraticCurveTo(this.x + (55) * this.a, this.y - (3) * this.a, this.x + (50) * this.a, this.y);
            bauch.quadraticCurveTo(this.x + (55) * this.a, this.y + (3) * this.a, this.x + (50) * this.a, this.y + (6) * this.a);
            bauch.quadraticCurveTo(this.x + (55) * this.a, this.y + (9) * this.a, this.x + (50) * this.a, this.y + (12) * this.a);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y + (12) * this.a, this.x + (40) * this.a, this.y + (6) * this.a);
            bauch.quadraticCurveTo(this.x + (15) * this.a, this.y + (20) * this.a, this.x, this.y);
            bauch.closePath();
            art.crc.fillStyle = this.color;
            art.crc.fill(bauch);
            art.crc.stroke(bauch);
            let auge = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x + (10) * this.a, this.y - (4) * this.a, 1.5 * this.a, 0, 10);
            art.crc.fillStyle = "white";
            art.crc.fill(auge);
            let pupille = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x + (10) * this.a, this.y - (4) * this.a, (1) * this.a, 0, 10);
            art.crc.fillStyle = "black";
            art.crc.fill(pupille);
        }
        update(_x, _y, _i) {
            this.move();
            this.draw(_x, _y, _i);
        }
        move() {
            if (this.x <= 0 || this.x >= 1000 || this.y <= 0 || this.y >= 700) {
                this.x = 1000;
                this.y = Math.floor(Math.random() * art.crc.canvas.height);
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    art.FischS = FischS;
})(art || (art = {}));
//# sourceMappingURL=fisch1.js.map