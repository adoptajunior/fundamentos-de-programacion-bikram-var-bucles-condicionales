// VARIABLES
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;

// BOOLEANOS
const booleanoAnd = booleano1 && booleano2;
const booleanoNot = !booleano1;
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// OPERADORES
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// BUCLES
let contarHasta10_2 = 0;
for (contarHasta10_2; contarHasta10_2 < 10; contarHasta10_2++) {
    console.log(`Bucle número ${contarHasta10_2 + 1}`);
}
console.log(contarHasta10_2);

let cero = 0;
let postI = cero;
let postJ = cero;
for (cero; cero < 11; cero++) {
    console.log(postI = postI + postJ++);
};

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
        console.log(sumaPares);
    }
}