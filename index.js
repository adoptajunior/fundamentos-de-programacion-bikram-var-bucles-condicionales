// VARIABLES
// 01
let variableSinValor;
// 02
let booleano1 = true;
let booleano2 = false;
// 03
const PI = 3.14;
// 04
const TAU = PI * 2;

// BOOLEANOS
// 05
const booleanoAnd = booleano1 && booleano2;
// 06
const booleanoNot = !booleano1;
// 07
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// OPERADORES
// 08
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
// 09
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// BUCLES
// 10
let contarHasta10_2 = 0;
for (contarHasta10_2; contarHasta10_2 < 10; contarHasta10_2++) {
    console.log(`Bucle número ${contarHasta10_2 + 1}`);
}
console.log(contarHasta10_2);
// 11
let cero = 0;
let postI = cero;
let postJ = cero;
for (cero; cero < 11; cero++) {
    console.log(postI = postI + postJ++);
};
// 12
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
        console.log(sumaPares);
    }
}

// VARIABLES
// 13 
let variableValorNumerico = 123;
// 14 
const MiNombre = "Jon";
// 15
const MiNumeroFav = 23;

// BOOLEANOS
// 16
let booleanoOr = booleano1 || booleano2;
// 17 
let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);
// 18 
let seisNoEsNueve = 6 !== 9;
// 19 
let booleanoMix2 = variableValorNumerico > 0 || - (MiNumeroFav * TAU);

// OPERADORES
// 20 
let valorSuma = MiNumeroFav + variableValorNumerico;
// 21
let valorResta = MiNumeroFav - variableValorNumerico;
// 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
// 23
let valorDivision = MiNumeroFav / 3;

// BUCLES
// 24
let contarHasta10 = 0;
while (contarHasta10 !== 10) {
    contarHasta10++;
    contarHasta10 === 10;
}
// 25 
let preI = 0;
let preJ = 0;
for (i = 0; i < 11; i++) {
    console.log(preI = preI + ++preJ);
    console.log(i);
};
// 26
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
        console.log(sumaImpares);
    }
}
