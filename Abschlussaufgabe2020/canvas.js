var art;
(function (art) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", lol);
    document.addEventListener("mousedown", changeColor);
    let canvas;
    let CircleArray = [];
    let MoveArray = [];
    let CubeArray = [];
    let fps = 30;
    let i = 0;
    function lol(_event) {
        if (_event.keyCode == 38) {
            i += 1;
            if (i >= CircleArray.length) {
                i = 0;
            }
            MoveArray.push(CircleArray[i]);
            CircleArray.splice(i, 1);
            MoveObject(MoveArray[0].id);
            _event.preventDefault();
        }
    }
    function MoveObject(_id) {
        //boolean erst loschen wenn Position gewahlt wurde?
        MoveArray[0].update("blue", 0, 0, 1);
        CircleArray.push(MoveArray[0]);
        MoveArray.pop();
    }
    let rot = "rgb(255, 0, 0)";
    let gruen = "rgb(0, 255, 0)";
    let purple = "rgb(150, 0, 150)";
    let blue = "rgb(0, 0, 255)";
    let backgroundColor = blue;
    let changeBackgroundColor = false;
    let CircleCount = 0;
    let CanvasWidth = 800;
    let CanvasHeight = 600;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        art.crc = canvas.getContext("2d");
        art.crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        art.crc.rect(0, 0, CanvasWidth, CanvasHeight);
        art.crc.fillStyle = backgroundColor;
        art.crc.fill();
        addEventListener();
        update();
    }
    function addEventListener() {
        let button = document.getElementById("backgroundColor");
        button.addEventListener("click", ChangeBackground);
        let addCircle = document.getElementById("kreis");
        addCircle.addEventListener("click", addNewCircle);
        let addCube = document.getElementById("cube");
        addCube.addEventListener("click", addNewCube);
        let sCanvas = document.getElementById("small");
        sCanvas.addEventListener("click", smallCanvas);
        let mCanvas = document.getElementById("medium");
        mCanvas.addEventListener("click", mediumCanvas);
        let lCanvas = document.getElementById("big");
        lCanvas.addEventListener("click", bigCanvas);
    }
    function smallCanvas() {
        CanvasWidth = 400;
        CanvasHeight = 400;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }
    function mediumCanvas() {
        CanvasWidth = 600;
        CanvasHeight = 600;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }
    function bigCanvas() {
        CanvasWidth = 800;
        CanvasHeight = 600;
        ChangeCanvasSize(CanvasWidth, CanvasHeight);
        init();
    }
    function ChangeCanvasSize(_w, _h) {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = _w;
        canvas.height = _h;
    }
    function addNewCircle() {
        let Kreis = new art.kreis();
        CircleArray.push(Kreis);
        Kreis.update("red", 0.5, 0.3, CircleCount);
        CircleCount += 1;
    }
    function addNewCube() {
        let Cube = new art.cube();
        CubeArray.push(Cube);
        Cube.update();
    }
    function ChangeBackground() {
        changeBackgroundColor = true;
        farbauswahl();
    }
    function farbauswahl() {
        let redRec = new Path2D();
        redRec.rect(0, 0, (CanvasWidth / 4), CanvasHeight);
        art.crc.fillStyle = rot;
        art.crc.fill(redRec);
        let greenRec = new Path2D();
        greenRec.rect((CanvasWidth / 4) * 1, 0, (CanvasWidth / 4), CanvasHeight);
        art.crc.fillStyle = gruen;
        art.crc.fill(greenRec);
        let purpleRec = new Path2D();
        purpleRec.rect((CanvasWidth / 4) * 2, 0, (CanvasWidth / 4), CanvasHeight);
        art.crc.fillStyle = purple;
        art.crc.fill(purpleRec);
        let blueRec = new Path2D();
        blueRec.rect((CanvasWidth / 4) * 3, 0, (CanvasWidth / 4), CanvasHeight);
        art.crc.fillStyle = blue;
        art.crc.fill(blueRec);
    }
    function changeColor(_event) {
        if (changeBackgroundColor == true) {
            let x = _event.clientX;
            console.log(x);
            if (x <= 200) {
                backgroundColor = rot;
            }
            if (x <= 400 && x >= 200) {
                backgroundColor = gruen;
            }
            if (x <= 600 && x >= 400) {
                backgroundColor = purple;
            }
            if (x >= 600) {
                backgroundColor = blue;
            }
            changeBackgroundColor = false;
            init();
        }
    }
    function update() {
        if (changeBackgroundColor) {
            return;
        }
        window.setTimeout(update, 1000 / fps);
        art.crc.clearRect(0, 0, CanvasWidth, CanvasHeight);
        art.crc.rect(0, 0, CanvasWidth, CanvasHeight);
        art.crc.fillStyle = backgroundColor;
        art.crc.fill();
        for (let i = 0; i < MoveArray.length; i++) {
            MoveArray[i].update("black", 0, 0, i);
        }
        for (let i = 0; i < CircleArray.length; i++) {
            CircleArray[i].update("red", 0.5, 0.3, i);
        }
        for (let i = 0; i < CubeArray.length; i++) {
            CubeArray[i].update();
        }
    }
})(art || (art = {}));
//# sourceMappingURL=canvas.js.map