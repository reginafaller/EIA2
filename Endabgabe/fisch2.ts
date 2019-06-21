namespace fisch {
    export class Fisch2 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            //crc.scale(0.5,0.5)
            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x + 25, this.y - 33, this.x + 66, this.y - 10);
            bauch.quadraticCurveTo(this.x + 76, this.y - 20, this.x + 83, this.y - 20);
            bauch.quadraticCurveTo(this.x + 91, this.y - 15, this.x + 83, this.y - 10);
            bauch.quadraticCurveTo(this.x + 91, this.y - 5, this.x + 83, this.y);
            bauch.quadraticCurveTo(this.x + 91, this.y + 5, this.x + 83, this.y + 10);
            bauch.quadraticCurveTo(this.x + 91, this.y + 15, this.x + 83, this.y + 20);
            bauch.quadraticCurveTo(this.x + 76, this.y + 20, this.x + 66, this.y + 10);
            bauch.quadraticCurveTo(this.x + 25, this.y + 33, this.x, this.y);
            crc.fillStyle = "blue";
            crc.fill(bauch);
            crc.stroke(bauch);
            let auge: Path2D = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x + 16, this.y - 6, 4, 0, 10);
            crc.fillStyle = "white";
            crc.fill(auge);
            let pupille: Path2D = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x + 16, this.y - 6, 2.5, 0, 10);
            crc.fillStyle = "black";
            crc.fill(pupille);
        }
        update(_x: number): void {
            this.move(_x);
            this.draw();
        }
        move(_x: number): void {
            if (this.x <= 0) {
                this.x = 1000;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}