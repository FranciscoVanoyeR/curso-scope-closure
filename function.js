function greeting() {
    let userName = 'Anna';
    console.log(userName);
    if (userName === 'Anna') {
        console-log(`Hello ${userName}!`);
    }
}

greeting();
//Aqui no se puede acceder a userName por que esta dentro de la funcion
console.log(userName); 

