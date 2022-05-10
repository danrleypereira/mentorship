/*Distância entre dois pontos*/ 

const input = require("fs").readFileSync("stdin", "utf8"); 

const x = 60;
const y = 30;
const minutos = (x * input) / y; // regra de 3

console.log(minutos + " minutos");
