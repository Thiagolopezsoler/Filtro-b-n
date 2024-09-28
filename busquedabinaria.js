function busquedaBinaria(arr, objetivo) {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (arr[medio] === objetivo) {
            return medio;  // El objetivo se encuentra en el índice 'medio'
        } else if (arr[medio] < objetivo) {
            izquierda = medio + 1;  // El objetivo está en la mitad derecha
        } else {
            derecha = medio - 1;  // El objetivo está en la mitad izquierda
        }
    }

    return -1;  // El objetivo no está en la lista
}

// Ejemplo de uso:
const lista = [1, 3, 5, 7, 9, 11];
const objetivo = 7;
const resultado = busquedaBinaria(lista, objetivo);

if (resultado !== -1) {
    console.log(`El objetivo se encuentra en el índice ${resultado}.`);
} else {
    console.log('El objetivo no se encuentra en la lista.');
}
  
  
  

  
 