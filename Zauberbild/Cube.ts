namespace art {
    export class cube extends kreis{
        

        constructor() {
            super();
            this.type = "cube";
        }

        draw(): void {
            let cube: Path2D = new Path2D();
            cube.moveTo(this.x, this.y);
            cube.rect(this.x, this.y, 40, 40);
            crc.fillStyle = this.color;
            crc.fill(cube);
            crc.stroke(cube);
        }

        

    }
}