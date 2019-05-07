namespace L04_AssocArraysAndExport {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", button)

    function init(_event: Event): void {

        displayHomoVar(data)
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", berechnePreis)
        }
    }
    
    function displayHomoVar(_homoVar: HomogenousArray): void {
        
        for (let array in _homoVar){
            let speicher: HeteroPredefined[] = _homoVar[array];
            console.log(array)
            let div:HTMLDivElement= document.createElement("div");
            div.innerHTML = `<h2>${array}</h2>`;
            document.getElementById("eisKonfig").appendChild(div);
            for (let i:number = 0; i<speicher.length; i++){
                erstelleBoxen(speicher[i]);
            }
        }
        
    } 

    function erstelleBoxen(_a:HeteroPredefined):void{
        let checkbox: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _a.id);
        
        checkbox.setAttribute("type",_a.type);
        checkbox.setAttribute("alt",_a.price.toString());
        checkbox.setAttribute("min", _a.min.toString());
        checkbox.setAttribute("max", _a.max.toString());
        checkbox.setAttribute("name",_a.name);
        checkbox.setAttribute("value",_a.value.toString());
        checkbox.setAttribute("id",_a.id);
        checkbox.setAttribute("class",_a.class);
        checkbox.appendChild(label);

        label.innerText = _a.name;
        document.getElementById("eisKonfig").appendChild(label);
        label.appendChild(checkbox);
        if(_a.type == "radio"){
            checkbox.setAttribute("name", _a.id)
        }
       
    }


    let n: number = 0;
    function button() {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bestellen");
        button.addEventListener("click", validate)
    }

    function validate(_event: Event): void {
        let fehltArray: string[] = [];
        let a: number = 0;
        let validate: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < validate.length; i++) {
            if (validate[i].value == "") {
                let feldName: string = validate[i].name
                fehltArray.push(feldName)
            }
        } if (fehltArray.length == 0) {
            alert("danke fur ihre Bestellung");
        } else { alert(`bitte ${fehltArray} ausfullen`); }
    }

    function berechnePreis(_event: Event): void {
        n = 0;
        document.getElementById("Bestellung").innerHTML = '';
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis: number = Number(input[i].alt)
                n += preis;
                let bezeichung = document.createElement("li");
                bezeichung.innerHTML = `<p>${input[i].className}</p>`
                document.getElementById("Bestellung").appendChild(bezeichung)

            }
            if(input[i].type == "number" && Number(input[i].value) > 0){
                let preis: number = Number(input[i].alt);
                let value: number = Number(input[i].value);
                n += preis * value;
                let bezeichung = document.createElement("li");
                bezeichung.innerHTML = `<p>${value} Kugel ${input[i].name}</p>`
                document.getElementById("Bestellung").appendChild(bezeichung);
            }
            if (input[i].name == "sauce") {
                let stellungSlider: number = Number(input[i].value)
                let preisSlider: number = Number(input[i].id)
                n += stellungSlider * preisSlider;
                if (stellungSlider > 0) {
                    let bezeichung = document.createElement("li");
                    bezeichung.innerHTML = `<p>${stellungSlider} ${input[i].className}</p>`
                    document.getElementById("Bestellung").appendChild(bezeichung)
                }
            }
        } document.getElementById("price").innerHTML = n.toFixed(2).toString();
    }
}
