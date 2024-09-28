
let arr = [5,74,32,46,8,1,4,92,41,46,3,6,8,9]
let numerosprimos = arr.filter (messi)


function messi (arr){
if (arr <= 1) return false; 
if (arr === 2) return true;
if (arr % 2 === 0) return false;

for (let i = 3; i < Math.sqrt(arr); i += 2){
if(arr % i === 0) return false;
}
return true;
}

console.log (numerosprimos);
 