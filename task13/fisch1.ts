namespace fisch {
    export class Fisch {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
            this.x = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }

        draw(): void {
            let fisch3: Path2D = new Path2D();
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x + 100, this.y - 10, this.x + 150, this.y - 100);
            fisch3.quadraticCurveTo(this.x + 150, this.y, this.x + 250, this.y - 50);
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x + 120, this.y + 30, this.x + 150, this.y + 80);
            fisch3.quadraticCurveTo(this.x + 150, this.y + 50, this.x + 160, this.y + 40);
            fisch3.quadraticCurveTo(this.x + 200, this.y, this.x + 270, this.y + 100);
            fisch3.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 225, this.y + 20);
            fisch3.quadraticCurveTo(this.x + 235, this.y - 20, this.x + 250, this.y - 50);
            crc.stroke(fisch3);
            crc.fillStyle = "yellow"
            crc.fill(fisch3);
        }
        update(): void {
            this.move();
            this.draw();
        }
        move(): void {
            if (this.x <= 0 || this.x >= 1000 || this.y <= 0 || this.y >= 700) {
                this.x = 500;
                this.y = 300;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}