document.addEventListener("DOMContentLoaded", greeter);
function greeter() {
    let promptValue = prompt('name eingeben');
    console.log('herzlich willkommen', promptValue, 'ich habe sie erwartet');
    document.getElementById('name').innerHTML = ('herzlich willkommen ' + promptValue + ' ich habe sie erwartet');
}
//# sourceMappingURL=main.js.map