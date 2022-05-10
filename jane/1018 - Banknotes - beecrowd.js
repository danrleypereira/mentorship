/*Programa: calcular o menor número possível de notas em que o valor pode ser decomposto.
As notas possíveis são 100, 50, 20, 10, 5, 2 e 1. Imprima o valor lido e a lista de notas.*/
const input = require("fs").readFileSync("stdin", "utf8"); 

let valor = parseInt(input);

const notas =[100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas){
    let qtdsNotas = parseInt(valor / nota);
    console.log(`${qtdsNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}