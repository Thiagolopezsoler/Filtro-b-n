let arr = [4,3,2,1];
let aux;
let swap2 = 0;

function swap(i,j){ 
  console.log(arr);
    aux=arr[i];
    arr[i]= arr[j]
    arr[j] = aux
    swap2++
}
function selection(){

    for(let i = 0; i< arr.length; i++ ){
      for(let j = i + 1; j< arr.length; j++){
        if(arr[j]< arr[i]){
            swap(i,j)
            console.log("la esta posicion fue cambiada " + arr[i] + "por " + arr[j])
        }
      }
    }
    return;
}
selection()
console.log(arr)
console.log("la cantidad de swap hechos fue " + swap2)