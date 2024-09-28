const personas = [
{nombre: 'azul', edad: 70},
{nombre: 'celeste', edad: 30},
{nombre: 'yeni', edad: 18}     
];

const nameinmayus = personas.map(function(personas){
return{
nombre: personas.nombre.toUpperCase()
}
})



console.log(nameinmayus)

