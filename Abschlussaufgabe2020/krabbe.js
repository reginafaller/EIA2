var art;
(function (art) {
    class Krabbe extends art.FischS {
        constructor(_color) {
            super(_color, 1);
            this.x = Math.random() * art.crc.canvas.width;
            this.y = 660;
            this.dx = Math.random() * -5;
            this.dy = 0;
            this.a = 5;
            this.color = _color;
        }
        draw(_x, _y, _i) {
            let bauch = new Path2D();
            //crc.setTransform(0.5,0,0,0.5,0,0);
            bauch.moveTo(this.x, this.y);
            bauch.arc(this.x, this.y, 30, 0, 8);
            art.crc.fillStyle = this.color;
            art.crc.fill(bauch);
            let augen = new Path2D();
            augen.moveTo(this.x + 10, this.y - 28);
            augen.lineTo(this.x + 15, this.y - 50);
            augen.arc(this.x + 15, this.y - 50, 5, 0, 8);
            augen.moveTo(this.x - 10, this.y - 28);
            augen.lineTo(this.x - 15, this.y - 50);
            augen.arc(this.x - 15, this.y - 50, 5, 0, 8);
            art.crc.lineWidth = 5;
            art.crc.strokeStyle = this.color;
            art.crc.stroke(augen);
            let arm = new Path2D();
            arm.moveTo(this.x + 30, this.y - 10);
            arm.lineTo(this.x + 50, this.y - 20);
            arm.arc(this.x + 50, this.y - 20, 10, Math.PI * 2, Math.PI * 1.5);
            arm.closePath();
            arm.moveTo(this.x - 30, this.y - 10);
            arm.lineTo(this.x - 50, this.y - 20);
            arm.arc(this.x - 50, this.y - 20, 10, Math.PI * 1.5, Math.PI);
            arm.closePath();
            art.crc.stroke(arm);
            art.crc.fill(arm);
            let feet = new Path2D();
            feet.moveTo(this.x + 10, this.y + 28);
            feet.lineTo(this.x + 30, this.y + 40);
            feet.moveTo(this.x - 10, this.y + 28);
            feet.lineTo(this.x - 30, this.y + 40);
            art.crc.stroke(feet);
            art.crc.strokeStyle = "black";
            art.crc.lineWidth = 1;
        }
        update(_x, _y, _i) {
            this.move();
            this.draw(_x, _y, _i);
        }
        move() {
            if (this.x <= 0 || this.x >= 1200) {
                this.dx = this.dx * -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    art.Krabbe = Krabbe;
})(art || (art = {}));
//# sourceMappingURL=krabbe.js.map