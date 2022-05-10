//Requisição de módulos
var input = require("fs").readFileSync("stdin", "utf8"); //método para leitura de arquivo e parâmetros

var PI = 3.14159;
var R = parseFloat(input); //Converte em decimal

var area = PI * ( R * R); //calculo da área
//var area = PI * Math.pow(R, 2); retorna o valor de x elevado à potência de y (x²).


console.log("A = " + area.toFixed(4)); // método converte um número em uma string / método arredonda a string para um número especificado de decimais.