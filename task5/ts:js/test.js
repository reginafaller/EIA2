var L04_FormElements;
(function (L04_FormElements) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        let eissorte = _event.target;
        let preisEissorte = parseFloat(eissorte.value);
        berechnePreis(preisEissorte);
    }
    function berechnePreis(_preis) {
        let n = 0;
        console.log(n + _preis);
    }
})(L04_FormElements || (L04_FormElements = {}));
//# sourceMappingURL=test.js.map