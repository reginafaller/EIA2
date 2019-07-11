namespace fisch {
    export class Bubble  {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
            this.x = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = 0;
            this.dy = Math.random() * -5;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.moveTo(this.x, this.y);
            bubble.arc(this.x, this.y, 10, 0, Math.PI * 2);
            crc.fillStyle = "rgba(240, 255, 255, 0.5)";
            crc.fill(bubble);
        }
        update(): void {
            this.move();
            this.draw();
        }
        move(): void {
            if (this.y <= 0) {
                this.y = 600;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}