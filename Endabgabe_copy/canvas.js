var fisch;
(function (fisch) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", lol);
    let serverAddress = "https://fallerr.herokuapp.com/";
    let canvas;
    let fishArray = [];
    let nemo;
    let bubbleArray = [];
    let fps = 30;
    let imageData;
    let dead = false;
    function lol(_event) {
        if (_event.keyCode == 38) {
            nemo.update(nemo.x, -20, 1);
            _event.preventDefault();
        }
        if (_event.keyCode == 40) {
            nemo.update(nemo.x, 20, 1);
            _event.preventDefault();
        }
    }
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        fisch.crc = canvas.getContext("2d");
        fisch.crc.rect(0, 0, 1200, 700);
        fisch.crc.fillStyle = "rgba(0, 0, 255, 0.25)";
        fisch.crc.fill();
        Pflanze(100, 700);
        Pflanze(150, 750);
        Pflanze(125, 800);
        Koralle(500, 700);
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = 695;
            let z = "black";
            if (i <= 25) {
                z = "grey";
            }
            kies(x, y, z);
        }
        imageData = fisch.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let w = Math.random() * 3;
            let randomColor;
            if (w <= 1) {
                randomColor = "blue";
            }
            if (w > 1 && w <= 2) {
                randomColor = "purple";
            }
            if (w > 2) {
                randomColor = "red";
            }
            let fishSmall = new fisch.FischS(randomColor, 1);
            fishArray.push(fishSmall);
        }
        nemo = new fisch.Nemo();
        for (let i = 0; i < 5; i++) {
            let crabColor = "red";
            let crab = new fisch.Krabbe(crabColor);
            fishArray.push(crab);
        }
        for (let i = 0; i < 20; i++) {
            let blub = new fisch.Bubble();
            bubbleArray.push(blub);
        }
        update();
    }
    function update() {
        if (dead) {
            return;
        }
        window.setTimeout(update, 1000 / fps);
        fisch.crc.clearRect(0, 0, canvas.width, canvas.height);
        fisch.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update(nemo.x, nemo.y, i);
            eat(fishArray[i], i);
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        nemo.update(nemo.x, 0, 1);
        if (nemo.x >= 1200) {
            nemo.update(0, 0, 1);
        }
    }
    function eat(fish, _i) {
        if (fish.x > nemo.x - 15 && fish.x < nemo.x + 15 && fish.y > nemo.y - 15 && fish.y < nemo.y + 15) {
            if (nemo.a >= fish.a) {
                updateScore(50);
                fishArray.splice(_i, 1);
                console.log(nemo.a);
                let w = Math.random() * 3;
                let randomColor;
                if (w <= 1) {
                    randomColor = "blue";
                }
                if (w > 1 && w <= 2) {
                    randomColor = "purple";
                }
                if (w > 2) {
                    randomColor = "red";
                }
                if (nemo.a >= 3) {
                    fishArray.splice(0, 5);
                    for (let i = 0; i <= 5; i++) {
                        let fishSmall = new fisch.FischS(randomColor, 2);
                        fishArray.push(fishSmall);
                    }
                }
                let fishSmall = new fisch.FischS(randomColor, 1);
                fishArray.push(fishSmall);
            }
            if (nemo.a < fish.a) {
                dead = true;
                let playerName = prompt('name eingeben');
                insert(playerName);
                find();
            }
        }
    }
    let score = 0;
    function updateScore(_points) {
        score += _points;
        document.getElementById("points").innerHTML = score.toString();
        if (nemo.a < 2 && score >= 200) {
            nemo.update(0, 0, 2);
        }
        if (nemo.a < 3 && score >= 500) {
            nemo.update(0, 0, 1.3);
        }
    }
    function kies(_x, _y, _z) {
        let stein = new Path2D();
        stein.moveTo(_x, _y);
        stein.arc(_x, _y, 10, 0, 10);
        fisch.crc.fillStyle = _z;
        fisch.crc.fill(stein);
        fisch.crc.stroke(stein);
    }
    function Koralle(_x, _y) {
        let koralle = new Path2D();
        koralle.moveTo(_x, _y);
        koralle.lineTo(_x + 40, _y);
        koralle.quadraticCurveTo(_x - 10, _y - 50, _x + 40, _y - 100);
        koralle.bezierCurveTo(_x + 100, _y - 135, _x + 95, _y - 140, _x + 40, _y - 120);
        koralle.bezierCurveTo(_x + 100, _y - 235, _x + 95, _y - 240, _x + 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 235, _x - 95, _y - 240, _x - 20, _y - 120);
        koralle.bezierCurveTo(_x - 100, _y - 115, _x - 95, _y - 120, _x - 10, _y - 100);
        koralle.quadraticCurveTo(_x - 30, _y - 50, _x, _y);
        fisch.crc.fillStyle = "rgb(172, 64, 52)";
        fisch.crc.fill(koralle);
        fisch.crc.stroke(koralle);
    }
    function Pflanze(_x, _y) {
        let pflanze = new Path2D();
        pflanze.moveTo(_x, _y);
        pflanze.quadraticCurveTo(_x + 60, _y - 100, _x + 10, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        pflanze.moveTo(_x, _y);
        pflanze.lineTo(_x - 40, _y);
        pflanze.quadraticCurveTo(_x + 30, _y - 100, _x - 20, _y - 200);
        pflanze.quadraticCurveTo(_x - 50, _y - 300, _x, _y - 400);
        fisch.crc.fillStyle = "green";
        fisch.crc.fill(pflanze);
        fisch.crc.stroke(pflanze);
    }
    function insert(_name) {
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&score=" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerListe = JSON.parse(xhr.response);
            for (let i = 0; i <= SpielerListe.length; i++) {
                let SpielerName = SpielerListe[i].name;
                let SpielerScore = SpielerListe[i].score;
                document.getElementById("output").innerHTML = "Name: " + SpielerName + " Score: " + SpielerScore;
            }
        }
    }
})(fisch || (fisch = {}));
//# sourceMappingURL=canvas.js.map