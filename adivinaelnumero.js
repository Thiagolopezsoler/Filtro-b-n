let legio;
let alekai = `?`

function setup(){
createCanvas(1500, 700);
background(0);
square(675,250,200);

legio = floor(random(0,1000));
console.log(legio);

fill(255);
textSize(20);
text('Adivina el numero', 50, 50);

fill(0)
textSize(150);
text('?', 740, 390);

let button = createButton('¿sera?');
button.position(735, 550);
button.mousePressed(thebuttonispressed);

let button1 = createButton('limpiar');
button1.position(800, 550);
button1.mousePressed(thebuttonispressed1);

input = createInput();  
input.position(680, 500); 
input.size(200);
}

function draw(){
}

function thebuttonispressed(){

let galletita = input.value();  
console.log(galletita)

if(galletita > legio){
alekai = `El numero es mas chico`;
}
if (galletita < legio) {
alekai = `El numero es mas grande`;
}
    
if (galletita == legio){
alekai = `¡¡¡¡correcto!!!!`;
}

textSize(15);
fill(255);
text("El numero es " + alekai, 660, 100);
}

function thebuttonispressed1(){
fill(0);
square(740, 5, 200);

}


















