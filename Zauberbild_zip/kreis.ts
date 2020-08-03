namespace art {
    export class kreis{
        x: number;
        y: number;
        color: string;
        Xbewegung: number;
        Ybewegung: number;
        ChangeColor: boolean;
        type: string;

        constructor() {
            this.x = Math.floor(Math.random() * crc.canvas.width) +100;
            this.y = Math.floor(Math.random() * crc.canvas.height);
            this.color = "red";
            this.ChangeColor = false;
            this.type = "circle";
        }

        draw(): void {
            let kreis: Path2D = new Path2D();
            kreis.moveTo(this.x, this.y);
            kreis.arc(this.x,this.y,30,0,2* Math.PI);
            crc.fillStyle = this.color;
            crc.fill(kreis);
        }

        update(_x:number, _y:number, _c:string, _d:boolean): void {
            this.draw();
            this.move(_x, _y, _c, _d);
            
        }

        move(_x:number, _y:number, _c:string, _d:boolean): void {
            if(_d == true){ console.log("true"); this.x = clientX; this.y = clientY}
            this.color = _c;
            this.x += _x;
            this.y += _y;
            if (this.x <= 0 || this.x >= CanvasWidth) {
                this.x = 100;
            }
            if (this.y <= 0 || this.y >= CanvasHeight) {
                this.y = 0;
            }
        }
    }
}