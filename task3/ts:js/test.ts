interface Karte {
	zahl: string;
	zeichen: string;
	farbe: string;
}

let karte1: Karte = {
	zahl: "7",
	zeichen: "herz",
	farbe: "rot",
}

let karte2: Karte = {
	zahl: "8",
	zeichen: "herz",
	farbe: "rot",
}

let karte3: Karte = {
	zahl: "9",
	zeichen: "herz",
	farbe: "rot",
}

let karte4: Karte = {
	zahl: "10",
	zeichen: "herz",
	farbe: "rot",
}
let karte5: Karte = {
	zahl: "bube",
	zeichen: "herz",
	farbe: "rot",
}
let karte6: Karte = {
	zahl: "dame",
	zeichen: "herz",
	farbe: "rot",
}
let karte7: Karte = {
	zahl: "konig",
	zeichen: "herz",
	farbe: "rot",
}
let karte8: Karte = {
	zahl: "ass",
	zeichen: "herz",
	farbe: "rot",
}
let karte9: Karte = {
	zahl: "7",
	zeichen: "karo",
	farbe: "rot",
}
let karte10: Karte = {
	zahl: "8",
	zeichen: "karo",
	farbe: "rot",
}
let karte11: Karte = {
	zahl: "9",
	zeichen: "karo",
	farbe: "rot",
}
let karte12: Karte = {
	zahl: "10",
	zeichen: "karo",
	farbe: "rot",
}
let karte13: Karte = {
	zahl: "bube",
	zeichen: "karo",
	farbe: "rot",
}
let karte14: Karte = {
	zahl: "dame",
	zeichen: "karo",
	farbe: "rot",
}
let karte15: Karte = {
	zahl: "konig",
	zeichen: "karo",
	farbe: "rot",
}
let karte16: Karte = {
	zahl: "ass",
	zeichen: "karo",
	farbe: "rot",
}
let karte17: Karte = {
	zahl: "7",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte18: Karte = {
	zahl: "8",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte19: Karte = {
	zahl: "9",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte20: Karte = {
	zahl: "10",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte21: Karte = {
	zahl: "bube",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte22: Karte = {
	zahl: "dame",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte23: Karte = {
	zahl: "konig",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte24: Karte = {
	zahl: "ass",
	zeichen: "schaufel",
	farbe: "schwarz",
}
let karte25: Karte = {
	zahl: "7",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte26: Karte = {
	zahl: "8",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte27: Karte = {
	zahl: "9",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte28: Karte = {
	zahl: "10",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte29: Karte = {
	zahl: "bube",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte30: Karte = {
	zahl: "dame",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte31: Karte = {
	zahl: "konig",
	zeichen: "kreuz",
	farbe: "schwarz",
}
let karte32: Karte = {
	zahl: "ass",
	zeichen: "kreuz",
	farbe: "schwarz",
}
document.addEventListener("DOMContentLoaded", HandkartenAnzahl);

let alleKarten: Karte[] = [karte1, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte2, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte3, karte30, karte31, karte32, karte4, karte5, karte6, karte7, karte8, karte9];
let hand: Karte[] = [];
let ablage: Karte[] = [];

function HandkartenAnzahl() {
	let base: number = 10;
	let anzahlHandkarten: string = prompt('wie viele Handkarten mochten sie?');
	let Anzahl = parseInt(anzahlHandkarten, base)
	KartenGenerieren(Anzahl);
}

function KartenGenerieren(_Anzahl: number) {
	for (let i: number = 0; i <= _Anzahl - 1; i++) {
		let random: number = Math.floor(Math.random() * alleKarten.length)
		ErstelleHandKarte(alleKarten[random]);
		hand.push(alleKarten[random]);
		alleKarten.splice(random, 1);
	}
	let StartKarte:number = Math.floor(Math.random() * alleKarten.length)
	ErstelleAblageKarte(alleKarten[StartKarte]);
	hand.push(alleKarten[StartKarte]);
		alleKarten.splice(StartKarte, 1);

	for (let i:number = 0; i<=alleKarten.length -1; i++){
		let AblageKarten:number = Math.floor(Math.random() * alleKarten.length);
		ErstelleZiehStapel(alleKarten[AblageKarten]);
	}
	

}

function ErstelleHandKarte(_c: Karte) {
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
	document.getElementById("handkarten").appendChild(prodCard);
}

function ErstelleAblageKarte(_c:Karte){
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
	document.getElementById("ablage").appendChild(prodCard);
}

function ErstelleZiehStapel (_c:Karte){
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<div>
	<p> ${_c.zahl}</p>
	<img src="" alt="${_c.zeichen}" 
	</div>`;
	document.getElementById("ziehstapel").appendChild(prodCard);

}
