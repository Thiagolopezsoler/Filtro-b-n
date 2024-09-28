const personas = [
{nombre : 'alma', edad : 45},
{nombre : 'adriana', edad : 45},
{nombre : 'matilda', edad : 75},
{nombre : 'haran', edad : 75},
{nombre : 'brayan', edad : 10},
{nombre : 'yeni', edad : 10}
]


const empleados = personas.reduce((acumulador, persona) => {
if (!acumulador[persona.edad]) {
acumulador[persona.edad] = [];
}
acumulador[persona.edad].push(persona)
return acumulador;

}
);

const onlynames = Object.values(empleados)
.flatmap(personas => personas.nombre);
console.log(onlynames)

