// GLOBAL SCOPE - CUALQUIER VARIABLE QUE ESTE DENTRO DEL DOCUENTO
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries(){
    //Si se asigna una variable sin declarar pasa a ser global
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);
