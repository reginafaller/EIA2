var art;
(function (art) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", changeColor);
    document.addEventListener("mousemove", MoveObject);
    document.addEventListener("mouseup", SetPosition);
    art.serverAddress = "https://fallerr.herokuapp.com/";
    let canvas;
    art.CircleArray = [];
    art.NeutralArray = [];
    art.SwitchColor = "green";
    art.AnimatedLeftRight = [];
    let NewPosition = [];
    art.AnimatedColor = [];
    let fps = 30;
    let farbZaehler = 0;
    let isMoving = false;
    let rot = "rgb(255, 0, 0)";
    let gruen = "rgb(0, 255, 0)";
    let purple = "rgb(150, 0, 150)";
    let blue = "rgb(0, 0, 255)";
    art.backgroundColor = blue;
    let changeBackgroundColor = false;
    let ObjektBearbeiten = false;
    let NeuePosition = false;
    art.clientX = 0;
    art.clientY = 0;
    art.CanvasWidth = 600;
    art.CanvasHeight = 600;
    function MoveObject(_event) {
        if (isMoving) {
            art.NeutralArray[0].update(0, 0, "red", true);
            art.clientX = _event.x;
            art.clientY = _event.y;
        }
    }
    function SetPosition(_event) {
        if (isMoving) {
            art.NeutralArray[0].update(0, 0, "red", true);
            art.clientX = _event.x;
            art.clientY = _event.y;
            art.CircleArray.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            isMoving = false;
            ObjektBearbeiten = false;
            update();
        }
    }
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = art.CanvasWidth;
        canvas.height = art.CanvasHeight;
        art.crc = canvas.getContext("2d");
        art.crc.clearRect(0, 0, art.CanvasWidth, art.CanvasHeight);
        art.crc.rect(0, 0, art.CanvasWidth, art.CanvasHeight);
        art.crc.fillStyle = art.backgroundColor;
        art.crc.fill();
        addEventListener();
        update();
    }
    function addEventListener() {
        let button = document.getElementById("backgroundColor");
        button.addEventListener("click", ChangeBackground);
        let addCircle = document.getElementById("kreis");
        addCircle.addEventListener("click", addNewCircle);
        let sCanvas = document.getElementById("small");
        sCanvas.addEventListener("click", smallCanvas);
        let mCanvas = document.getElementById("medium");
        mCanvas.addEventListener("click", mediumCanvas);
        let addCube = document.getElementById("cube");
        addCube.addEventListener("click", addNewCube);
        let saveImage = document.getElementById("save");
        saveImage.addEventListener("click", saveCanvasImage);
        let restoreC = document.getElementById("restore");
        restoreC.addEventListener("click", restoreCanvas);
    }
    function saveCanvasImage() {
        let bildName = prompt('wie soll ihr Bild heißen?');
        canvas = document.getElementsByTagName("canvas")[0];
        art.crc = canvas.getContext("2d");
        art.crc.save();
        changeBackgroundColor = true;
        art.crc.clearRect(0, 0, art.CanvasWidth, art.CanvasHeight);
        art.insert(bildName, art.crc);
    }
    function restoreCanvas() {
        art.crc.restore();
        changeBackgroundColor = false;
    }
    function ObjekteBearbeiten() {
        ObjektBearbeiten = true;
        let bewegung = new Image();
        bewegung.src = "Assets/move.png";
        art.crc.drawImage(bewegung, 0, 0, 100, 100);
        let farbe = new Image();
        farbe.src = "Assets/farbwechsel.png";
        art.crc.drawImage(farbe, 0, 100, 100, 100);
        let deleteO = new Image();
        deleteO.src = "Assets/entfernen.png";
        art.crc.drawImage(deleteO, 0, 200, 100, 100);
        let newPosition = new Image();
        newPosition.src = "Assets/NeuePosition.png";
        art.crc.drawImage(newPosition, 0, 300, 100, 100);
    }
    function smallCanvas() {
        art.CanvasWidth = 400;
        art.CanvasHeight = 400;
        canvas.width = art.CanvasWidth;
        canvas.height = art.CanvasHeight;
        ChangeCanvasSize(art.CanvasWidth, art.CanvasHeight);
        init();
    }
    function mediumCanvas() {
        art.CanvasWidth = 600;
        art.CanvasHeight = 600;
        canvas.width = art.CanvasWidth;
        canvas.height = art.CanvasHeight;
        ChangeCanvasSize(art.CanvasWidth, art.CanvasHeight);
        init();
    }
    function ChangeCanvasSize(_w, _h) {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = _w;
        canvas.height = _h;
    }
    function addNewCircle() {
        let Kreis = new art.kreis();
        art.CircleArray.push(Kreis);
        Kreis.update(0, 0, "red", false);
    }
    function addNewCube() {
        let Cube = new art.cube();
        art.CircleArray.push(Cube);
        Cube.update(0, 0, "red", false);
    }
    function ChangeBackground() {
        changeBackgroundColor = true;
        farbauswahl();
    }
    function farbauswahl() {
        let redRec = new Path2D();
        redRec.rect(0, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = rot;
        art.crc.fill(redRec);
        let greenRec = new Path2D();
        greenRec.rect((art.CanvasWidth / 4) * 1, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = gruen;
        art.crc.fill(greenRec);
        let purpleRec = new Path2D();
        purpleRec.rect((art.CanvasWidth / 4) * 2, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = purple;
        art.crc.fill(purpleRec);
        let blueRec = new Path2D();
        blueRec.rect((art.CanvasWidth / 4) * 3, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = blue;
        art.crc.fill(blueRec);
    }
    function changeColor(_event) {
        art.clientX = _event.clientX;
        art.clientY = _event.clientY;
        //Durch alle automatisch platzierten Objekte
        for (let i = 0; i < art.CircleArray.length; i++) {
            let currentX = art.CircleArray[i].x;
            let currentY = art.CircleArray[i].y;
            if (art.clientX < currentX + 40 && art.clientX > currentX - 40 && art.clientY < currentY + 40 && art.clientY > currentY - 40) {
                if (art.NeutralArray.length > 0) {
                    art.CircleArray.push(art.NeutralArray[0]);
                    art.NeutralArray.splice(0, 1);
                }
                art.NeutralArray.push(art.CircleArray[i]);
                art.CircleArray.splice(i, 1);
                ObjekteBearbeiten();
            }
        }
        //Durch alle mit Bewegung
        for (let i = 0; i < art.AnimatedLeftRight.length; i++) {
            let currentX = art.AnimatedLeftRight[i].x;
            let currentY = art.AnimatedLeftRight[i].y;
            if (art.clientX < currentX + 20 && art.clientX > currentX - 20 && art.clientY < currentY + 20 && art.clientY > currentY - 20) {
                if (art.NeutralArray.length > 0) {
                    art.CircleArray.push(art.NeutralArray[0]);
                    art.NeutralArray.splice(0, 1);
                }
                art.NeutralArray.push(art.AnimatedLeftRight[i]);
                art.AnimatedLeftRight.splice(i, 1);
                ObjekteBearbeiten();
            }
        }
        for (let i = 0; i < art.AnimatedColor.length; i++) {
            let currentX = art.AnimatedColor[i].x;
            let currentY = art.AnimatedColor[i].y;
            if (art.clientX < currentX + 20 && art.clientX > currentX - 20 && art.clientY < currentY + 20 && art.clientY > currentY - 20) {
                if (art.NeutralArray.length > 0) {
                    art.CircleArray.push(art.NeutralArray[0]);
                    art.NeutralArray.splice(0, 1);
                }
                art.NeutralArray.push(art.AnimatedColor[i]);
                art.AnimatedColor.splice(i, 1);
                ObjekteBearbeiten();
            }
        }
        if (art.clientX <= 100 && art.clientY >= 100 && art.clientY <= 200 && ObjektBearbeiten == true) {
            console.log("Color");
            art.AnimatedColor.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 100 && ObjektBearbeiten == true) {
            art.AnimatedLeftRight.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 400 && art.clientY >= 300 && ObjektBearbeiten == true) {
            isMoving = true;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 300 && art.clientY >= 200 && ObjektBearbeiten == true) {
            art.NeutralArray.splice(0);
            ObjektBearbeiten = false;
            update();
        }
        if (changeBackgroundColor == true) {
            if (art.clientX <= (art.CanvasWidth / 4)) {
                art.backgroundColor = rot;
            }
            if (art.clientX <= (art.CanvasWidth / 4) * 2 && art.clientX >= (art.CanvasWidth / 4)) {
                art.backgroundColor = gruen;
            }
            if (art.clientX <= (art.CanvasWidth / 4) * 3 && art.clientX >= (art.CanvasWidth / 4) * 2) {
                art.backgroundColor = purple;
            }
            if (art.clientX >= (art.CanvasWidth / 4) * 3) {
                art.backgroundColor = blue;
            }
            changeBackgroundColor = false;
            init();
        }
    }
    function update() {
        if (changeBackgroundColor || ObjektBearbeiten || NeuePosition) {
            return;
        }
        if (art.SwitchColor == "green" && (farbZaehler % 2) == 0) {
            art.SwitchColor = "red";
        }
        if (art.SwitchColor == "red" && (farbZaehler % 2) != 0) {
            art.SwitchColor = "green";
        }
        //console.log(farbZaehler);
        window.setTimeout(update, 1000 / fps);
        art.crc.clearRect(0, 0, art.CanvasWidth, art.CanvasHeight);
        art.crc.rect(0, 0, art.CanvasWidth, art.CanvasHeight);
        art.crc.fillStyle = art.backgroundColor;
        art.crc.fill();
        for (let i = 0; i < art.CircleArray.length; i++) {
            art.CircleArray[i].update(0, 0, "red", false);
        }
        for (let i = 0; i < art.AnimatedLeftRight.length; i++) {
            art.AnimatedLeftRight[i].update(2, 0, "red", false);
        }
        for (let i = 0; i < art.AnimatedColor.length; i++) {
            art.AnimatedColor[i].update(0, 0, art.SwitchColor, false);
        }
        for (let i = 0; i < NewPosition.length; i++) {
            NewPosition[i].update(0, 0, "red", false);
        }
        farbZaehler += 1;
    }
})(art || (art = {}));
//# sourceMappingURL=canvas.js.map