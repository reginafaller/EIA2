var fisch;
(function (fisch) {
    class FischS {
        constructor(_color) {
            this.x = Math.floor(Math.random() * fisch.crc.canvas.width);
            this.y = Math.floor(Math.random() * fisch.crc.canvas.height);
            this.dx = Math.floor(Math.random() * -3);
            this.dy = Math.floor(Math.random() * 5 - 2);
            this.a = Math.floor(Math.random() * 4) + 0.5;
            this.color = _color;
        }
        draw(_x, _y, _i) {
            let bauch = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x + (12.5) * this.a, this.y - (17) * this.a, this.x + (33) * this.a, this.y - (5) * this.a);
            bauch.quadraticCurveTo(this.x + (38) * this.a, this.y - (10) * this.a, this.x + (42) * this.a, this.y - (10) * this.a);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y - (7.5) * this.a, this.x + (42) * this.a, this.y - (5) * this.a);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y - (2.5) * this.a, this.x + (42) * this.a, this.y);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y + (2.5) * this.a, this.x + (42) * this.a, this.y + (5) * this.a);
            bauch.quadraticCurveTo(this.x + (46) * this.a, this.y + (7.5) * this.a, this.x + (42) * this.a, this.y + (10) * this.a);
            bauch.quadraticCurveTo(this.x + (38) * this.a, this.y + (10) * this.a, this.x + (33) * this.a, this.y + (5) * this.a);
            bauch.quadraticCurveTo(this.x + (12.5) * this.a, this.y + (17) * this.a, this.x, this.y);
            bauch.closePath();
            fisch.crc.fillStyle = this.color;
            fisch.crc.fill(bauch);
            fisch.crc.stroke(bauch);
            let auge = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x + 8, this.y - 3, 3, 0, 10);
            fisch.crc.fillStyle = "white";
            fisch.crc.fill(auge);
            let pupille = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x + 8, this.y - 3, 1.5, 0, 10);
            fisch.crc.fillStyle = "black";
            fisch.crc.fill(pupille);
            //eat(bauch,_x,_y,_i);
        }
        update(_x, _y, _i) {
            this.move();
            this.draw(_x, _y, _i);
        }
        move() {
            if (this.x <= 0 || this.x >= 1000 || this.y <= 0 || this.y >= 700) {
                this.x = 1000;
                this.y = Math.floor(Math.random() * fisch.crc.canvas.height);
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    fisch.FischS = FischS;
})(fisch || (fisch = {}));
//# sourceMappingURL=fisch1.js.map