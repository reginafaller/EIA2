interface Karte {
	zahl: string;
	zeichen: string;
	farbe: string;
	pic: string;
}

let karte1: Karte = {
	zahl: "7",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}

let karte2: Karte = {
	zahl: "8",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}

let karte3: Karte = {
	zahl: "9",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}

let karte4: Karte = {
	zahl: "10",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}
let karte5: Karte = {
	zahl: "bube",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}
let karte6: Karte = {
	zahl: "dame",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}
let karte7: Karte = {
	zahl: "konig",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}
let karte8: Karte = {
	zahl: "ass",
	zeichen: "herz",
	farbe: "rot",
	pic: "../Bilder/herz.png",
}
let karte9: Karte = {
	zahl: "7",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte10: Karte = {
	zahl: "8",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",

}
let karte11: Karte = {
	zahl: "9",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte12: Karte = {
	zahl: "10",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte13: Karte = {
	zahl: "bube",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte14: Karte = {
	zahl: "dame",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte15: Karte = {
	zahl: "konig",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte16: Karte = {
	zahl: "ass",
	zeichen: "karo",
	farbe: "rot",
	pic: "../Bilder/karo.png",
}
let karte17: Karte = {
	zahl: "7",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte18: Karte = {
	zahl: "8",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte19: Karte = {
	zahl: "9",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte20: Karte = {
	zahl: "10",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte21: Karte = {
	zahl: "bube",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte22: Karte = {
	zahl: "dame",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte23: Karte = {
	zahl: "konig",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte24: Karte = {
	zahl: "ass",
	zeichen: "schaufel",
	farbe: "schwarz",
	pic: "../Bilder/schaufel.png",
}
let karte25: Karte = {
	zahl: "7",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte26: Karte = {
	zahl: "8",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte27: Karte = {
	zahl: "9",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte28: Karte = {
	zahl: "10",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte29: Karte = {
	zahl: "bube",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte30: Karte = {
	zahl: "dame",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte31: Karte = {
	zahl: "konig",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
let karte32: Karte = {
	zahl: "ass",
	zeichen: "kreuz",
	farbe: "schwarz",
	pic: "../Bilder/kreuz.png",
}
document.addEventListener("DOMContentLoaded", HandkartenAnzahl);
document.addEventListener("DOMContentLoaded", init)
document.addEventListener("keydown", handleKeydown);



let alleKarten: Karte[] = [karte1, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte2, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte3, karte30, karte31, karte32, karte4, karte5, karte6, karte7, karte8, karte9];
let hand: Karte[] = [];
let ablage: Karte[] = [];

function HandkartenAnzahl(): void {
	let base: number = 10;
	let anzahlHandkarten: string = prompt('wie viele Handkarten mochten sie?');
	let Anzahl = parseInt(anzahlHandkarten, base)
	KartenGenerieren(Anzahl);
}

function KartenGenerieren(_Anzahl: number): void {
	for (let i: number = 0; i <= _Anzahl - 1; i++) {
		let random: number = Math.floor(Math.random() * alleKarten.length)
		ErstelleHandKarte(alleKarten[random], i);
		hand.push(alleKarten[random]);
		alleKarten.splice(random, 1);
	}
	let StartKarte: number = Math.floor(Math.random() * alleKarten.length)
	ErstelleAblageKarte(alleKarten[StartKarte]);
	ablage.push(alleKarten[StartKarte]);
	alleKarten.splice(StartKarte, 1);

	ErstelleZiehStapel()
}

function ErstelleHandKarte(_c: Karte, _i: number): void {
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<fieldset class="test" id="${_i}">
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</fieldset>`;
	document.getElementById("handkarten").appendChild(prodCard);

}

function ErstelleAblageKarte(_c: Karte): void {
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<div>
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</div>`;
	document.getElementById("ablage").appendChild(prodCard);
}

function ErstelleZiehStapel(): void {
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<fieldset class="ziehen">
	</fieldset>`;
	document.getElementById("ziehstapel").appendChild(prodCard);

}

function init(): void {


	for (let i: number = 0; i < hand.length; i++) {

		let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("test")[i];
		fieldset.addEventListener("click", clickHandler);
	}

	let ziehStapel: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("ziehen")[0];
	ziehStapel.addEventListener("click", zieheKarte);
}

function zieheKarte(_event: MouseEvent): void {
	if (alleKarten.length > 0) {
		let random: number = Math.floor(Math.random() * alleKarten.length)
		hand.push(alleKarten[random]);
		alleKarten.splice(random, 1);
		document.getElementById("handkarten").innerHTML = '';
		for (let i: number = 0; i < hand.length; i++) {
			ErstelleHandKartenNeu(hand[i], i)
		}
		init();
	}
	else {
		console.log('no more cards :(')
	}
}

function clickHandler(_event: MouseEvent): void {
	let clickedCard: HTMLFieldSetElement = <HTMLFieldSetElement>_event.target;
	let cardId: string = clickedCard.id;
	let cardIdNumber: number = Number(cardId);
	let karteInAblage: Karte = hand[cardIdNumber];
	ablage.push(hand[cardIdNumber]);
	hand.splice(cardIdNumber, 1);
	ErstelleAblageKarte(karteInAblage);
	document.getElementById("handkarten").innerHTML = '';
	for (let i: number = 0; i < hand.length; i++) {
		ErstelleHandKartenNeu(hand[i], i)
	}
	init();
}

function ErstelleHandKartenNeu(_c: Karte, _i: number): void {
	let prodCard = document.createElement("div");
	prodCard.innerHTML =
		`<fieldset class="test" id="${_i}">
	<p> ${_c.zahl}</p>
	<img src="${_c.pic}" alt="${_c.zeichen}" 
	</fieldset>`;
	document.getElementById("handkarten").appendChild(prodCard);
}

function handleKeydown(_event: KeyboardEvent): void {
	if (_event.keyCode == 32) {
		if (alleKarten.length > 0) {
			let random: number = Math.floor(Math.random() * alleKarten.length);
			hand.push(alleKarten[random]);
			alleKarten.splice(random, 1);
			document.getElementById("handkarten").innerHTML = '';
			for (let i: number = 0; i < hand.length; i++) {
				ErstelleHandKartenNeu(hand[i], i);
			}
			init();
		}
		else {
			console.log('no more cards :(');
		}
	}
}

function sortSign (_k:Karte){
	document.getElementById("handkarten").innerHTML = '';
	var sortedArray = [{type:karte1, zeichen:1},
						{type:karte2, zeichen:2},
						{type:karte3, zeichen:3},
						{type:karte4, zeichen:4},
						{type:karte5, zeichen:5},
						{type:karte6, zeichen:6},
						{type:karte7, zeichen:7},
						{type:karte8, zeichen:8},
						{type:karte9, zeichen:9},];

	sortedArray.sort(function(a,b){return a.zeichen - b.zeichen});
	console.log (sortedArray)
	
}
