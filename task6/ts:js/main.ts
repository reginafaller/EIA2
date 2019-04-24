namespace L04_AssocArraysAndExport {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", button)

    function init(_event: Event): void {
        console.log(data);
        displayHomoVar(data)
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", berechnePreis);
        }
    }
    
    function displayHomoVar(_homoVar: HomogenousArray): void {
        for (let array in _homoVar){
            let speicher: HeteroPredefined[] = _homoVar[array];

            for (let i:number = 0; i<speicher.length; i++){
                erstelleBoxen(speicher[i]);
            }
        }}

    function erstelleBoxen(_a:HeteroPredefined):void{
        let checkbox: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _a.id);
        label.innerText = _a.name;
        
        checkbox.setAttribute("type",_a.type);
        checkbox.setAttribute("name",_a.name);
        checkbox.setAttribute("value",_a.value.toString());
        checkbox.setAttribute("id",_a.id);
        checkbox.setAttribute("class",_a.class);
        checkbox.appendChild(label);
        document.getElementById("eisKonfig").appendChild(checkbox);
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
                let preis: number = Number(input[i].value)
                n += preis;
                let bezeichung = document.createElement("li");
                bezeichung.innerHTML = `<p>${input[i].className}</p>`
                document.getElementById("Bestellung").appendChild(bezeichung)

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
