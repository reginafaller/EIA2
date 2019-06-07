namespace fisch{
    export class Fisch2{
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw():void{
            let fish: Path2D= new Path2D();
            fish.moveTo(this.x,this.y);
            fish.quadraticCurveTo(this.x + 60,this.y -30,this.x +120,this.y - 10);
            fish.lineTo(this.x+150,this.y-30);
            fish.lineTo(this.x+130,this.y);
            fish.moveTo(this.x,this.y);
            fish.quadraticCurveTo(this.x + 60,this.y +30,this.x +120,this.y + 10);
            fish.lineTo(this.x+150,this.y+30);
            fish.lineTo(this.x+130,this.y);
            crc.fillStyle = "blue"
            crc.fill(fish);
            crc.stroke(fish);
        }
        update(_x:number):void {
            this.move(_x);
            this.draw();
        }
        move(_x:number):void{
            if(this.x <=0){
                this.x = 1000;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}