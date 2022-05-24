/*
Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. 
Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

Input
The input file will contain 2 integer numbers.

Output
Print the letter X (uppercase) with a blank space before and after the equal signal followed by 
the value of X, according to the following example.

Obs.: don't forget the endline after all.
*/
//Ler o conteúdo do arquivo stdin e armazena na variável input
const input = require("fs").readFileSync("stdin", "utf8"); //método para leitura de arquivo e parâmetros

const valores = input.split("\n");// split - divide uma string em pequenas strings

let a = parseInt(valores.shift()); // shift - Remove o primeiro elemento de um array e depois retorna 
let b = parseInt(valores.shift()); // parseInt - converte texto em um número inteiro

let x = a + b;

console.log("X = "+ x);
            