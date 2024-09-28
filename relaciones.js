
let relacion = [];
let dominio = [];
let imagen = [];

for (let x = 1; x < 5; x++) {
    for (let y = 0; y <= 4; y++) {
        if (x + y < 3) {
            // Verificamos si el número ya está en el dominio antes de agregarlo
            if (!dominio.includes(x)) {
                dominio.push(x);
            }
            imagen.push(y);
            relacion.push(x, y);
            console.log(relacion);
            relacion = [];
        }
    }
}

console.log("dominio " + dominio);
console.log("imagen " + imagen);


