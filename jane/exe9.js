var input = require("fs").readFileSync("stdin", "utf8"); 

var valores = input.split("\n"); 

var nome = valores.shift(); 
var salarioFixo = parseFloat(valores.shift());
var totalvendas = parseFloat(valores.shift()); 

var comissao = totalvendas * 0.15; 
var salarioFinal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));