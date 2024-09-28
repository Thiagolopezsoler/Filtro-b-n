const personas = [
    {nombre : 'zaira', edad: 18},
    {nombre : 'aylin', edad: 95},
    {nombre : 'ludmila', edad: 35},
    {nombre : 'kaila', edad: 22}
];
    
const peopleinmayus = personas.map (personas => {
return{
nombre: personas.nombre.toUpperCase(),
edad: personas.edad
};
});
console.log(peopleinmayus);