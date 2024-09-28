let x = 500
let y = 400
let legio = 0
let thiago = 400
let puntos = 0
let vidas = 3


function setup(){

 createCanvas(800,600);
background(0);
}

function draw(){
    background(0);
    
   

    if (keyIsDown(65) === true && y>0) {
        y -= 2;
      }

      if (keyIsDown(68) === true && y<745) {
        y += 2;
      }
    
   
    square(y, x, 55);
   
    ellipse(thiago,legio,80);

    if (legio>700) {
legio=0;
thiago = random(0,800);
puntos+=1;
    }
    
    legio+=10
    fill(255); 
    textSize(24); 
    textAlign(LEFT, TOP); 
    text('Puntos: ' + puntos, 10, 10); 
    text('Vidas: ' + vidas, 10, 40);

    function detectCollision(sqX, sqY, sqSize, circX, circY, circDiameter) {
      let sqCenterX = sqX + sqSize / 2;
      let sqCenterY = sqY + sqSize / 2;
      let circRadius = circDiameter / 2;
      let sqRadius = sqSize / (2 * Math.sqrt(2)); 
    
      let distance = dist(sqCenterX, sqCenterY, circX, circY);
      return distance < (circRadius + sqRadius);
    }

      if (detectCollision(y, x, 55, thiago, legio, 80)) {
        vidas -= 1;
        legio = 0; 
        thiago = random(0, 800); 
      }
      if (vidas <= 0){
        fill(255);
        textSize(48); 
        textAlign(CENTER, CENTER); 
        text('¡PERDISTE, A LLORAR A TU CASA!', width / 2, height / 2); 
        noLoop(); 
        return; 
       
    

      }
}