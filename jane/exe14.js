const input = require("fs").readFileSync("stdin", "utf8"); 

const valores = input.split("\n");

const x = parseInt(valores.shift());
const y = parseFloat(valores.shift());

const consumoMedio =  x / y;

console.log(consumoMedio.toFixed(3) + " km/l");


