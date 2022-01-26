let puertaCorrecta;
let puertaIncorrecta1;
let puertaIncorrecta2;

function elegirPuertaRandom() {
    let puertaRandom = Math.floor(Math.random() * 3 + 1);
    return puertaRandom;
}
function elegirTresPuertasRandom(){ //todo Comprobar si existe uniformidad aleatoria para las 3 variables
    puertaCorrecta = elegirPuertaRandom();
    if (puertaCorrecta == 1) {
        let rangoPuertaIncorrecta = Math.random() * 2 + 1;
        if (rangoPuertaIncorrecta < 2) {
            puertaIncorrecta1 = 2;
            puertaIncorrecta2 = 3;
        } else {
            puertaIncorrecta1 = 3;
            puertaIncorrecta2 = 2;
        }
    } else if (puertaCorrecta == 3) {
        let rangoPuertaIncorrecta = Math.random() * 2 + 1;
        if (rangoPuertaIncorrecta < 2) {
            puertaIncorrecta1 = 1;
            puertaIncorrecta2 = 2;
        } else {
            puertaIncorrecta1 = 2;
            puertaIncorrecta2 = 1;
        }
    } else if (puertaCorrecta == 2) {
        let rangoPuertaIncorrecta = Math.random() * 2 + 1;
        if (rangoPuertaIncorrecta < 2) {
            puertaIncorrecta1 = 1;
            puertaIncorrecta2 = 3;
        } else {
            puertaIncorrecta1 = 3;
            puertaIncorrecta2 = 1;
        }
    }
}


function abrirPuerta(puerta) {
    if (puerta == `puertaIncorrecta1`) {
        document.write(`He abierto la puerta : ${puertaIncorrecta1} y es incorrecta<br>`);
        decision = window.confirm(`¿Desea cambiar de puerta?`);
        if (decision) {
            return `cambiar`;
        }
    } else if (puerta == `puertaIncorrecta2`) {
        document.write(`He abierto la puerta : ${puertaIncorrecta2} y es incorrecta<br>`);
        decision = window.confirm(`¿Desea cambiar de puerta?`);
        if (decision) {
            return `cambiar`;
        }
    }
}

function juegoDePuertas(primerEleccion) {
    document.write(`Usted abrió la puerta : ${primerEleccion}<br>`);
    if (primerEleccion == puertaCorrecta) {
        let puertaIncorrecta = `puertaIncorrecta${Math.floor(Math.random() * 2 + 1)}`
        if (abrirPuerta(puertaIncorrecta) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            if (puertaIncorrecta == `puertaIncorrecta1`) {
                return puertaIncorrecta2;
            } else {
                return puertaIncorrecta1;
            }
        } else {
            document.write(`Conservó su puerta : `);
            return puertaCorrecta;
        }
        
    } else if (primerEleccion == puertaIncorrecta1) {
        if (abrirPuerta(`puertaIncorrecta2`) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            return puertaCorrecta;
        } else {
            document.write(`Conservó su puerta : `);
            return puertaIncorrecta1;
        }
    } else if (primerEleccion == puertaIncorrecta2) {
        if (abrirPuerta(`puertaIncorrecta1`) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            return puertaCorrecta;
        } else {
            document.write(`Conservó su puerta : `);
            return puertaIncorrecta2;
        }
    }
}

//* Función juegoDePuertas
let resultado;
let ganar = 0;
let perder = 0;

function contarJuegoDePuertas() {
    resultado = juegoDePuertas(elegirPuertaRandom());
    if (resultado == puertaCorrecta) {
        document.write(`<span style='color:lightGreen'>Felicidades</span>, la puerta ${resultado} era la correcta<br>`);
        ganar++;
    } else {
        document.write(`<span style='color:red'>Lo siento</span>, la puerta ${resultado} no estaba premiada<br>`);
        perder++;
    }
}

//* Jugar
let index;

for (index = 0; index < 10; index++) {
    elegirTresPuertasRandom();
    contarJuegoDePuertas();
}
document.write(`<br>Usted ganó ${ganar} veces y perdió ${perder} veces<br>Eso representa un ${ganar * 100 / index} % de victorias`);