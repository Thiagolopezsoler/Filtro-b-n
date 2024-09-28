
function lineasearch(datos, n) {
    for(let pos = 0; pos < datos.length; pos++) {
        if(datos[pos] == n) {
            return true;
        }
    }
    return false;
}

let datos = [2, 8, 5, 4];
console.log(lineasearch(datos, 8)); 