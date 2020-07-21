namespace art {
    export class cube{
        x: number;
        y: number;
        r: number;
        s: number;
        color: string;

        constructor() {
            this.x = Math.floor(Math.random() * crc.canvas.width);
            this.y = Math.floor(Math.random() * crc.canvas.height);
            this.r = 100;
            this.s = 2;
            this.color = "green"
        }

        draw(): void {
            let cube: Path2D = new Path2D();
            cube.moveTo(this.x, this.y);
            cube.rect(this.x, this.y, this.r, this.r);
            crc.fillStyle = this.color;
            crc.fill(cube);
            crc.stroke(cube);
        }

        update(): void {
            this.draw();
            this.move();
        }

        move(): void {
            if(this.r > 150 || this.r < 100){
                this.s = this.s * -1;
            }
            this.r += this.s;
        }
    }
}