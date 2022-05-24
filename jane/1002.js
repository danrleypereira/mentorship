/*
The formula to calculate the area of a circumference is defined as A = π . R2. Considering to 
this problem that π = 3.14159:

Calculate the area using the formula given in the problem description.

Input
The input contains a value of floating point (double precision), that is the variable R.

Output
Present the message "A=" followed by the value of the variable, as in the example bellow, 
with four places after the decimal point. Use all double precision variables. Like all the 
problems, don't forget to print the end of line after the result, otherwise you will receive "Presentation Error".
*/
//Requisição de módulos
var input = require("fs").readFileSync("stdin", "utf8"); //método para leitura de arquivo e parâmetros

const PI = 3.14159;
var R = parseFloat(input); //Converte em decimal

var area = PI * ( R * R); //calculo da área
//var area = PI * Math.pow(R, 2); retorna o valor de x elevado à potência de y (x²).


console.log("A = " + area.toFixed(4)); // método converte um número em uma string / método arredonda a string para um número especificado de decimais.