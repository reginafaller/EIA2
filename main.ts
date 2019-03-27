document.addEventListener("DOMContentLoaded", greeter);

function greeter():void {
    let promptValue:string = prompt('name eingeben');
    console.log('herzlich willkommen', promptValue, 'ich habe sie erwartet');


    document.getElementById('name').innerHTML = ('herzlich willkommen ' + promptValue + ' ich habe sie erwartet');
}

