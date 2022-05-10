//Ler o conteúdo do arquivo stdin e armazena na variável input
var input = require("fs").readFileSync("stdin", "utf8"); //método para leitura de arquivo e parâmetros

    var valores = input.split("\n");// split - divide uma string em pequenas strings

            var a = parseInt(valores.shift()); // shift - Remove o primeiro elemento de um array e depois retorna 
            var b = parseInt(valores.shift()); // parseInt - converte texto em um número inteiro

            var x = a + b;
            
            console.log("X = "+ x);
            