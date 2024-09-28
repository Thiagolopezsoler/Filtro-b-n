let spr1;
let spr2;
let size = 100;
let spr3;

function setup(){
    createCanvas(800, 800);
    spr1 = createSprite( 700, 200, 50, size);
        spr1.shapeColor = color(0)


spr2 = createSprite(100,200,50,size);
spr2.shapeColor = color(0)

spr3 = createSprite (400,400,30);

spr3.setSpeed(1.0,0)
}


function draw (){
    background(50);
    drawSprites();

    

    if(spr1.position.y > 800){
        spr1.position.y = 700;
    }
    if(spr1.position.y < 0){
        spr1.position.y = 100;
    }

    if(spr2.position.y > 800){
        spr2.position.y = 700;
    }
    if(spr2.position.y < 0){
        spr2.position.y = 100;
    }

    if(spr3.collide(spr1)){
spr3.velocity.x *= -2
    }
if(spr3.collide(spr2)){
    spr3.velocity.x *= -2
    }
}

function keyPressed(){
if(key === 'w'){
 spr1.setSpeed(3.0,270)}
 
 if (key === 's'){
spr1.setSpeed(3.0,90)
}

if (keyCode === UP_ARROW) {
    spr2.setSpeed(3.0, 270);

  }  if (keyCode === DOWN_ARROW) {
    spr2.setSpeed(3.0, 90);
  }
 }

