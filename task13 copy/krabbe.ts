namespace fisch {
    export class Krabbe extends Bubble {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
            super()
            this.x = Math.random() * crc.canvas.width;
            this.y = 660;
            this.dx = Math.random() * -5;
            this.dy = 0;
        }

        draw(): void {
            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.arc(this.x, this.y, 30, 0, 8);
            crc.fillStyle = "red";
            crc.fill(bauch);
            let augen: Path2D = new Path2D();
            augen.moveTo(this.x + 10, this.y - 28);
            augen.lineTo(this.x + 15, this.y - 50);
            augen.arc(this.x + 15, this.y - 50, 5, 0, 8)
            augen.moveTo(this.x - 10, this.y - 28);
            augen.lineTo(this.x - 15, this.y - 50);
            augen.arc(this.x - 15, this.y - 50, 5, 0, 8)
            crc.lineWidth = 5;
            crc.strokeStyle = "red";
            crc.stroke(augen);

            let arm: Path2D = new Path2D();
            arm.moveTo(this.x + 30, this.y - 10);
            arm.lineTo(this.x + 50, this.y - 20);
            arm.arc(this.x + 50, this.y - 20, 10, Math.PI * 2, Math.PI * 1.5)
            arm.closePath();
            arm.moveTo(this.x - 30, this.y - 10);
            arm.lineTo(this.x - 50, this.y - 20);
            arm.arc(this.x - 50, this.y - 20, 10, Math.PI * 1.5, Math.PI)
            arm.closePath();
            crc.stroke(arm);
            crc.fill(arm);
            let feet: Path2D = new Path2D();
            feet.moveTo(this.x + 10, this.y + 28);
            feet.lineTo(this.x + 30, this.y + 40);
            feet.moveTo(this.x - 10, this.y + 28);
            feet.lineTo(this.x - 30, this.y + 40);
            crc.stroke(feet);

            crc.strokeStyle = "black"
            crc.lineWidth = 1;
        }

        move(): void {
            if (this.x <= 0 || this.x >= 1000) {
                this.dx = this.dx * -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}