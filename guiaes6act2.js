
const personas = [
    {nombre : 'kamila', apellido : 'fleita', edad: 17},
    {nombre : 'lucia', apellido : 'lerda', edad: 22},
    {nombre : 'leila', apellido : 'cabrera', edad: 16},
    {nombre : 'berbachin', apellido : 'farias', edad: 20}
];

const namecomplete = personas.map(personas=> {
return{
nombrecompleto: `${personas.nombre} ${personas.apellido}`,
edad: personas.edad
};
});
console.log(namecomplete)