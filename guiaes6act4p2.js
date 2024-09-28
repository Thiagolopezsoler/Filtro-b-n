const empleados  = [
{nombre : 'maylen', salario: 4000},
{nombre : 'clara', salario : 5000},
{nombre : 'victoria', salario: 4000},
{nombre : 'morena', salario: 2000}
];



const empleadoswithmoney = empleados.filter ((empleados) => empleados.salario > 3000);



const anual = empleadoswithmoney.map(empleadoswithmoney=> {
return {

salarioanual: empleadoswithmoney.salario*12,
nombre: empleadoswithmoney.nombre
}

}
    



)
console.log(anual)
