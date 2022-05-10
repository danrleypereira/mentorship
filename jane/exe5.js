
var input = require("fs").readFileSync("stdin", "utf8"); 

var valores = input.split("\n"); 

var A = parseFloat(valores.shift()); // parseFloat - Converte uma string em um número de ponto flutuante.
var B = parseFloat(valores.shift()); 

var media = (A * 3.5 + B * 7.5) / 11.0;
console.log("MÉDIA = " + media.toFixed(5)); 