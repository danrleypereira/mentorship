const input = require("fs").readFileSync("stdin", "utf8"); 
const valores = input.split("\n");

const [x1, y1] = valores [0].split(" "); // desestruturação de valores
const [x2, y2] = valores [1].split(" ");


const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1),2)); //Math.sqrt: Retorna a raiz quadrada de um número.

console.log(distancia.toFixed(4));


