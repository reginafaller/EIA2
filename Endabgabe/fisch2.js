var fisch;
(function (fisch) {
    class Fisch2 {
        draw() {
            //crc.scale(0.5,0.5)
            let bauch = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x + 25, this.y - 33, this.x + 66, this.y - 10);
            bauch.quadraticCurveTo(this.x + 76, this.y - 20, this.x + 83, this.y - 20);
            bauch.quadraticCurveTo(this.x + 91, this.y - 15, this.x + 83, this.y - 10);
            bauch.quadraticCurveTo(this.x + 91, this.y - 5, this.x + 83, this.y);
            bauch.quadraticCurveTo(this.x + 91, this.y + 5, this.x + 83, this.y + 10);
            bauch.quadraticCurveTo(this.x + 91, this.y + 15, this.x + 83, this.y + 20);
            bauch.quadraticCurveTo(this.x + 76, this.y + 20, this.x + 66, this.y + 10);
            bauch.quadraticCurveTo(this.x + 25, this.y + 33, this.x, this.y);
            fisch.crc.fillStyle = "blue";
            fisch.crc.fill(bauch);
            fisch.crc.stroke(bauch);
            let auge = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x + 16, this.y - 6, 4, 0, 10);
            fisch.crc.fillStyle = "white";
            fisch.crc.fill(auge);
            let pupille = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x + 16, this.y - 6, 2.5, 0, 10);
            fisch.crc.fillStyle = "black";
            fisch.crc.fill(pupille);
        }
        update(_x) {
            this.move(_x);
            this.draw();
        }
        move(_x) {
            if (this.x <= 0) {
                this.x = 1000;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    fisch.Fisch2 = Fisch2;
})(fisch || (fisch = {}));
//# sourceMappingURL=fisch2.js.map