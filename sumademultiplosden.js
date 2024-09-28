
let n = 2
let arreglo = [3,4,7,8,3];
let pajaro = 0
let avion = arreglo.filter((a) => a % n === 0);
let camion = avion.reduce((b,c) => b+c, pajaro)
console.log(camion)