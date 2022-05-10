//Calculo da quantidade de litros de combustível gasto em uma viagem, usando um carro que faz 12 Km/L.

const input = require("fs").readFileSync("stdin", "utf8"); 
const valores = input.split("\n");

const tempoHoras = valores.shift();
const velocidadeMedia = valores.shift();


const distanciaPercorrida = tempoHoras * velocidadeMedia;
const consumoTotal = distanciaPercorrida /12;

console.log(consumoTotal.toFixed(3));