namespace fisch {
    export class Krabbe extends FischS{

        x: number;
        y: number;
        dx: number;
        dy: number;
        a:number;
        color:string;

        constructor(_color:string){
            super(_color)
            this.x = Math.random() * crc.canvas.width;
            this.y = 660;
            this.dx = Math.random() * -5;
            this.dy = 0;
            this.a = 5;
            this.color = _color;
        }

        draw(_x:number,_y:number,_i:number):void{
            let bauch: Path2D = new Path2D();
            //crc.setTransform(0.5,0,0,0.5,0,0);
            bauch.moveTo(this.x, this.y);
            bauch.arc(this.x, this.y, 30, 0, 8);
            crc.fillStyle = this.color;
            crc.fill(bauch);
            let augen: Path2D = new Path2D();
            augen.moveTo(this.x + 10, this.y - 28);
            augen.lineTo(this.x + 15, this.y - 50);
            augen.arc(this.x + 15, this.y - 50, 5, 0, 8)
            augen.moveTo(this.x - 10, this.y - 28);
            augen.lineTo(this.x - 15, this.y - 50);
            augen.arc(this.x - 15, this.y - 50, 5, 0, 8)
            crc.lineWidth = 5;
            crc.strokeStyle = this.color;
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
            //eat(bauch,_x,_y,_i);
        }
        update(_x:number,_y:number, _i:number):void {
            this.move();
            this.draw(_x,_y,_i);
        }
        
        move(): void {
            if (this.x <= 0 || this.x >= 1200) {
                this.dx = this.dx * -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}