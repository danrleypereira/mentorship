//Ler o conteúdo do arquivo stdin e armazena na variável input
const input = require("fs").readFileSync("stdin", "utf8"); 
    
    const  [a , b, c] = input.split(" ").map(item => parseInt(item)); // map: analisa cada valor e converte para número


    const maiorAB = (a + b + Math.abs (a - b)) / 2 ; // Math: fornece funcionalidades matemáticas básicas e constantes.
    const maiorX = (c + maiorAB + Math.abs(c - maiorAB)) / 2; 
    console.log(maiorX + " eh o maior");




