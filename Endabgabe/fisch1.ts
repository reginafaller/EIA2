namespace fisch{
    export class Fisch{
        x: number;
        y: number;
        dx: number;
        dy: number;
        a:  number;
        b:  number;
        points: number;

        draw():void{
            //crc.scale(this.a,this.b);
            let bauch: Path2D= new Path2D();
            //crc.setTransform(this.a,0,0,this.b,0,0);
            bauch.moveTo(this.x,this.y);
            bauch.quadraticCurveTo(this.x+12.5,this.y-17,this.x+33,this.y-5);
            bauch.quadraticCurveTo(this.x+38,this.y-10,this.x+42,this.y-10);
            bauch.quadraticCurveTo(this.x+46,this.y-7.5,this.x+42,this.y-5);
            bauch.quadraticCurveTo(this.x+46,this.y-2.5,this.x+42,this.y);
            bauch.quadraticCurveTo(this.x+46,this.y+2.5,this.x+42,this.y+5);
            bauch.quadraticCurveTo(this.x+46,this.y+7.5,this.x+42,this.y+10);
            bauch.quadraticCurveTo(this.x+38,this.y+10,this.x+33,this.y+5);
            bauch.quadraticCurveTo(this.x+12.5,this.y+17,this.x,this.y);
            crc.fillStyle="purple";
            crc.fill(bauch);
            crc.stroke(bauch);
            let auge: Path2D= new Path2D();
            auge.moveTo(this.x,this.y);
            auge.arc(this.x+8,this.y-3,3,0,10);
            crc.fillStyle= "white";
            crc.fill(auge);
            let pupille: Path2D= new Path2D();
            pupille.moveTo(this.x,this.y);
            pupille.arc(this.x+8,this.y-3,1.5,0,10);
            crc.fillStyle= "black";
            crc.fill(pupille);
            //crc.setTransform(1,0,0,1,0,0);
        }
        update(_x:number,_y:number):void {
            this.move(_x,_y);
            this.draw();
        }
        move(_x:number, _y:number):void{
            if(this.x <= 0 ||  this.x >=1000 || this.y <= 0 || this.y>=700){
                this.x = _x;
                this.y = _y;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}