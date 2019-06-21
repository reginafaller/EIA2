var fisch;
(function (fisch) {
    class Nemo {
        draw() {
            //crc.scale(0.5, 0.5)
            let bauch = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x - 15, this.y - 20, this.x - 40, this.y - 6);
            bauch.quadraticCurveTo(this.x - 46, this.y - 12, this.x - 50, this.y - 12);
            bauch.quadraticCurveTo(this.x - 55, this.y - 9, this.x - 50, this.y - 6);
            bauch.quadraticCurveTo(this.x - 55, this.y - 3, this.x - 50, this.y);
            bauch.quadraticCurveTo(this.x - 55, this.y + 3, this.x - 50, this.y + 6);
            bauch.quadraticCurveTo(this.x - 55, this.y + 9, this.x - 50, this.y + 12);
            bauch.quadraticCurveTo(this.x - 46, this.y + 12, this.x - 40, this.y + 6);
            bauch.quadraticCurveTo(this.x - 15, this.y + 20, this.x, this.y);
            fisch.crc.fillStyle = "#FF6037";
            fisch.crc.fill(bauch);
            fisch.crc.stroke(bauch);
            let auge = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x - 10, this.y - 4, 1.5, 0, 10);
            fisch.crc.fillStyle = "white";
            fisch.crc.fill(auge);
            let pupille = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x - 10, this.y - 4, 1, 0, 10);
            fisch.crc.fillStyle = "black";
            fisch.crc.fill(pupille);
        }
        update(_x, _y) {
            this.move(_x, _y);
            this.draw();
        }
        move(_x, _y) {
            if (this.x >= 1200) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy + _y;
        }
    }
    fisch.Nemo = Nemo;
})(fisch || (fisch = {}));
//# sourceMappingURL=nemo.js.map