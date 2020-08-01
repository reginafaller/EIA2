var art;
(function (art) {
    art.serverAddress = "https://fallerr.herokuapp.com/";
    art.CircleArray = [];
    art.NeutralArray = [];
    art.SwitchColor = "green";
    art.AnimatedLeftRight = [];
    art.NewPosition = [];
    art.AnimatedColor = [];
    art.fps = 30;
    art.farbZaehler = 0;
    art.isMoving = false;
    art.rot = "rgb(255, 0, 0)";
    art.gruen = "rgb(0, 255, 0)";
    art.purple = "rgb(150, 0, 150)";
    art.blue = "rgb(0, 0, 255)";
    art.backgroundColor = art.blue;
    art.changeBackgroundColor = false;
    art.ObjektBearbeiten = false;
    art.NeuePosition = false;
    art.clientX = 0;
    art.clientY = 0;
    art.CanvasWidth = 600;
    art.CanvasHeight = 600;
    console.log("hi");
})(art || (art = {}));
//# sourceMappingURL=variables.js.map