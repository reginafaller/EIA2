var art;
(function (art) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", changeColor);
    document.addEventListener("mousemove", MoveObject);
    document.addEventListener("mouseup", SetPosition);
    function MoveObject(_event) {
        if (art.isMoving) {
            art.NeutralArray[0].update(0, 0, "red", true);
            art.clientX = _event.x;
            art.clientY = _event.y;
        }
    }
    function SetPosition(_event) {
        if (art.isMoving) {
            art.NeutralArray[0].update(0, 0, "red", true);
            art.clientX = _event.x;
            art.clientY = _event.y;
            art.CircleArray.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            art.isMoving = false;
            art.ObjektBearbeiten = false;
            update();
        }
    }
    function init() {
        art.canvas = document.getElementsByTagName("canvas")[0];
        art.canvas.width = art.CanvasWidth;
        art.canvas.height = art.CanvasHeight;
        art.crc = art.canvas.getContext("2d");
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
        let getImage = document.getElementById("find");
        getImage.addEventListener("click", findCanvasImage);
    }
    function clearArrays() {
        for (let i = 0; i <= art.CircleArray.length; i++) {
            art.CircleArray.pop();
        }
        for (let i = 0; i <= art.AnimatedColor.length; i++) {
            art.AnimatedColor.pop();
        }
        for (let i = 0; i <= art.AnimatedLeftRight.length; i++) {
            art.AnimatedLeftRight.pop();
        }
        for (let i = 0; i <= art.NeutralArray.length; i++) {
            art.NeutralArray.pop();
        }
        for (let i = 0; i <= art.NewPosition.length; i++) {
            art.NewPosition.pop();
        }
        art.crc.clearRect(0, 0, art.CanvasWidth, art.CanvasHeight);
    }
    function rebuildCanvas(_e) {
        let id = this.id;
        let xCoordinates = art.rebuildArray[id].x;
        let yCoordinates = art.rebuildArray[id].y;
        let type = art.rebuildArray[id].type;
        let array = art.rebuildArray[id].array;
        let OldbackgroundColor = art.rebuildArray[id].BackgroundColor;
        let CanvasW = art.rebuildArray[id].CanvasWidth;
        art.backgroundColor = OldbackgroundColor;
        clearArrays();
        if (CanvasW == "600") {
            mediumCanvas();
        }
        if (CanvasW == "400") {
            smallCanvas();
        }
        for (let i = 0; i < xCoordinates.length; i++) {
            let NewObject = {
                type: type[i],
                x: xCoordinates[i],
                y: yCoordinates[i],
                array: array[i],
                arrayPos: i.toString()
            };
            if (NewObject.type == "circle") {
                let Kreis = new art.kreis();
                Kreis.x = parseInt(NewObject.x);
                Kreis.y = parseInt(NewObject.y);
                if (NewObject.array == "CircleArray") {
                    art.CircleArray.push(Kreis);
                }
                if (NewObject.array == "AnimatedColor") {
                    art.AnimatedColor.push(Kreis);
                }
                if (NewObject.array == "AnimatedLeftRight") {
                    art.AnimatedLeftRight.push(Kreis);
                }
                if (NewObject.array == "NeutralArray") {
                    art.NeutralArray.push(Kreis);
                }
            }
            else {
                let Cube = new art.cube();
                Cube.x = parseInt(NewObject.x);
                Cube.y = parseInt(NewObject.y);
                if (NewObject.array == "CircleArray") {
                    art.CircleArray.push(Cube);
                }
                if (NewObject.array == "AnimatedColor") {
                    art.AnimatedColor.push(Cube);
                }
                if (NewObject.array == "AnimatedLeftRight") {
                    art.AnimatedLeftRight.push(Cube);
                }
                if (NewObject.array == "NeutralArray") {
                    art.NeutralArray.push(Cube);
                }
            }
        }
        document.getElementById("output").innerHTML = "";
        art.buttonExists = false;
    }
    art.rebuildCanvas = rebuildCanvas;
    function saveCanvasImage() {
        let bildName = prompt('wie soll ihr Bild heißen?');
        art.changeBackgroundColor = true;
        art.insert(bildName);
    }
    function findCanvasImage() {
        clearArrays();
        art.find();
    }
    function ObjekteBearbeiten() {
        art.ObjektBearbeiten = true;
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
        art.canvas.width = art.CanvasWidth;
        art.canvas.height = art.CanvasHeight;
        ChangeCanvasSize(art.CanvasWidth, art.CanvasHeight);
        init();
    }
    function mediumCanvas() {
        art.CanvasWidth = 600;
        art.CanvasHeight = 600;
        art.canvas.width = art.CanvasWidth;
        art.canvas.height = art.CanvasHeight;
        ChangeCanvasSize(art.CanvasWidth, art.CanvasHeight);
        init();
    }
    function ChangeCanvasSize(_w, _h) {
        art.canvas = document.getElementsByTagName("canvas")[0];
        art.canvas.width = _w;
        art.canvas.height = _h;
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
        art.changeBackgroundColor = true;
        farbauswahl();
    }
    function farbauswahl() {
        let redRec = new Path2D();
        redRec.rect(0, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = art.rot;
        art.crc.fill(redRec);
        let greenRec = new Path2D();
        greenRec.rect((art.CanvasWidth / 4) * 1, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = art.gruen;
        art.crc.fill(greenRec);
        let purpleRec = new Path2D();
        purpleRec.rect((art.CanvasWidth / 4) * 2, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = art.purple;
        art.crc.fill(purpleRec);
        let blueRec = new Path2D();
        blueRec.rect((art.CanvasWidth / 4) * 3, 0, (art.CanvasWidth / 4), art.CanvasHeight);
        art.crc.fillStyle = art.blue;
        art.crc.fill(blueRec);
    }
    function changeColor(_event) {
        art.clientX = _event.clientX;
        art.clientY = _event.clientY;
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
        if (art.clientX <= 100 && art.clientY >= 100 && art.clientY <= 200 && art.ObjektBearbeiten == true) {
            art.AnimatedColor.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            art.ObjektBearbeiten = false;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 100 && art.ObjektBearbeiten == true) {
            art.AnimatedLeftRight.push(art.NeutralArray[0]);
            art.NeutralArray.splice(0);
            art.ObjektBearbeiten = false;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 400 && art.clientY >= 300 && art.ObjektBearbeiten == true) {
            art.isMoving = true;
            update();
        }
        if (art.clientX <= 100 && art.clientY <= 300 && art.clientY >= 200 && art.ObjektBearbeiten == true) {
            art.NeutralArray.splice(0);
            art.ObjektBearbeiten = false;
            update();
        }
        if (art.changeBackgroundColor == true) {
            if (art.clientX <= (art.CanvasWidth / 4)) {
                art.backgroundColor = art.rot;
            }
            if (art.clientX <= (art.CanvasWidth / 4) * 2 && art.clientX >= (art.CanvasWidth / 4)) {
                art.backgroundColor = art.gruen;
            }
            if (art.clientX <= (art.CanvasWidth / 4) * 3 && art.clientX >= (art.CanvasWidth / 4) * 2) {
                art.backgroundColor = art.purple;
            }
            if (art.clientX >= (art.CanvasWidth / 4) * 3) {
                art.backgroundColor = art.blue;
            }
            art.changeBackgroundColor = false;
            init();
        }
    }
    function update() {
        if (art.changeBackgroundColor || art.ObjektBearbeiten || art.NeuePosition) {
            return;
        }
        if (art.SwitchColor == "green" && (art.farbZaehler % 2) == 0) {
            art.SwitchColor = "red";
        }
        if (art.SwitchColor == "red" && (art.farbZaehler % 2) != 0) {
            art.SwitchColor = "green";
        }
        window.setTimeout(update, 1000 / art.fps);
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
        for (let i = 0; i < art.NewPosition.length; i++) {
            art.NewPosition[i].update(0, 0, "red", false);
        }
        art.farbZaehler += 1;
    }
})(art || (art = {}));
//# sourceMappingURL=canvas.js.map