//Requisição de módulos
var input = require("fs").readFileSync("stdin", "utf8"); //método para leitura de arquivo e parâmetros

var valores = input.split("\n"); // split - divide uma string em pequenas strings

var A = parseInt(valores.shift()); // shift - Remove o primeiro elemento de um array e depois retorna  
var B = parseInt(valores.shift()); // parseInt - converte texto em um número inteiro

var PROD = A * B;
console.log("PROD = " + PROD); 

 