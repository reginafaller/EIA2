let karte1 = {
    zahl: "7",
    zeichen: "herz",
    farbe: "rot",
};
let karte2 = {
    zahl: "8",
    zeichen: "herz",
    farbe: "rot",
};
let karte3 = {
    zahl: "9",
    zeichen: "herz",
    farbe: "rot",
};
let karte4 = {
    zahl: "10",
    zeichen: "herz",
    farbe: "rot",
};
let karte5 = {
    zahl: "bube",
    zeichen: "herz",
    farbe: "rot",
};
let karte6 = {
    zahl: "dame",
    zeichen: "herz",
    farbe: "rot",
};
let karte7 = {
    zahl: "konig",
    zeichen: "herz",
    farbe: "rot",
};
let karte8 = {
    zahl: "ass",
    zeichen: "herz",
    farbe: "rot",
};
let karte9 = {
    zahl: "7",
    zeichen: "karo",
    farbe: "rot",
};
let karte10 = {
    zahl: "8",
    zeichen: "karo",
    farbe: "rot",
};
let karte11 = {
    zahl: "9",
    zeichen: "karo",
    farbe: "rot",
};
let karte12 = {
    zahl: "10",
    zeichen: "karo",
    farbe: "rot",
};
let karte13 = {
    zahl: "bube",
    zeichen: "karo",
    farbe: "rot",
};
let karte14 = {
    zahl: "dame",
    zeichen: "karo",
    farbe: "rot",
};
let karte15 = {
    zahl: "konig",
    zeichen: "karo",
    farbe: "rot",
};
let karte16 = {
    zahl: "ass",
    zeichen: "karo",
    farbe: "rot",
};
let karte17 = {
    zahl: "7",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte18 = {
    zahl: "8",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte19 = {
    zahl: "9",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte20 = {
    zahl: "10",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte21 = {
    zahl: "bube",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte22 = {
    zahl: "dame",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte23 = {
    zahl: "konig",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte24 = {
    zahl: "ass",
    zeichen: "schaufel",
    farbe: "schwarz",
};
let karte25 = {
    zahl: "7",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte26 = {
    zahl: "8",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte27 = {
    zahl: "9",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte28 = {
    zahl: "10",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte29 = {
    zahl: "bube",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte30 = {
    zahl: "dame",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte31 = {
    zahl: "konig",
    zeichen: "kreuz",
    farbe: "schwarz",
};
let karte32 = {
    zahl: "ass",
    zeichen: "kreuz",
    farbe: "schwarz",
};
document.addEventListener("DOMContentLoaded", HandkartenAnzahl);
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
        ErstelleHandKarte(alleKarten[random]);
        hand.push(alleKarten[random]);
        alleKarten.splice(random, 1);
    }
    let StartKarte = Math.floor(Math.random() * alleKarten.length);
    ErstelleAblageKarte(alleKarten[StartKarte]);
    hand.push(alleKarten[StartKarte]);
    alleKarten.splice(StartKarte, 1);
    for (let i = 0; i <= alleKarten.length - 1; i++) {
        let AblageKarten = Math.floor(Math.random() * alleKarten.length);
        ErstelleZiehStapel(alleKarten[AblageKarten]);
    }
}
function ErstelleHandKarte(_c) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
    document.getElementById("handkarten").appendChild(prodCard);
}
function ErstelleAblageKarte(_c) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
    document.getElementById("ablage").appendChild(prodCard);
}
function ErstelleZiehStapel(_c) {
    let prodCard = document.createElement("div");
    prodCard.innerHTML =
        `<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
    document.getElementById("ziehstapel").appendChild(prodCard);
}
//# sourceMappingURL=test.js.map