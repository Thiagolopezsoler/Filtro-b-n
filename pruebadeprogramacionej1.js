const a = [7,4,2,1,9,5];
const b = 3; 

const IsDivisible = a.filter((a) => a % b === 0);
const gorra = IsDivisible.filter((IsDivisible) => a % 5 === 0);

console.log(gorra);
