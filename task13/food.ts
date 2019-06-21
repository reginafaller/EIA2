namespace fisch {
    export class Food extends Fisch {

        constructor(_x:number,_y:number) {
            super()
            this.x = _x;
            this.y = _y;
            this.dy = Math.random() * 5;
        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x+4, this.y-2, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x-4, this.y+2, 2, 0, Math.PI * 2);
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y-4, 2, 0, Math.PI * 2);
            crc.fillStyle = "brown";
            crc.fill(food);
        }
        move(): void {
            if (this.y >= 698) {
                this.dy = 0;
            }
            this.y += this.dy;
        }
    }
}