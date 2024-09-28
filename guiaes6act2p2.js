const people = [
{nombre: 'cristina', apellido: 'suarez', edad: 52},
{nombre: 'amalia', apellido: 'acosta', edad: 45},
{nombre: 'alisia', apellido: 'carrizo', edad: 69},
{nombre: 'lautra', apellido: 'ochoa', edad: 35}
];


const fullname = people.map(people => {
return{

nombrecompleto: `${people.nombre} ${people.apellido}`,
edad: people.edad
}    
})
console.log(fullname)