var input = require("fs").readFileSync("stdin", "utf8"); 
var linhas = input.split('\n');

var prod1 = linhas.shift().split(" ");
var prod2 = linhas.shift().split(" "); 

var cod1 = prod1.shift();
var uniP1 = prod1.shift();
var valor1 = parseFloat(prod1.shift());

var totalProd1 = uniP1 * valor1;

var cod2 = prod2.shift();
var uniP2 = prod2.shift();
var valor2 = parseFloat(prod2.shift());

var totalProd2 = uniP2 * valor2;
 
var totalCompra = totalProd1 + totalProd2;

console.log("VALOR A PAGAR: R$ " + totalCompra.toFixed(2));