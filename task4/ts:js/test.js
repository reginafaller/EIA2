let karte1 = {
    zahl: "7",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte2 = {
    zahl: "8",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte3 = {
    zahl: "9",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte4 = {
    zahl: "10",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte5 = {
    zahl: "bube",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte6 = {
    zahl: "dame",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte7 = {
    zahl: "konig",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte8 = {
    zahl: "ass",
    zeichen: "herz",
    farbe: "rot",
    pic: "../Bilder/herz.png",
    value: "1",
};
let karte9 = {
    zahl: "7",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte10 = {
    zahl: "8",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte11 = {
    zahl: "9",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte12 = {
    zahl: "10",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte13 = {
    zahl: "bube",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte14 = {
    zahl: "dame",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte15 = {
    zahl: "konig",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte16 = {
    zahl: "ass",
    zeichen: "karo",
    farbe: "rot",
    pic: "../Bilder/karo.png",
    value: "2",
};
let karte17 = {
    zahl: "7",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte18 = {
    zahl: "8",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte19 = {
    zahl: "9",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte20 = {
    zahl: "10",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte21 = {
    zahl: "bube",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte22 = {
    zahl: "dame",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte23 = {
    zahl: "konig",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte24 = {
    zahl: "ass",
    zeichen: "schaufel",
    farbe: "schwarz",
    pic: "../Bilder/schaufel.png",
    value: "3",
};
let karte25 = {
    zahl: "7",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte26 = {
    zahl: "8",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte27 = {
    zahl: "9",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte28 = {
    zahl: "10",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte29 = {
    zahl: "bube",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte30 = {
    zahl: "dame",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte31 = {
    zahl: "konig",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
let karte32 = {
    zahl: "ass",
    zeichen: "kreuz",
    farbe: "schwarz",
    pic: "../Bilder/kreuz.png",
    value: "4",
};
document.addEventListener("DOMContentLoaded", handkartenAnzahl);
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", handleKeydown);
let alleKarten = [karte1, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte2, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte3, karte30, karte31, karte32, karte4, karte5, karte6, karte7, karte8, karte9];
let hand = [];
let ablage = [];
function sortCard() {
    hand.sort(sortiereKarten);
    console.log(hand);
    document.getElementById("handkarten").innerHTML = '';
    for (let i = 0; i < hand.length; i++) {
        erstelleHandKartenNeu(hand[i], i);
    }
    init();
}
function sortiereKarten(_a, _b) {
    if (_a.value < _b.value) {
        return -1;
    }
    if (_a.value > _b.value) {
        return 1;
    }
    return 0;
}
function handkartenAnzahl() {
    let base = 10;
    let anzahlHandkarten = prompt('wie viele Handkarten mochten sie?');
    let Anzahl = parseInt(anzahlHandkarten, base);
    kartenGenerieren(Anzahl);
}
function kartenGenerieren(_Anzahl) {
    for (let i = 0; i <= _Anzahl - 1; i++) {
        let random = Math.floor(Math.random() * alleKarten.length);
        erstelleHandKarte(alleKarten[random], i);
        hand.push(alleKarten[random]);
        alleKarten.splice(random, 1);
    }
    let StartKarte = Math.floor(Math.random() * alleKarten.length);
    erstelleAblageKarte(alleKarten[StartKarte]);
    ablage.push(alleKarten[StartKarte]);
    alleKarten.splice(StartKarte, 1);
    erstelleZiehStapel();
}
function erstelleHandKarte(_c, _i) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<fieldset class="test" id="${_i}">
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</fieldset>`;
    document.getElementById("handkarten").appendChild(prodCard);
}
function erstelleAblageKarte(_c) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<div>
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</div>`;
    document.getElementById("ablage").appendChild(prodCard);
}
function erstelleZiehStapel() {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<fieldset class="ziehen">
	</fieldset>`;
    document.getElementById("ziehstapel").appendChild(prodCard);
}
function init() {
    document.getElementById('button').addEventListener("click", sortCard);
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
            erstelleHandKartenNeu(hand[i], i);
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
    erstelleAblageKarte(karteInAblage);
    document.getElementById("handkarten").innerHTML = '';
    for (let i = 0; i < hand.length; i++) {
        erstelleHandKartenNeu(hand[i], i);
    }
    init();
}
function erstelleHandKartenNeu(_c, _i) {
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
                erstelleHandKartenNeu(hand[i], i);
            }
            init();
        }
        else {
            console.log('no more cards :(');
        }
    }
}
//# sourceMappingURL=test.js.map