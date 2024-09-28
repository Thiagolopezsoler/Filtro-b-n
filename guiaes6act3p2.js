const personas = ["Ana", "Juan", "Ana", "Pedro", "Juan", "Ana"];

const peoplecounting = personas.reduce((rojo, azul) => {
rojo[azul] = (rojo[azul] || 0) + 1;
return rojo;
},{},)
console.log(peoplecounting)