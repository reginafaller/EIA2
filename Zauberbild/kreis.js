var art;
(function (art) {
    class kreis {
        constructor() {
            this.x = Math.floor(Math.random() * art.crc.canvas.width) + 100;
            this.y = Math.floor(Math.random() * art.crc.canvas.height);
            this.color = "red";
            this.ChangeColor = false;
        }
        draw() {
            let kreis = new Path2D();
            kreis.moveTo(this.x, this.y);
            kreis.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            art.crc.fillStyle = this.color;
            art.crc.fill(kreis);
        }
        update(_x, _y, _c, _d) {
            this.draw();
            this.move(_x, _y, _c, _d);
        }
        move(_x, _y, _c, _d) {
            if (_d == true) {
                console.log("true");
                this.x = art.clientX;
                this.y = art.clientY;
            }
            this.color = _c;
            this.x += _x;
            this.y += _y;
            if (this.x <= 0 || this.x >= art.CanvasWidth) {
                this.x = 100;
            }
            if (this.y <= 0 || this.y >= art.CanvasHeight) {
                this.y = 0;
            }
        }
    }
    art.kreis = kreis;
})(art || (art = {}));
//# sourceMappingURL=kreis.js.map