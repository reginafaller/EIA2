namespace fisch{
    export class Bubble{
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw():void{
            let bubble: Path2D= new Path2D();
    bubble.moveTo(this.x,this.y);
    bubble.arc(this.x,this.y,10,0,Math.PI*2);
    crc.fillStyle = "rgba(240, 255, 255, 0.5)";
    crc.fill(bubble);
        }
        update(_y:number):void {
            this.move(_y);
            this.draw();
        }
        move(_y:number):void{
            if(this.y <=0){
                this.y = _y;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}