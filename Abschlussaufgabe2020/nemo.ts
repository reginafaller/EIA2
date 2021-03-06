namespace art {
    export class Nemo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        a: number;
        b: number;

        constructor(){
            this.x = 0;
            this.y = Math.floor(Math.random() * crc.canvas.height);
            this.dx = 2;
            this.dy = 0;
            this.a = 1;
        }
        draw(): void {
            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x, this.y);
            bauch.quadraticCurveTo(this.x - (15)*this.a, this.y - (20)*this.a, this.x - (40)*this.a, this.y - (6)*this.a);
            bauch.quadraticCurveTo(this.x - (46)*this.a, this.y - (12)*this.a, this.x - (50)*this.a, this.y - (12)*this.a);
            bauch.quadraticCurveTo(this.x - (55)*this.a, this.y - (9)*this.a, this.x - (50)*this.a, this.y - (6)*this.a);
            bauch.quadraticCurveTo(this.x - (55)*this.a, this.y - (3)*this.a, this.x - (50)*this.a, this.y);
            bauch.quadraticCurveTo(this.x - (55)*this.a, this.y + (3)*this.a, this.x - (50)*this.a, this.y + (6)*this.a);
            bauch.quadraticCurveTo(this.x - (55)*this.a, this.y + (9)*this.a, this.x - (50)*this.a, this.y + (12)*this.a);
            bauch.quadraticCurveTo(this.x - (46)*this.a, this.y + (12)*this.a, this.x - (40)*this.a, this.y + (6)*this.a);
            bauch.quadraticCurveTo(this.x - (15)*this.a, this.y + (20)*this.a, this.x, this.y);
            crc.fillStyle = "#FF6037";
            crc.fill(bauch);
            crc.stroke(bauch);
            let auge: Path2D = new Path2D();
            auge.moveTo(this.x, this.y);
            auge.arc(this.x - (10)*this.a, this.y - (4)*this.a, 1.5*this.a, 0, 10);
            crc.fillStyle = "white";
            crc.fill(auge);
            let pupille: Path2D = new Path2D();
            pupille.moveTo(this.x, this.y);
            pupille.arc(this.x - (10)*this.a, this.y - (4)*this.a, 1*this.a, 0, 10);
            crc.fillStyle = "black";
            crc.fill(pupille);
        }
        update(_x: number, _y:number, _s:number): void {
            this.move(_x, _y);
            this.scale(_s)
            this.draw();
        }
        move(_x: number, _y:number): void {
            if (this.x >= 1200) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy + _y;
        }
        scale(_s:number):void{
            this.a = this.a*_s;
        }
    }
}