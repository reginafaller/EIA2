var L04_FormElements;
(function (L04_FormElements) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", button);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    let n = 0;
    function handleChange(_event) {
        berechnePreis(_event);
    }
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
            alert("danke");
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
})(L04_FormElements || (L04_FormElements = {}));
//# sourceMappingURL=test.js.map