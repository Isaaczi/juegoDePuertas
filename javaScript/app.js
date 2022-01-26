function puertaIncorrectaRandom(){
    let puertaIncorrectaRandom = Math.floor(Math.random() * 2 + 1);
    return puertaIncorrectaRandom;
}
function elegirPuertaRandom() {
    let puertaRandom = Math.floor(Math.random() * 3 + 1);
    return puertaRandom;
}

let puertaCorrecta = 3;
let puertaIncorrecta1 = 1;
let puertaIncorrecta2 = 2;

// let puertaCorrecta = elegirPuertaRandom();
// if (puertaCorrecta == 1) {
//     rangoPuertaIncorrecta = Math.random() * 3 + 1;
//     if (rangoPuertaIncorrecta < 2) {
//         puertaIncorrecta1 = 1
//     }
// }

function abrirPuerta(puerta) {
    document.write(`He abierto la puerta : ${puerta} y es incorrecta<br>`);
    decision = window.confirm(`¿Desea cambiar de puerta?`);
    if (decision) {
        return `cambiar`;
    }
}

function juegoDePuertas(primerEleccion) {
    document.write(`Usted abrió la puerta : ${primerEleccion}<br>`);
    if (primerEleccion == puertaCorrecta) {
        let puertaIncorrecta = puertaIncorrectaRandom()
        if (abrirPuerta(puertaIncorrecta) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            if (puertaIncorrecta == puertaIncorrecta1) {
                return puertaIncorrecta2;
            } else {
                return puertaIncorrecta1;
            }
        } else {
            document.write(`Conservó su puerta : `);
            return puertaCorrecta;
        }
        
    } else if (primerEleccion == puertaIncorrecta1) {
        if (abrirPuerta(puertaIncorrecta2) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            return puertaCorrecta;
        } else {
            document.write(`Conservó su puerta : `);
            return puertaIncorrecta1;
        }
    } else if (primerEleccion == puertaIncorrecta2) {
        if (abrirPuerta(puertaIncorrecta1) == `cambiar`) {
            document.write(`Usted hizo un cambio de puerta : `);
            return puertaCorrecta;
        } else {
            document.write(`Conservó su puerta : `);
            return puertaIncorrecta2;
        }
    }
}

let resultado;
let ganar = 0;
let perder = 0;

function contarJuegoDePuerta() {
    resultado = juegoDePuertas(elegirPuertaRandom());
    if (resultado == puertaCorrecta) {
        document.write(`<span style='color:lightGreen'>Felicidades</span>, la puerta ${resultado} era la correcta<br>`);
        ganar++;
    } else {
        document.write(`<span style='color:red'>Lo siento</span>, la puerta ${resultado} no estaba premiada<br>`);
        perder++;
    }
}
let i;
for (i = 0; i < 10; i++) {
    contarJuegoDePuerta();
}
document.write(`<br>Usted ganó ${ganar} veces y perdió ${perder} veces<br>
Eso representa un ${ganar * 100 / i} % de victorias`);