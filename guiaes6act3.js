const nombres = ["Ana", "Luis", "Ana", "Maria", "Luis", "Ana"];

const contadorDeNombres = nombres.reduce((acumulador, turro) => {
  // Si el nombre ya existe en el acumulador, lo incrementamos
  // Si no existe, lo inicializamos en 1
  acumulador[turro] = (acumulador[turro] || 0) + 1;
  
  // Devolvemos el acumulador actualizado en cada iteración
  return acumulador;
}, {}); // <- Aquí estamos inicializando el acumulador como un objeto vacío

console.log(contadorDeNombres);