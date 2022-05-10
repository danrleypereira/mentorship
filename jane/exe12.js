var input = require("fs").readFileSync("stdin", "utf8"); 

var [A, B, C] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;

var areaTriangulo = (A * C) / 2; 
console.log("TRIANGULO: " + areaTriangulo.toFixed(3));

var areaCirculo = PI * C * C; 
console.log("CIRCULO: " + areaCirculo.toFixed(3));

var areaTrapezio = ((A + B) * C) / 2; 
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));

var areaQuadrado = B * B; 
console.log("QUADRADO: " + areaQuadrado.toFixed(3));

var areaRetangulo = A * B; 
console.log("RETANGULO: " + areaRetangulo.toFixed(3));



