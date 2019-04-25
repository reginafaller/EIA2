var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", button);
    function init(_event) {
        // console.log(data);
        displayHomoVar(L04_AssocArraysAndExport.data);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", berechnePreis);
        }
    }
    function displayHomoVar(_homoVar) {
        for (let array in _homoVar) {
            let speicher = _homoVar[array];
            console.log(array);
            let div = document.createElement("div");
            div.innerHTML = `<h2>${array}</h2>`;
            document.getElementById("eisKonfig").appendChild(div);
            for (let i = 0; i < speicher.length; i++) {
                erstelleBoxen(speicher[i]);
            }
        }
    }
    function erstelleBoxen(_a) {
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", _a.id);
        checkbox.setAttribute("type", _a.type);
        checkbox.setAttribute("alt", _a.price.toString());
        checkbox.setAttribute("min", _a.min.toString());
        checkbox.setAttribute("max", _a.max.toString());
        checkbox.setAttribute("name", _a.name);
        checkbox.setAttribute("value", _a.value.toString());
        checkbox.setAttribute("id", _a.id);
        checkbox.setAttribute("class", _a.class);
        checkbox.appendChild(label);
        label.innerText = _a.name;
        document.getElementById("eisKonfig").appendChild(label);
        label.appendChild(checkbox);
    }
    let n = 0;
    function button() {
        let button = document.getElementById("bestellen");
        button.addEventListener("click", validate);
    }
    function validate(_event) {
        let fehltArray = [];
        let a = 0;
        let validate = document.getElementsByTagName("input");
        for (let i = 0; i < validate.length; i++) {
            if (validate[i].value == "") {
                let feldName = validate[i].name;
                fehltArray.push(feldName);
            }
        }
        if (fehltArray.length == 0) {
            alert("danke fur ihre Bestellung");
        }
        else {
            alert(`bitte ${fehltArray} ausfullen`);
        }
    }
    function berechnePreis(_event) {
        n = 0;
        document.getElementById("Bestellung").innerHTML = '';
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].value);
                n += preis;
                let bezeichung = document.createElement("li");
                bezeichung.innerHTML = `<p>${input[i].className}</p>`;
                document.getElementById("Bestellung").appendChild(bezeichung);
            }
            if (input[i].type == "number" && Number(input[i].value) > 0) {
                let preis = Number(input[i].alt);
                let value = Number(input[i].value);
                n += preis * value;
                let bezeichung = document.createElement("li");
                bezeichung.innerHTML = `<p>${value} Kugel ${input[i].name}</p>`;
                document.getElementById("Bestellung").appendChild(bezeichung);
            }
            if (input[i].name == "sauce") {
                let stellungSlider = Number(input[i].value);
                let preisSlider = Number(input[i].id);
                n += stellungSlider * preisSlider;
                if (stellungSlider > 0) {
                    let bezeichung = document.createElement("li");
                    bezeichung.innerHTML = `<p>${stellungSlider} ${input[i].className}</p>`;
                    document.getElementById("Bestellung").appendChild(bezeichung);
                }
            }
        }
        document.getElementById("price").innerHTML = n.toFixed(2).toString();
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=main.js.map