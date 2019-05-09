namespace L04_AssocArraysAndExport {
	export interface HeteroPredefined {
		
		type: string;
		name: string;
		value: number;
		id: string;
		class: string;
		step: number;
		min: number;
		max: number;
		price: number;
	}
	export interface HomogenousArray {
		[array: string]: HeteroPredefined[];
	}
    export let data: HomogenousArray
		= {
		"eis": [
			{type: "number", name:"schoko", step:1, min:0, max:3, value: 0, id:"check1", price: 1, class:"Schoko"},
			{type:"number", name:"vanille", step:1, min:0, max:3, value:0, id:"check2", price: 1, class:"Vanille"},
			{type:"number", name:"zitrone", step:1, min:0, max:3,value: 0, id:"check3", price: 1, class:"Zitrone"},
			{type:"number", name:"himbeer", step:1, min:0, max:3,value: 0, id:"check4", price: 1, class:"Himbeer"},
			{type:"number", name:"nuss", step:1, min:0, max:3, value: 0, id:"check5", price: 1, class:"Nuss"}
		],
		"sahne": [
			{type:"radio", name:"sahne", value:0, id:"radio", class:"Keine Sahne", step:0, min:0, max:0, price:0},
			{type:"radio", name:"sahne", value:0, id:"radio", class:"Laktosefreie Sahne", step:0, min:0, max:0, price:1},
			{type:"radio", name:"sahne", value:0, id:"radio", class:"Sahne",step:0, min:0, max:0, price:1.2}
		],
		"Anrichtung": [
			{type:"radio", name:"anricht", value:0, id:"radio2", class:"In Waffel", step:0, min:0, max:0, price:1.5},
			{type:"radio", name:"anricht", value:0, id:"radio2", class:"Im Becher", step:0, min:0, max:0, price:1},
		],
		"Extras": [
			{type:"checkbox", name:"chocolate chunks", value:0, id:"check6", class:"chocolate chunks",step:0, min:0, max:0, price:1},
			{type:"checkbox", name:"cookie dough", value:0, id:"check7", class:"cookie dough",step:0, min:0, max:0, price:1.2},
			{type:"checkbox", name:"blueberries", value:0, id:"check8", class:"blueberries", step:0, min:0, max:0, price:1.2}
		],
		"Sauces": [
			{type:"checkbox", name:"schoko sauce", value:0, id:"check9", class:"schokosauce", step:0, min:0, max:0, price:1.5},
			{type:"checkbox", name:"caramel sauce", value:0, id:"check10", class:"caramelsauce", step:0, min:0, max:0, price:1.5}
		]		
	};
}