var input = require("fs").readFileSync("stdin", "utf8"); 

var PI = 3.14159;
var raio = parseFloat(input); 

//var volume = (4/3.0) * PI * ( raio * raio * raio); 
var volume = (4/3.0) * PI * Math.pow(raio, 3); //retorna o valor x elevado à potência (x³).


console.log("VOLUME = " + volume.toFixed(3)); 