let karte1 = {
    zahl: "7",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte2 = {
    zahl: "8",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte3 = {
    zahl: "9",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte4 = {
    zahl: "10",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte5 = {
    zahl: "bube",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte6 = {
    zahl: "dame",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte7 = {
    zahl: "konig",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte8 = {
    zahl: "ass",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
};
let karte9 = {
    zahl: "7",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte10 = {
    zahl: "8",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte11 = {
    zahl: "9",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte12 = {
    zahl: "10",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte13 = {
    zahl: "bube",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte14 = {
    zahl: "dame",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte15 = {
    zahl: "konig",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte16 = {
    zahl: "ass",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
};
let karte17 = {
    zahl: "7",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte18 = {
    zahl: "8",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte19 = {
    zahl: "9",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte20 = {
    zahl: "10",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte21 = {
    zahl: "bube",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte22 = {
    zahl: "dame",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte23 = {
    zahl: "konig",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte24 = {
    zahl: "ass",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
};
let karte25 = {
    zahl: "7",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte26 = {
    zahl: "8",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte27 = {
    zahl: "9",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte28 = {
    zahl: "10",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte29 = {
    zahl: "bube",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte30 = {
    zahl: "dame",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte31 = {
    zahl: "konig",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
let karte32 = {
    zahl: "ass",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
};
document.addEventListener("DOMContentLoaded", HandkartenAnzahl);
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", handleKeydown);
let alleKarten = [karte1, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte2, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte3, karte30, karte31, karte32, karte4, karte5, karte6, karte7, karte8, karte9];
let hand = [];
let ablage = [];
function HandkartenAnzahl() {
    let base = 10;
    let anzahlHandkarten = prompt('wie viele Handkarten mochten sie?');
    let Anzahl = parseInt(anzahlHandkarten, base);
    KartenGenerieren(Anzahl);
}
function KartenGenerieren(_Anzahl) {
    for (let i = 0; i <= _Anzahl - 1; i++) {
        let random = Math.floor(Math.random() * alleKarten.length);
        ErstelleHandKarte(alleKarten[random], i);
        hand.push(alleKarten[random]);
        alleKarten.splice(random, 1);
    }
    let StartKarte = Math.floor(Math.random() * alleKarten.length);
    ErstelleAblageKarte(alleKarten[StartKarte]);
    ablage.push(alleKarten[StartKarte]);
    alleKarten.splice(StartKarte, 1);
    ErstelleZiehStapel();
}
function ErstelleHandKarte(_c, _i) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<fieldset class="test" id="${_i}">
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</fieldset>`;
    document.getElementById("handkarten").appendChild(prodCard);
}
function ErstelleAblageKarte(_c) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<div>
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</div>`;
    document.getElementById("ablage").appendChild(prodCard);
}
function ErstelleZiehStapel() {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<fieldset class="ziehen">
	</fieldset>`;
    document.getElementById("ziehstapel").appendChild(prodCard);
}
function init() {
    for (let i = 0; i < hand.length; i++) {
        let fieldset = document.getElementsByClassName("test")[i];
        fieldset.addEventListener("click", clickHandler);
    }
    let ziehStapel = document.getElementsByClassName("ziehen")[0];
    ziehStapel.addEventListener("click", zieheKarte);
}
function zieheKarte(_event) {
    if (alleKarten.length > 0) {
        let random = Math.floor(Math.random() * alleKarten.length);
        hand.push(alleKarten[random]);
        alleKarten.splice(random, 1);
        document.getElementById("handkarten").innerHTML = '';
        for (let i = 0; i < hand.length; i++) {
            ErstelleHandKartenNeu(hand[i], i);
        }
        init();
    }
    else {
        console.log('no more cards :(');
    }
}
function clickHandler(_event) {
    let clickedCard = _event.target;
    let cardId = clickedCard.id;
    let cardIdNumber = Number(cardId);
    let karteInAblage = hand[cardIdNumber];
    ablage.push(hand[cardIdNumber]);
    hand.splice(cardIdNumber, 1);
    ErstelleAblageKarte(karteInAblage);
    document.getElementById("handkarten").innerHTML = '';
    for (let i = 0; i < hand.length; i++) {
        ErstelleHandKartenNeu(hand[i], i);
    }
    init();
}
function ErstelleHandKartenNeu(_c, _i) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<fieldset class="test" id="${_i}">
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</fieldset>`;
    document.getElementById("handkarten").appendChild(prodCard);
}
function handleKeydown(_event) {
    if (_event.keyCode == 32) {
        if (alleKarten.length > 0) {
            let random = Math.floor(Math.random() * alleKarten.length);
            hand.push(alleKarten[random]);
            alleKarten.splice(random, 1);
            document.getElementById("handkarten").innerHTML = '';
            for (let i = 0; i < hand.length; i++) {
                ErstelleHandKartenNeu(hand[i], i);
            }
            init();
        }
        else {
            console.log('no more cards :(');
        }
    }
}
function sortSign(_k) {
    document.getElementById("handkarten").innerHTML = '';
    var sortedArray = [{ type: karte1, zeichen: 1 },
        { type: karte2, zeichen: 2 },
        { type: karte3, zeichen: 3 },
        { type: karte4, zeichen: 4 },
        { type: karte5, zeichen: 5 },
        { type: karte6, zeichen: 6 },
        { type: karte7, zeichen: 7 },
        { type: karte8, zeichen: 8 },
        { type: karte9, zeichen: 9 },];
    sortedArray.sort(function (a, b) { return a.zeichen - b.zeichen; });
    console.log(sortedArray);
}
//# sourceMappingURL=test.js.map