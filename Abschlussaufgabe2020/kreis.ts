namespace art {
    export class kreis{
        x: number;
        y: number;
        color: string;
        id: number

        constructor() {
            this.x = Math.floor(Math.random() * crc.canvas.width);
            this.y = Math.floor(Math.random() * crc.canvas.height);
        }

        draw(_c:string): void {
            let kreis: Path2D = new Path2D();
            kreis.moveTo(this.x, this.y);
            kreis.arc(this.x,this.y,30,0,2* Math.PI);
            crc.fillStyle = _c;
            crc.fill(kreis);
            crc.stroke(kreis);
        }

        update(_c:string, _x:number, _y:number, _id:number): void {
            this.draw(_c);
            this.id = _id;
            this.move(_x, _y);
        }

        move(_dx:number, _dy:number): void {
            if (this.x <= 0 || this.x >= 800 || this.y <= 0 || this.y >= 600) {
                this.x = Math.floor(Math.random() * crc.canvas.height);
                this.y = Math.floor(Math.random() * crc.canvas.height);
            }
            this.x += _dx;
            this.y += _dy;
        }
    }
}