namespace newYear {

    export class FireworkTriangle extends Firework  {

        constructor(color: string, particles: number, x: number, y: number) {
            super(color, particles, x, y);
        }

        draw(): void {
            let dashLength: number = 0.5 * this.particles
            //let dashArray:number [] = [5, dashLength];
            //let currentAngle: number = 0;
            //for (let i: number = 0; i < this.particles; i++){
            //currentAngle = currentAngle += particleAngle
            let ray: Path2D = new Path2D();
            ray.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
            crc.setLineDash([dashLength, 10]);
            crc.strokeStyle = this.color
            crc.lineWidth = 2;
            crc.stroke(ray);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.r = this.r += 0.5;
            if (this.r >= 30){
                this.r = 0;
            }
        }


    }
}