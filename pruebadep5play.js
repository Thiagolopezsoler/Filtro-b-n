let sprite;

function setup() {
  createCanvas(400, 400);
  
  // Crear un sprite en el centro del canvas
  sprite = createSprite(200, 200, 100, 100);
  
  // Cambiar color del sprite
  sprite.shapeColor = color(255, 0, 0);
}

function draw() {
  background(200);
  
  // Dibujar los sprites
  drawSprites();
  
  // Detectar si el sprite está siendo presionado
  if (mousePressedOver(sprite)) {
    console.log("Sprite presionado");
    // Cambiar color cuando se presiona
    sprite.shapeColor = color(0, 255, 0);
  }
}