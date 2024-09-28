const empleados  = [
{nombre : 'maylen', salario: 4000},
{nombre : 'clara', salario : 5000},
{nombre : 'victoria', salario: 4000},
{nombre : 'morena', salario: 2000}
];



const empleadosconguita = empleados.filter((a) => a.salario > 3000);

const biyuyaanual = empleadosconguita.map (empleado=> {
return {

salarioanual: empleado.salario * 12,
nombre: empleado.nombre
}
});
console.log(biyuyaanual)




