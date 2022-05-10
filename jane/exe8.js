var input = require("fs").readFileSync("stdin", "utf8"); 

var valores = input.split("\n"); //(" ") estrutura de dados: vetor

var idFuncionario = valores.shift(); 
var horasTrabMes = valores.shift();
var valorHora = parseFloat (valores.shift()); 

var salario = horasTrabMes * valorHora;
console.log("NUMBER = " + idFuncionario); 
console.log("SALARY = U$ "  + salario.toFixed(2)); 