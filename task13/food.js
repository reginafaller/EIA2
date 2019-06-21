var fisch;
(function (fisch) {
    class Food extends fisch.Fisch {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
            this.dy = Math.random() * 5;
        }
        draw() {
            let food = new Path2D();
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x + 4, this.y - 2, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x - 4, this.y + 2, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y - 4, 2, 0, Math.PI * 2);
            fisch.crc.fillStyle = "brown";
            fisch.crc.fill(food);
        }
        move() {
            if (this.y >= 698) {
                this.dy = 0;
            }
            this.y += this.dy;
        }
    }
    fisch.Food = Food;
})(fisch || (fisch = {}));
//# sourceMappingURL=food.js.map