const palabrasAleatorias = [
"murmullo", "abrazo", "camino", "fuego", "ruido", "brisa", "caricia", "libertad", 
"espejo", "viento", "sonrisa", "latido", "nube", "oceano", "luz", "misterio", 
"alma", "verano", "sombra", "lago", "susurro", "trueno", "destino", "mariposa", 
"frontera", "reflejo", "silencio", "vertigo", "paraiso", "vibracion", "piedra", 
"montaña", "hoja", "lluvia", "memoria", "flor", "puente", "tierra", "rayo", 
"colina", "anhelo", "cielo", "deseo", "estrella", "bosque", "ceniza", "llama", 
"ritmo", "horizonte", "noche", "soledad", "desierto", "cascada", "destello", 
"eco", "paz", "claridad", "remolino", "olas", "travesia", "niebla", "isla", 
"aurora", "faro", "huella", "pasion", "esencia", "manantial", "sentimiento", 
"navegante", "tormenta", "corazon", "presagio", "infinito", "quimera", "fantasia", 
"sueño", "cristal", "rio", "solsticio", "profundidad", "laguna", "suspiro", 
"roca", "huracan", "palpito", "volcan", "carretera", "desafio", "brillo", 
"muralla", "firmeza", "templo", "llanura", "relampago", "enigma", "sabiduria", 
"glaciar", "arena", "eternidad", "fuerza", "aventura", "magia", "mirada", "espuma", 
"pasaje", "aliento", "recuerdo", "nieve", "cumbre", "serenidad", "esplendor", 
"espejismo", "zafiro", "diamante", "marea", "resplandor", "belleza", "penumbra", 
"ocaso", "meditacion", "atardecer", "primavera", "transparencia", "armonia", 
"viaje", "conexion", "bruma", "refugio", "descanso", "despertar", "centinela", 
"inspiracion", "sabiduria", "mar", "olvido", "manantial", "huracan", "desvelo", 
"centella", "espiga", "caverna", "peregrino", "sabana", "pincelada", "bravura", 
"estribillo", "mastil", "melancolia", "confin", "albor", "iman", "crepusculo", 
"vientre", "baldio", "galope", "raiz", "desatino", "ojal", "ocaso", "carcajada", 
"portico", "alba", "charca", "petalo", "angulo", "patibulo", "muralla", "rastro", 
"voluta", "rubor", "eclipse", "sosiego", "llanto", "zenit", "umbria", "alabastro", 
"quimera", "marisma", "mazmorra", "relieve", "arcano", "relampago", "brujula", 
"murmullo", "ramalazo", "miraje", "trueno", "abismo", "oceano", "boveda", "pradera", 
"altitud", "cenit", "alba", "cresta", "baluarte", "subita", "caudal", "flanco", 
"macizo", "lecho", "firmamento", "mosaico", "recodo", "cisne", "palma", "cantaro", 
"temblor", "salino", "rugido", "talamo", "roseton", "secano", "boveda", "vergel", 
"vendaval", "guijarro", "argonauta", "partitura", "latitud", "destino", "quinto", 
"patina", "hollin", "medallon", "ocaso", "talud", "grieta", "faraon", "regimen", 
"vinculacion", "palpito", "solana", "tizne", "salitre", "pantanoso", "rocio", 
"garganta", "vertice", "persiana", "neblina", "geiser", "pliegue", "monzon", 
"valle", "amanecer", "eclipse", "tabernaculo", "concordia", "quebrada", "cordillera", 
"estrechura", "navegacion", "brinco", "cimera", "liturgia", "ataraxia", "meridiano", 
"tizon", "estrepito", "relicario", "alcazar", "dorso", "glauco", "orogenia", 
"sideral", "cienaga", "poniente", "fragor", "relumbre", "magnolia", "marejada", 
"arcilla", "tapiz", "manglar", "acantilado", "ladera", "granizo", "zigzag", 
"aljibe", "laberinto", "meridional", "umbria", "tragaluz", "terraplen", "tronera", 
"espinazo", "saeta", "malecon", "majestad", "celaje", "nubarron", "espiral", 
"hornacina", "solsticio", "domo", "aterrizaje", "cascabel", "vetusto", "vitrina", 
"refresco", "lucero", "algoritmo", "pecera", "pentagrama", "fanatico", "desplante", 
"voragine", "titilar", "acueducto", "esfinge", "altiplano", "aureo", "azur", 
"bisel", "cefiro", "enlace", "funambulo", "boveda", "chimenea", "dedalo", "orbitar", 
"palangana", "precipicio", "quimera", "carambano", "somnolencia", "vacilacion", 
"paraje", "secuoya", "triciclo", "vandalico", "zapote", "alcazar", "barometro", 
"carillon", "derrumbe", "errante", "fanfarria", "gondola", "helice", "iglesia", 
"jirafa", "luciernaga", "mueca", "nudo", "ocelote", "patron", "quimera", "retrato", 
"sereno", "tobogan", "umbra", "vientre", "zigurat", "altaneria", "bermellon", 
"cascada", "delirio", "espejo", "fragua", "galbano", "hidra", "ingenio", "juguete", 
"kilometro", "livido", "miasma", "noche", "orilla", "policia", "quemazon", "ruido", 
"serpiente", "tablero", "ultraje", "viento", "yerba", "zangano", "arbol", "bosque", 
"ciudad", "dinero", "espectro", "fuente", "ganso", "huracan", "izquierda", "joya", 
"kilovatio"
];

let palabraelegida; 
let palabra;
let letrasAdivinadas = [];
let cantidad = 0;
let malasletras = [];

function setup() {
//creo el canvas
createCanvas(1515, 703);
background(0);

//creo el input(lugar para poner las letras)
input = createInput();
input.position(80, 600);
input.size(1300);


//hago un buton
let button = createButton('enviar');
button.position(1400, 600);
button.mousePressed(seralaletra);

//busco una palabra random
let palabraIndex = floor(random(0, palabrasAleatorias.length));
palabraelegida = palabrasAleatorias[palabraIndex];
console.log(palabraelegida);

//creo las separaciones
let sprite = createSprite(0, 500, 3200, 50);
let sprite1 = createSprite(1000, 100, 50, 750);

//cargo los sprites
drawSprites();

//Activo la funcion para q se haga la hoca
drawGallows();

// creo los signos de pregunta
for (let i = 0; i < palabraelegida.length; i++) {
fill(255);
square(13 + 66 * i, 350, 40, 10);
textSize(35);
fill(0);
text("?", 24 + 66 * i, 382);
}
}


function drawGallows() {
// Base de la horca
stroke(255);
strokeWeight(4);
line(100, 300, 250, 300); // Base
line(175, 300, 175, 100); // Poste vertical
line(175, 100, 275, 100); // Poste horizontal
line(275, 100, 275, 150); // Cuerda
}

//si es una sola letra pruebo si la letra ingresada esta en la palabra
function seralaletra() {
let letraIngresada = input.value();

if (letraIngresada && letraIngresada.length === 1) {
if (palabraelegida.includes(letraIngresada)) {
letrasAdivinadas.push(letraIngresada); // Solo se añade si es correcta
} else {
malasletras.push(letraIngresada); // Añadir a letras incorrectas
cantidad++; // Incrementar el contador de errores
drawHangman(cantidad); // Dibujar el ahorcado si la letra es incorrecta
}
input.value(''); // Limpiar el input
mostrarPalabra(); // Actualizar la palabra en pantalla
mostrarMalasLetras(); // Mostrar letras incorrectas
}

// Verificamos si el jugador ha ganado
if (verificarVictoria()) {
fill(255);
textSize(50);
text('¡Felicitaciones, ganaste!', 600, 200);
}
}



//muestro la letra en el canvas
function mostrarPalabra() {
fill(255);
for (let i = 0; i < palabraelegida.length; i++) {
if (letrasAdivinadas.includes(palabraelegida[i])) {
fill(255);
square(13 + 66 * i, 350, 40, 10);
fill(0)
text(palabraelegida[i], 24 + 66 * i, 382); 
} else{
cantidad ++;
drawHangman(cantidad);
}
}
}

//me dice las letras q no van
function mostrarMalasLetras() {
fill(255);
textSize(35);
text("Letras incorrectas: " + malasletras.join(', '), 1050, 50); 
}

function drawHangman(cantidad) {
strokeWeight(2);
// Dibujar el hombresito de palos en función del valor de cantidad
if (cantidad > 0*palabraelegida.length) {
ellipse(275, 170, 40, 40);
}
if (cantidad > 1) {
line(275, 190, 275, 250); 
}
if (cantidad > 2) {
line(275, 210, 250, 230); 
}
if (cantidad > 3) {
line(275, 210, 300, 230); 
}
if (cantidad > 4) {
line(275, 250, 250, 280); 
}
if (cantidad > 5) {
line(275, 250, 300, 280); 
}
if (cantidad > 6) {
fill(255);
text('!!!Felicitaciones perdiste¡¡¡', 600, 200)
}
    
}

//si ganaste te felicita
function verificarVictoria() {
for (let i = 0; i < palabraelegida.length; i++) {
if (!letrasAdivinadas.includes(palabraelegida[i])) {
return false; 
}
}
return true; 
}

function mostrarPalabra() {
fill(255);
for (let i = 0; i < palabraelegida.length; i++) {
if (letrasAdivinadas.includes(palabraelegida[i])) {
          
fill(255);
square(13 + 66 * i, 350, 40, 10);
fill(0);
text(palabraelegida[i], 24 + 66 * i, 382); 
} else {
            
fill(255);
square(13 + 66 * i, 350, 40, 10);
fill(0);
text("?", 24 + 66 * i, 382);
}
}
}

