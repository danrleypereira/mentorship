/*
In this problem, the task is to read a code of a product 1, the number of units of product 1, 
the price for one unit of product 1, the code of a product 2, the number of units of product 2 
and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a 
floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. 
Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.
*/
const input = require("fs").readFileSync("stdin.txt", "utf8"); 
const linhas = input.split('\n');

const quantoCustaUmProduto = (produto) => {
    return (produto.unidades * produto.preco)
}

let total = 0
for(let i =0; i< linhas.length; i++) {
    const produtoTemporario = linhas[i].split(" ")
    let produto = {
        codigo: produtoTemporario[0],
        unidades: parseInt(produtoTemporario[1]),
        preco: parseFloat(produtoTemporario[2])
    }
    total = total + quantoCustaUmProduto(produto)
}
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
