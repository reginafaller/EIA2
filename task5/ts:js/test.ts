namespace L04_FormElements {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        console.log(_event)
        let eissorte: HTMLInputElement = <HTMLInputElement>_event.target;
        let preisEissorte = parseFloat(eissorte.value);
        berechnePreis(preisEissorte)
    }

    function berechnePreis(_preis:number){
        let n:number= 0;
        console.log(n+_preis);
    }
    }