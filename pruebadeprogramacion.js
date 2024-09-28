let sprrana;
let sprauto1;
let sprauto2;
let sprauto3;
let sprauto4;
let sprauto5;
let sprauto6;
let sprcarril1;
let sprcarril2;
let sprcarril3;
let sprcarril4;
let size = 50;
let vidas = 10;

function setup (){

//creo el canvas
createCanvas(800,600);
 background (0);

// creo los sprites
sprrana = createSprite (50,300,size);
sprauto1 = createSprite (200,50, size,size);
sprauto3 = createSprite (200,100, size,size);
sprauto4 = createSprite (200,150 ,size,size);
sprauto2 = createSprite (400,50, size, size);
sprauto5 = createSprite (200 ,100 , size,size);
sprauto6 = createSprite (200 ,150 , size,size);
sprcarril1 = createSprite (100,0,20,1000);
sprcarril1.shapeColor = color(0);
sprcarril2 = createSprite (250,0,20,1000);
sprcarril2.shapeColor = color(0);
sprcarril3 = createSprite (300,0,20,1000);
sprcarril3.shapeColor = color(0);
sprcarril4 = createSprite (400,0,20,1000);
sprcarril4.shapeColor = color(0);

}
function keyPressed (){

// movimientos de la rana
    if (keyPressed (up_arrow)){
sprrana.position.y += 5
    }
    if (keyPressed (letf_arrow)){
        sprrana.position.y -= 5
        }

if (keyPressed (down_arrow)){
    sprrana.position.x -= 5
    }

    if (keyPressed (right_arrow)){
        sprrana.position.x += 5
        }
// movimientos de la rana
    if (keyCode === (UP_ARROW)){
sprrana.position.y += 5
    }
    if (keyCode === (LETF_ARROW)){
        sprrana.position.y -= 5
        }

if (keyCode === (DOWN_ARROW)){
    sprrana.position.x -= 5
    }

    if (keyCode ===  (RIGHT_ARROW)){
        sprrana.position.x += 5
        }
      }
        function draw(){


    // movimientos de los autos

  // movimientos del auto 1
  sprauto1.position.x += 10

  if (sprauto1.position.x = 800){
    sprauto1.position.x = 0
  }
  // movimiento del auto 2
  sprauto2.position.x -= 10

  if (sprauto2.position.x = 800){
    sprauto2.position.x = 0
  }
         // movimientos del auto 3
  sprauto3.position.x += 10

  if (sprauto3.position.x = 800){
    sprauto3.position.x = 0
  }
  // movimiento del auto 4
  sprauto4.position.x -= 10

  if (sprauto4.position.x = 800){
    sprauto4.position.x = 0
  }   

  // movimientos del auto 5
  sprauto5.position.x += 10

  if (sprauto5.position.x = 800){
    sprauto5.position.x = 0
  }
  // movimiento del auto 6
  sprauto6.position.x -= 10

  if (sprauto6.position.x = 800){
    sprauto6.position.x = 0
  }


  // colosion = respawn de la rana
    if (sprauto1.collide(sprrana)){
    sprrana.position.y = 50
    vidas -=1
    }
  // q pasa cuando ganas
  if (sprrana.position.y = 800){
  fill(255);
  textalign(CENTER,CENTER);
  text = ('ganaste, bien ahi',width / 2 , height / 2)


 
  // cuando perdemos
  if (vidas = 0){
    sprrana = 10000
    }
        

  // cargo los sprites
  }
  drawSprites();
  }

 
 
