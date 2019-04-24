namespace L04_AssocArraysAndExport {
	export interface HeteroPredefined {
		
		type: string;
		name: string;
		value: number;
		id: string;
		class: string;
	}
	export interface HomogenousArray {
		[array: string]: HeteroPredefined[];
	}
    export let data: HomogenousArray
		= {
		"eis": [
			{type: "checkbox", name:"schoko", value: 1, id:"check1", class:"1 Kugel Schoko"},
			{type:"checkbox", name:"vanille", value:1, id:"check2", class:"1 Kugel Vanille"},
			{type:"checkbox", name:"zitrone", value:1.2, id:"check3", class:"1 Kugel Zitrone"},
			{type:"checkbox", name:"himbeer", value:1.2, id:"check4", class:"1 Kugel Himbeer"},
			{type:"checkbox", name:"nuss", value:1.5, id:"check5", class:"1 Kugel Nuss"}
		],
		"sahne": [
			{type:"radio", name:"Sahne", value:0, id:"radio1", class:"Keine Sahne"},
			{type:"radio", name:"Sahne", value:1.2, id:"radio2", class:"Laktosefreie Sahne"},
			{type:"radio", name:"Sahne", value:1, id:"radio3", class:"Sahne"}
		],
		"Anrichtung": [
			{type:"radio", name:"anrichtung", value:1.5, id:"radio4", class:"In Waffel"},
			{type:"radio", name:"anrichtung", value:1, id:"radio5", class:"Im Becher"},
		],
		"Extras": [
			{type:"checkbox", name:"chocolate chunks", value:0.8, id:"check6", class:"topping: chocolate chunks"},
			{type:"checkbox", name:"cookie dough", value:0.8, id:"check7", class:"topping: cookie dough"},
			{type:"checkbox", name:"blueberries", value:1, id:"check8", class:"topping: blueberries"}
		],
		"Sauces": [
			{type:"checkbox", name:"schoko sauce", value:1.5, id:"check9", class:"schokosauce"},
			{type:"checkbox", name:"caramel sauce", value:1.5, id:"check10", class:"caramelsauce"}
		]		
	};
}