namespace fisch{
    export class FischS {
        x: number;
        y: number;
        dx: number;
        dy: number;
        a:  number;
        color: string;

        constructor(_color:string){
            this.x = Math.floor(Math.random() * crc.canvas.width);
            this.y = Math.floor(Math.random() * crc.canvas.height);
            this.dx = Math.floor(Math.random() * -3);
            this.dy = Math.floor(Math.random() * 5 - 2);
            this.a = Math.floor(Math.random() * 4) +0.5;
            this.color = _color;
        }

        draw(_x:number,_y:number, _i:number):void{
            let bauch: Path2D= new Path2D();
            bauch.moveTo(this.x,this.y);
            bauch.quadraticCurveTo(this.x+(12.5)*this.a,this.y-(17)*this.a,this.x+(33)*this.a,this.y-(5)*this.a);
            bauch.quadraticCurveTo(this.x+(38)*this.a,this.y-(10)*this.a,this.x+(42)*this.a,this.y-(10)*this.a);
            bauch.quadraticCurveTo(this.x+(46)*this.a,this.y-(7.5)*this.a,this.x+(42)*this.a,this.y-(5)*this.a);
            bauch.quadraticCurveTo(this.x+(46)*this.a,this.y-(2.5)*this.a,this.x+(42)*this.a,this.y);
            bauch.quadraticCurveTo(this.x+(46)*this.a,this.y+(2.5)*this.a,this.x+(42)*this.a,this.y+(5)*this.a);
            bauch.quadraticCurveTo(this.x+(46)*this.a,this.y+(7.5)*this.a,this.x+(42)*this.a,this.y+(10)*this.a);
            bauch.quadraticCurveTo(this.x+(38)*this.a,this.y+(10)*this.a,this.x+(33)*this.a,this.y+(5)*this.a);
            bauch.quadraticCurveTo(this.x+(12.5)*this.a,this.y+(17)*this.a,this.x,this.y);
            bauch.closePath();
            crc.fillStyle= this.color;
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
            eat(bauch,_x,_y,_i);
            
        }
        update(_x:number,_y:number, _i:number):void {
            this.move();
            this.draw(_x,_y,_i);
        }
        move():void{
            if(this.x <= 0 ||  this.x >=1000 || this.y <= 0 || this.y>=700){
                this.x = 1000;
                this.y = Math.floor(Math.random() * crc.canvas.height);
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    
            
        
    }
}