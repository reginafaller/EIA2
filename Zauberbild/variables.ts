namespace art{
    export let serverAddress: string = "https://fallerr.herokuapp.com/";    

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let CircleArray: kreis[] = [];
    export let NeutralArray: kreis[] = [];
    export let SwitchColor: string = "green";
    export let AnimatedLeftRight: kreis[] = [];
    export let NewPosition: kreis[] = [];
    export let AnimatedColor: kreis[] = [];
    export let fps: number = 30;
    export let farbZaehler: number = 0;
    export let isMoving: boolean = false;


    export let rot: string = "rgb(255, 0, 0)";
    export let gruen: string = "rgb(0, 255, 0)";
    export let purple: string = "rgb(150, 0, 150)";
    export let blue: string = "rgb(0, 0, 255)";
    export let backgroundColor: string = blue;
    export let changeBackgroundColor: boolean = false;
    export let ObjektBearbeiten: boolean = false;
    export let NeuePosition: boolean = false;
    export let clientX: number = 0;
    export let clientY: number = 0;
    export let CanvasWidth: number = 600;
    export let CanvasHeight: number = 600;

    
}